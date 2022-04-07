CREATE PROCEDURE getPersonList
AS
BEGIN
    SELECT personID, displayName
    FROM dbo.PERSON
    ORDER BY personID;
END;