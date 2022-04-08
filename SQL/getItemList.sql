CREATE PROCEDURE getItemList
AS
BEGIN
    SELECT itemId, itemName
    FROM dbo.ITEM
    ORDER BY itemId;
END;