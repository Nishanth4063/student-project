import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';
import { StudentSearchPipe } from '../../pipes/student-search.pipe';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentSearchPipe],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentList implements OnInit {

  students: Student[] = [];
  searchText: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        this.cdr.detectChanges();
        console.log(this.students);
      },
      error: (error) => {
        console.error("Error loading students:", error);
      }
    });
  }

  addStudent(): void {
    this.router.navigate(['/create-student']);
  }

  onEdit(student: Student): void {
    this.router.navigate(['/update-student', student.studentId]);
  }

  onDelete(id: number): void {
    if (confirm("Are you sure you want to delete this student?")) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          alert("Student deleted successfully");
          this.loadStudents();
        },
        error: (error) => {
          console.error("Delete failed:", error);
        }
      });
    }
  }

}