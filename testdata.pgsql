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

SET timezone = 'America/Los_Angeles';
CREATE TABLE IF NOT EXISTS public."Contents" (
    "Id" serial PRIMARY KEY,
    "Description" VARCHAR (500),
    "ImageUrl" VARCHAR (250),
    "Location" VARCHAR (250),
    "Tags" VARCHAR (250),
    "Type" VARCHAR (50) NOT NULL,
    "UploadDate" TIMESTAMPTZ NOT NULL,
    "UserId" serial NOT NULL
);
TRUNCATE TABLE public."Contents" RESTART IDENTITY;
INSERT INTO public."Contents"
("Description", "ImageUrl", "Location", "Tags", "Type", "UploadDate", "UserId") VALUES
(
    'Penrose Stairs',
    'http://mathworld.wolfram.com/images/eps-gif/PenroseStairway_700.gif',
    'https://en.wikipedia.org/wiki/Penrose_stairs',
    'image',
    'Image',
    '2019-10-04 19:10:25-07',
    1
),
(
    'Golden Ratio',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/250px-Fibonacci_spiral_34.svg.png',
    'https://en.wikipedia.org/wiki/Golden_ratio',
    'image',
    'Image',
    '2019-10-04 19:11:31-07',
    1
),
(
    'Koch Snowflake',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Koch_Snowflake_7th_iteration.svg/512px-Koch_Snowflake_7th_iteration.svg.png',
    'https://en.wikipedia.org/wiki/Koch_snowflake',
    'image',
    'Image',
    '2019-10-04 19:13:56-07',
    1
),
(
    'taking notes in class. with my typewriter.',
    'http://i3.ytimg.com/vi/Bs5TEuZPQl8/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=Bs5TEuZPQl8',
    'youtube',
    'YouTube',
    '2019-10-04 19:17:11-07',
    1
),
(
    'Hello!',
    NULL,
    NULL,
    'text',
    'Text',
    '2019-10-04 19:19:22-07',
    1
);
SELECT * FROM public."Contents";
