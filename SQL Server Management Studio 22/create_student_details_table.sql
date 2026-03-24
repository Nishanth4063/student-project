use StudentDB;
go
CREATE TABLE StudentDetails (
    StudentId INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Age INT,
    Gender NVARCHAR(20),
    Email NVARCHAR(100),
    PhoneNumber NVARCHAR(20),
    City NVARCHAR(100),
    Course NVARCHAR(50),
    EnrollmentDate DATE DEFAULT GETDATE()
);
