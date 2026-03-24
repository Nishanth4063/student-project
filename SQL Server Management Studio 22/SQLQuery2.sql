USE master;
GO
-- This creates the login for the whole server
ALTER LOGIN [Nishanth] WITH PASSWORD='nish07',  
CHECK_POLICY=OFF;
ALTER LOGIN [Nishanth]ENABLE;
GO

