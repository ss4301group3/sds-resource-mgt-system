CREATE PROCEDURE getPersonList
AS
BEGIN
    SELECT personID, displayName
    FROM dbo.PERSON
    ORDER BY personID;
END;

-- CREATE PROCEDURE getReservationList
-- AS
-- BEGIN
--     SELECT reservationID, itemName, itemId
--     FROM dbo.RESERVATION
--     ORDER BY itemID;
-- END;

-- CREATE PROCEDURE getPersonList
-- AS
-- BEGIN
--     SELECT personID, displayName
--     FROM dbo.PERSON
--     ORDER BY personID;
-- END;