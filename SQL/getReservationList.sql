CREATE PROCEDURE getReservationList
AS
BEGIN
    SELECT reservationId, itemName, itemId
    FROM dbo.RESERVATION
    ORDER BY reservationId;
END;