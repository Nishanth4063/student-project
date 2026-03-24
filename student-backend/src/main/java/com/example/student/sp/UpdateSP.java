package com.example.student.sp;

import jakarta.persistence.*;
import org.springframework.stereotype.Repository;

import com.example.student.entity.StudentDetails;

@Repository
public class UpdateSP {

    @PersistenceContext
    private EntityManager entityManager;

   public void updateStudent(StudentDetails student) {
    StoredProcedureQuery query = entityManager.createStoredProcedureQuery("sp_UpdateStudent");

    // All parameters from SSMS 
    query.registerStoredProcedureParameter("StudentId", Integer.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("FirstName", String.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("LastName", String.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("Age", Integer.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("Gender", String.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("Email", String.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("PhoneNumber", String.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("City", String.class, ParameterMode.IN);
    query.registerStoredProcedureParameter("Course", String.class, ParameterMode.IN);

    // Set values using getters (like getFirstName, getCity, etc.)
    query.setParameter("StudentId", student.getStudentId());
    query.setParameter("FirstName", student.getFirstName());
    query.setParameter("LastName", student.getLastName());
    query.setParameter("Age", student.getAge());
    query.setParameter("Gender", student.getGender());
    query.setParameter("Email", student.getEmail());
    query.setParameter("PhoneNumber", student.getPhoneNumber());
    query.setParameter("City", student.getCity());
    query.setParameter("Course", student.getCourse());

    query.execute();
   }
}