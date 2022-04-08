CREATE PROCEDURE newReservation(
    @itemName VARCHAR(MAX) NOT NULL,
    @itemId VARCHAR(MAX) NOT NULL,
    @loanLocation VARCHAR(MAX) NULL,
    @startTime DATETIME2(3),
    @endTime DATETIME2(3),
    @personId INT,
    @supervisorId INT NULL
)
AS
BEGIN
    INSERT INTO dbo.RESERVATION
    (itemName, itemId, loanLocation, startTime, endTime, personId, supervisorId)
    VALUES (@itemName, @itemId, @loanLocation, @startTime, @endTime, @personId, @supervisorId);
END;