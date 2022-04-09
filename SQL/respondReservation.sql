CREATE PROCEDURE newReservation(
    @reservationId INT,
    @responderId1 INT,
    @responderId2 INT,
    @responderId3 INT
)
AS
BEGIN
    UPDATE dbo.RESERVATION(responderId1, responderId2, responderId3)
    SET 
    responderId1 = @responderId1, 
    responderId2 = @responderId2, 
    responderId3 = @responderId3
    WHERE reservationId = @reservationId;
END;