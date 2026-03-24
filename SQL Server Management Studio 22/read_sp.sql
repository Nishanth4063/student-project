use StudentDB;
go

create procedure sp_GetAllStudents
as
begin
     SELECT StudentId, FirstName, LastName, Age, Gender, Email, PhoneNumber, City, Course, EnrollmentDate 
     FROM StudentDetails
end;

