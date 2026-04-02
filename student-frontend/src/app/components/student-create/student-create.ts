import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-create.html',
  styleUrls: ['./student-create.css']
})
export class StudentCreateComponent {

  student: Student = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    phoneNumber: '',
    city: '',
    course: '',
    enrollmentDate: new Date().toISOString() // Automatically set current date
  };

  constructor(
    private studentService: StudentService,
    public router: Router
  ) {}

  onSubmit(form: NgForm) {
    // 1. Mark all fields as touched to show validation errors if user just hits Enter
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        form.controls[field].markAsTouched();
      });
      return;
    }

    // 2. Call service to add student
    this.studentService.addStudent(this.student).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert("Student added successfully!");
        this.router.navigate(['/view-students']);
      },
      error: (err) => {
        console.error('Backend Error:', err);
        alert("Failed to save student. Please check the backend connection.");
      }
    });
  }
}