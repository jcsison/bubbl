INSERT INTO Users
(UserName, PasswordHash, CreationDate) VALUES
('jcsison', '123', '2019-10-04');
DELETE FROM Users WHERE Id > 1
SELECT * FROM Users

DBCC CHECKIDENT ('Contents', RESEED, 0)
DELETE FROM Contents
INSERT INTO Contents
(UploadDate, Type, Location, Description, ImageUrl, UserId) VALUES
('2019-10-04', 'Image', 'google.com', 'test', 'https://s4.anilist.co/file/anilistcdn/user/avatar/large/b16442-SYCwcnwzZMn6.png', 1),
('2019-10-04', 'Image', 'google.com', 'test', 'https://s4.anilist.co/file/anilistcdn/user/avatar/large/b16442-SYCwcnwzZMn6.png', 1),
('2019-10-04', 'Image', 'google.com', 'test', 'https://s4.anilist.co/file/anilistcdn/user/avatar/large/b16442-SYCwcnwzZMn6.png', 1);
SELECT * FROM Contents
