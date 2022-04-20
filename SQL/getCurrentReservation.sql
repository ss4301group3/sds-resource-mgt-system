CREATE PROCEDURE getCurrentReservation
AS
BEGIN
    SELECT reservationId, itemName, itemId, loanLocation, startTime
    FROM dbo.RESERVATION
    WHERE isPending = 1
    ORDER BY reservationId;
END;