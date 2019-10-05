INSERT INTO Users
(UserName, PasswordHash, CreationDate) VALUES
('user1', '123', '2019-10-04');
DELETE FROM Users WHERE Id > 1
SELECT * FROM Users

DBCC CHECKIDENT ('Contents', RESEED, 0)
DELETE FROM Contents
INSERT INTO Contents
(UploadDate, Type, Location, Description, ImageUrl, UserId) VALUES
('2019-10-04', 'Image', 'https://en.wikipedia.org/wiki/Penrose_stairs', 'Penrose Stairs', 'http://mathworld.wolfram.com/images/eps-gif/PenroseStairway_700.gif', 1),
('2019-10-04', 'Image', 'https://en.wikipedia.org/wiki/Golden_ratio', 'Golden Ratio', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/250px-Fibonacci_spiral_34.svg.png', 1),
('2019-10-04', 'Image', 'https://en.wikipedia.org/wiki/Koch_snowflake', 'Koch Snowflake', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Koch_Snowflake_7th_iteration.svg/512px-Koch_Snowflake_7th_iteration.svg.png', 1),
('2019-10-04', 'YouTube', 'https://www.youtube.com/watch?v=7yjUT2wAJks', 'http://i3.ytimg.com/vi/7yjUT2wAJks/maxresdefault.jpg', 1)
('2019-10-04', 'Text', NULL, 'Hello!', NULL, 1);
SELECT * FROM Contents
