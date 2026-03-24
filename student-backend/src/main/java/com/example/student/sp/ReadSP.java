package com.example.student.sp;

import jakarta.persistence.*;
import org.springframework.stereotype.Repository;
import com.example.student.entity.StudentDetails;
import java.util.List;

@Repository
public class ReadSP {

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    public List<StudentDetails> getAllStudents() {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("sp_GetAllStudents", StudentDetails.class);
        return query.getResultList();
    }
}