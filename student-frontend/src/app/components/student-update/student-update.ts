import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Added ChangeDetectorRef
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student.model'; 

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-update.html',
  styleUrls: ['./student-update.css']
})
export class StudentUpdateComponent implements OnInit {

  id!: number;

  student: Student = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    phoneNumber: '',
    city: '',
    course: ''
  };

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    public router: Router,
    private cdr: ChangeDetectorRef // 2. Injecting Change Detector
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe({
      next: (data: Student) => {
        this.student = data; 
        
        // 🔥 This is the fix! It forces Angular to refresh the UI 
        // with the new data immediately without waiting for a click.
        this.cdr.detectChanges(); 
      },
      error: () => {
        alert("Failed to load student details!");
      }
    });
  }

  // Submit update
  onSubmit(form: any) {

    // Show all validation errors if they try to submit with mistakes
    Object.keys(form.controls).forEach(field => {
      form.controls[field].markAsTouched();
    });

    if (form.invalid) {
      alert("Please fix validation errors!");
      return;
    }

    this.studentService.updateStudent(this.id, this.student).subscribe({
      next: () => {
        alert("Student updated successfully");
        this.goToStudentList();
      },
      error: () => {
        alert("Update failed!");
      }
    });
  }

  goToStudentList() {
    this.router.navigate(['/view-students']);
  }
}