CREATE PROCEDURE approveReservation3(
    @reservationId INT
)
AS
BEGIN
    UPDATE dbo.RESERVATION
    SET 
    isPending = 0, 
    isApproved3 = 1
    WHERE reservationId = @reservationId;
END;