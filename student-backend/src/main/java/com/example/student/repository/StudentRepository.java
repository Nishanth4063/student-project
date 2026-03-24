package com.example.student.repository;

import org.springframework.stereotype.Repository;

import com.example.student.entity.StudentDetails;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface StudentRepository extends CrudRepository<StudentDetails, Long> {
    // If want add SP methods 
}
