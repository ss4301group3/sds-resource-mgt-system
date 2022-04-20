CREATE PROCEDURE getReservationById(
    @personId INT
)
AS
BEGIN
    SELECT *
    FROM dbo.RESERVATION
    WHERE personId = @personId
    ORDER BY reservationId;
END;