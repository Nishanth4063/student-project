create database StudentDB;

use StudentDB;
go
select * from Students;

create table Students(
StdID int primary key identity(1,1),
Name varchar(50),
Age int,
Email varchar(100)
);

