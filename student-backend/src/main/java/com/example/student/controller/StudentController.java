package com.example.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.dto.ApiResponse;
import com.example.student.entity.StudentDetails;
import com.example.student.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // CREATE
    @PostMapping
    public ResponseEntity<ApiResponse> addStudent(@RequestBody StudentDetails student) {
        studentService.addStudent(student);
        return ResponseEntity.ok(new ApiResponse("Student added successfully", true));
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<List<StudentDetails>> getStudents() {
        List<StudentDetails> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    // READ BY ID
    @GetMapping("/{id}")
    public ResponseEntity<StudentDetails> getStudentById(@PathVariable Long id) {
        StudentDetails student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateStudent(@PathVariable Long id,
                                                     @RequestBody StudentDetails student) {
        student.setStudentId(id.intValue());
        studentService.updateStudent(student);
        return ResponseEntity.ok(new ApiResponse("Student updated successfully", true));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.ok(new ApiResponse("Student deleted successfully", true));
    }
}