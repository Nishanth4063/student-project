package com.example.student.sp;

import jakarta.persistence.*;
import org.springframework.stereotype.Repository;

@Repository
public class DeleteSP {

    @PersistenceContext
    private EntityManager entityManager;

    public void deleteStudent(Long id) {
        StoredProcedureQuery query =
                entityManager.createStoredProcedureQuery("sp_DeleteStudent");

        query.registerStoredProcedureParameter("StudentId", Integer.class, ParameterMode.IN);
        query.setParameter("StudentId", id);

        query.execute();
    }
}
