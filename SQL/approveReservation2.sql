CREATE PROCEDURE approveReservation2(
    @reservationId INT
)
AS
BEGIN
    UPDATE dbo.RESERVATION
    SET 
    isApproved2 = 1
    WHERE reservationId = @reservationId;
END;