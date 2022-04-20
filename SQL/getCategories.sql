CREATE PROCEDURE getCategories
AS
BEGIN
    SELECT *
    FROM dbo.CATEGORY
    ORDER BY categoryId;
END;