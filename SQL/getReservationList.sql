CREATE PROCEDURE getReservationList
AS
BEGIN
    SELECT *
    FROM dbo.RESERVATION
    ORDER BY reservationId;
END;