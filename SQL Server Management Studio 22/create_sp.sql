USE StudentDB;
GO

CREATE PROCEDURE sp_CreateStudent
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Age INT,
    @Gender NVARCHAR(20),
    @Email NVARCHAR(100),
    @PhoneNumber NVARCHAR(20),
    @City NVARCHAR(100),
    @Course NVARCHAR(50)
AS
BEGIN
    INSERT INTO StudentDetails
    (FirstName, LastName, Age, Gender, Email, PhoneNumber, City, Course)
    VALUES
    (@FirstName, @LastName, @Age, @Gender, @Email, @PhoneNumber, @City, @Course);
END;
GO