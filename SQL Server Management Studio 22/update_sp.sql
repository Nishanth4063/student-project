USE StudentDB;
GO

SELECT * FROM StudentDetails;

CREATE PROCEDURE sp_UpdateStudent
    @StudentId INT,
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Email NVARCHAR(100),
    @City NVARCHAR(50),
    @Course NVARCHAR(50)
AS
BEGIN
    UPDATE StudentDetails 
    SET FirstName = @FirstName, 
        LastName = @LastName, 
        Email = @Email, 
        City = @City, 
        Course = @Course
    WHERE StudentId = @StudentId;
END;
GO