CREATE PROCEDURE getReservationList
AS
BEGIN
    SELECT reservationID, itemName, itemId
    FROM dbo.RESERVATION
    ORDER BY itemID;
END;