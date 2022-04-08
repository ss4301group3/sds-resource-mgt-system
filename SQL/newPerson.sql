CREATE PROCEDURE newPerson(
    @graphId VARCHAR(MAX) NULL,
    @displayName VARCHAR(MAX) NULL,
    @Email VARCHAR(MAX) NULL,
    @Faculty VARCHAR (MAX) NULL,
    @Phone INT NULL
)
AS
BEGIN
    INSERT INTO dbo.PERSON
    (graphId, displayName, Email, Faculty, Phone)
    VALUES (@graphId, @displayName, @Email, @Faculty, @Phone);
END;