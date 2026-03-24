ALTER PROCEDURE sp_GetAllStudents
AS
BEGIN
    SELECT 
        StudentId,
        FirstName,
        LastName,
        Age,
        Gender,
        Email,
        PhoneNumber,
        City,
        Course,
        EnrollmentDate
    FROM StudentDetails
END