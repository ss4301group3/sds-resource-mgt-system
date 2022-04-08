CREATE PROCEDURE getCategories
AS
BEGIN
    SELECT categoryId, categoryName
    FROM dbo.CATEGORY
    ORDER BY categoryId;
END;