CREATE TABLE IF NOT EXISTS public."Users" (
    "Id" serial PRIMARY KEY,
    "UserName" VARCHAR (50) UNIQUE NOT NULL,
    "PasswordHash" VARCHAR (50) NOT NULL,
    "CreationDate" DATE NOT NULL
);
TRUNCATE TABLE public."Users" RESTART IDENTITY CASCADE;
INSERT INTO public."Users"
("UserName", "PasswordHash", "CreationDate") VALUES
('user1', '123', '2019-10-04');
SELECT * FROM public."Users";

CREATE TABLE IF NOT EXISTS public."Contents" (
    "Id" serial PRIMARY KEY,
    "UploadDate" DATE NOT NULL,
    "Type" VARCHAR (50) NOT NULL,
    "Location" VARCHAR (250),
    "Description" VARCHAR (500),
    "ImageUrl" VARCHAR (250),
    "UserId" serial NOT NULL
);
TRUNCATE TABLE public."Contents" RESTART IDENTITY;
INSERT INTO public."Contents"
("UploadDate", "Type", "Location", "Description", "ImageUrl", "UserId") VALUES
('2019-10-04', 'Image', 'https://en.wikipedia.org/wiki/Penrose_stairs', 'Penrose Stairs', 'http://mathworld.wolfram.com/images/eps-gif/PenroseStairway_700.gif', 1),
('2019-10-04', 'Image', 'https://en.wikipedia.org/wiki/Golden_ratio', 'Golden Ratio', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/250px-Fibonacci_spiral_34.svg.png', 1),
('2019-10-04', 'Image', 'https://en.wikipedia.org/wiki/Koch_snowflake', 'Koch Snowflake', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Koch_Snowflake_7th_iteration.svg/512px-Koch_Snowflake_7th_iteration.svg.png', 1),
('2019-10-04', 'YouTube', 'https://www.youtube.com/watch?v=Bs5TEuZPQl8', 'Video', 'http://i3.ytimg.com/vi/Bs5TEuZPQl8/maxresdefault.jpg', 1),
('2019-10-04', 'Text', NULL, 'Hello!', NULL, 1);
SELECT * FROM public."Contents";
