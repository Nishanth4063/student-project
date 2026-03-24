CREATE PROCEDURE sp_DeleteStudent
    @StudentId INT
AS
BEGIN
    DELETE FROM StudentDetails WHERE StudentId = @StudentId;
END;
GO