import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';
import { CommonModule } from '@angular/common'; // ✅ imported

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ add CommonModule here
  templateUrl: './student-create.html',
  styleUrls: ['./student-create.css'] // ❌ note: it should be styleUrls, not styleUrl
})
export class StudentCreateComponent {
  student: Student = {
    firstName: '', lastName: '', age: 0, gender: '',
    email: '', phoneNumber: '', city: '', course: ''
  };

  constructor(private studentService: StudentService, public router: Router) {}

  onSubmit(form: any) {

  // 🔥 Force all fields to show validation errors
  Object.keys(form.controls).forEach(field => {
    form.controls[field].markAsTouched();
  });

  // 🚫 Stop if invalid
  if (form.invalid) {
    alert("Please fix validation errors!");
    return;
  }

  // ✅ Only valid data goes to backend
  this.studentService.addStudent(this.student).subscribe({
    next: (response: any) => {
      alert(response.message);
      this.router.navigate(['/view-students']);
    },
    error: () => {
      alert("Backend Error!");
    }
  });
}
}
