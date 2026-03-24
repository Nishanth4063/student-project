import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = 'http://localhost:8081/api/students';

  constructor(private http: HttpClient) {}

  // Get all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL);
  }

  // Add student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseURL, student);
  }

  // Get student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseURL}/${id}`);
  }

  // Update student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseURL}/${id}`, student);
  }

  // Delete student
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}