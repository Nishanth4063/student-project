package com.example.student.service;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.student.entity.StudentDetails;
import com.example.student.repository.StudentRepository;
import com.example.student.sp.CreateSP;
import com.example.student.sp.DeleteSP;
import com.example.student.sp.ReadSP;



@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CreateSP createSP;

    @Autowired
    private ReadSP readSP;

    @Autowired
    private DeleteSP deleteSP;

    // CREATE
    public void addStudent(StudentDetails student) {
        createSP.createStudent(student);
    }

    // READ ALL
    public List<StudentDetails> getAllStudents() {
        return readSP.getAllStudents();
    }

    // READ BY ID
    public StudentDetails getStudentById(Long id) {
        return studentRepository.findById(Objects.requireNonNull(id)).orElse(null);
    }

    // UPDATE
    public StudentDetails updateStudent(@NonNull StudentDetails student) {
        return studentRepository.save(student);
    }

    // DELETE
    public void deleteStudent(Long id) {
        deleteSP.deleteStudent(Objects.requireNonNull(id));
    }
}