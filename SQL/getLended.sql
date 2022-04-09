CREATE PROCEDURE getLended
AS
BEGIN
    SELECT reservationId, itemName, itemId
    FROM dbo.RESERVATION
    WHERE isReleased = 1
    ORDER BY reservationId;
END;