CREATE PROCEDURE approveReservation1(
    @reservationId INT
)
AS
BEGIN
    UPDATE dbo.RESERVATION
    SET 
    isApproved1 = 1
    WHERE reservationId = @reservationId;
END;