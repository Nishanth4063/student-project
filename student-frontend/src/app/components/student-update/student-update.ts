import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-update.html',
  styleUrls: ['./student-update.css']
})
export class StudentUpdateComponent implements OnInit {

  id!: number;
  student: any = {};

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get ID from URL /update-student/52
    this.id = this.route.snapshot.params['id'];

    // Fetch student details from backend
    this.studentService.getStudentById(this.id).subscribe({
      next: (data) => {
        this.student = data;
        console.log("Loaded student:", this.student);
      },
      error: (err) => {
        console.error("Could not fetch student details", err);
        alert("Failed to load student details. Check backend.");
      }
    });
  }

  // Called when update form is submitted
  onSubmit(form: any) {

  // 🚫 STOP if invalid
  if (form.invalid) {
    alert("Please fix validation errors!");
    return;
  }

  // ✅ Only valid data goes
  this.studentService.updateStudent(this.student.id, this.student).subscribe({
    next: (res: any) => {
      alert(res.message);
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