CREATE PROCEDURE declineReservation(
    @reservationId INT
)
AS
BEGIN
    DELETE FROM dbo.RESERVATION()
    WHERE reservationId = @reservationId;
END;