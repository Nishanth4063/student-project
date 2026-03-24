package com.example.student.sp;

import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.StoredProcedureQuery;
import org.springframework.stereotype.Repository;
import com.example.student.entity.StudentDetails;

@Repository
public class CreateSP {

    @PersistenceContext
    private EntityManager entityManager;

    public void createStudent(StudentDetails student) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("sp_InsertStudent");

        // Registering parameters in the exact order in SSMS 
        query.registerStoredProcedureParameter("FirstName", String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("LastName", String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("Age", Integer.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("Gender", String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("Email", String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("PhoneNumber", String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("City", String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("Course", String.class, ParameterMode.IN);

        // Setting values from StudentDetails entity
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