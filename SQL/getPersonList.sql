CREATE PROCEDURE getPersonList
AS
BEGIN
    SELECT personId, displayName
    FROM dbo.PERSON
    ORDER BY personId;
END;