import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentList implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchText: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef // Forces the UI to update
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: Student[]) => {
        console.log("Data successfully arrived!");
        
        // Use spread operator [...] to ensure Angular sees a NEW array
        this.students = [...data];
        this.filteredStudents = [...data]; 
        
        // Trigger manual update
        this.cdr.detectChanges();
        
        console.log("Table should now show rows:", this.filteredStudents.length);
      },
      error: (error) => console.error("Error:", error)
    });
  }

  onSearchChange(): void {
    const search = this.searchText.toLowerCase().trim();
    if (!search) {
      this.filteredStudents = [...this.students];
    } else {
      this.filteredStudents = this.students.filter(s => 
        (s.firstName || '').toLowerCase().includes(search) ||
        (s.lastName || '').toLowerCase().includes(search) ||
        (s.email || '').toLowerCase().includes(search) ||
        (s.course || '').toLowerCase().includes(search)
      );
    }
    this.cdr.detectChanges();
  }

  addStudent() { this.router.navigate(['/create-student']); }
  
  onEdit(student: Student) {
    if (student.studentId) {
      this.router.navigate(['/update-student', student.studentId]);
    }
  }

  onDelete(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure?")) {
      this.studentService.deleteStudent(id).subscribe(() => {
        alert("Deleted!");
        this.loadStudents();
      });
    }
  }
}