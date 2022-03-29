CREATE SCHEMA dbo;
GO

-- Create a new table called 'TableName' in schema 'Master'PERSON the table if it already exists
IF OBJECT_ID('dbo.PERSON', 'U') IS NOT NULL
DROP TABLE PERSON
GO
-- Create the table in the specified schema
CREATE TABLE dbo.PERSON
(
    personId INT IDENTITY(1,1), -- primary key column
    GraphId VARCHAR(MAX) NULL,
    DisplayName VARCHAR(MAX) NULL,
    Email VARCHAR(MAX) NULL,
    Faculty VARCHAR (MAX) NULL,
    Phone INT NULL
    -- specify more columns here
);
GO

IF OBJECT_ID('dbo.RESERVATION', 'U') IS NOT NULL
DROP TABLE RESERVATION
GO

CREATE TABLE dbo.RESERVATION
(
    reservationId INT IDENTITY(1,1),
    itemName VARCHAR(MAX) NOT NULL,
    itemId VARCHAR(MAX) NOT NULL,
    loanLocation VARCHAR(MAX) NULL,
    startTime DATETIME2(3),
    isReleased BIT,
    endTime DATETIME2(3),
    isReturned BIT,
    personId INT,
    supervisorId INT NULL,
    responderId1 INT NULL,
    responderId2 INT NULL,
    responderId3 INT NULL,
    isPending BIT,
    isApproved1 BIT,
    isApproved2 BIT,
    isApproved3 BIT
);
GO

IF OBJECT_ID('dbo.CATEGORY', 'U') IS NOT NULL
DROP TABLE CATEGORY
GO

CREATE TABLE dbo.CATEGORY
(
    categoryId INT IDENTITY(1,1),
    categoryName VARCHAR(MAX) NOT NULL,
    parentId INT NULL
);
GO

IF OBJECT_ID('dbo.ITEM', 'U') IS NOT NULL
DROP TABLE ITEM
GO

CREATE TABLE dbo.ITEM
(
    itemId INT IDENTITY(1,1),
    itemName VARCHAR(MAX) NOT NULL,
    internalTagORstatusRemarks VARCHAR(MAX) NULL,
    externalRemarks VARCHAR(MAX) NULL,
    updateTime DATETIME2 NOT NULL,
    isConsumable BIT
);
GO

IF OBJECT_ID('dbo.CONSUMABLE', 'U') IS NOT NULL
DROP TABLE CONSUMABLE
GO

CREATE TABLE dbo.CONSUMABLE
(
    consumableId INT,
    FOREIGN KEY (consumableId) REFERENCES dbo.ITEM (itemId),
    valuePerAmount INT,
    valueUnit VARCHAR(MAX) NULL,
    amountIn INT,
    amountOut INT,
    amountBalance INT,
    amountUnit VARCHAR(MAX) NULL,
    nextInAmount INT NULL,
    nextInDate DATETIME2 NULL,
    datePurchased DATE NULL,
    expiryDate DATE NULL
);
GO

IF OBJECT_ID('dbo.NONCONSUMABLE', 'U') IS NOT NULL
DROP TABLE NONCONSUMABLE
GO

CREATE TABLE dbo.NONCONSUMABLE
(
    isAvailable BIT CHECK (isBlocked<1) CHECK (isOutOfOrder<1) CHECK (isFaulty<1),
    isBlocked BIT,
    isOutOfOrder BIT,
    isFaulty BIT,
    Brand VARCHAR NULL,
    Model VARCHAR NULL,
    equipmentNumber INT NULL,
    serialNumber INT NULL,
    assigneeId INT NULL
);
GO