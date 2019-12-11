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

DROP TABLE public."Contents";
SET timezone = 'America/Los_Angeles';
CREATE TABLE IF NOT EXISTS public."Contents" (
    "Id" serial PRIMARY KEY,
    "Title" VARCHAR (200),
    "Description" VARCHAR (1000),
    "ImageUrl" VARCHAR (250),
    "Location" VARCHAR (250),
    "Tags" VARCHAR (250),
    "Type" VARCHAR (50) NOT NULL,
    "UploadDate" TIMESTAMPTZ NOT NULL,
    "UserId" serial NOT NULL
);
TRUNCATE TABLE public."Contents" RESTART IDENTITY;
INSERT INTO public."Contents"
("Title", "Description", "ImageUrl", "Location", "Tags", "Type", "UploadDate", "UserId") VALUES
(
    'Penrose Stairs',
    NULL,
    '/images/type-link.png',
    'https://en.wikipedia.org/wiki/Penrose_stairs',
    'link',
    'link',
    '2019-10-04 19:10:25-07',
    1
),
(
    'Golden Ratio',
    NULL,
    '/images/type-link.png',
    'https://en.wikipedia.org/wiki/Golden_ratio',
    'link',
    'link',
    '2019-10-04 19:11:31-07',
    1
),
(
    'Koch Snowflake',
    NULL,
    '/images/type-link.png',
    'https://en.wikipedia.org/wiki/Koch_snowflake',
    'link',
    'link',
    '2019-10-04 19:13:56-07',
    1
),
(
    'taking notes in class. with my typewriter.',
    NULL,
    '/images/type-link.png',
    'https://www.youtube.com/watch?v=Bs5TEuZPQl8',
    'youtube',
    'youtube',
    '2019-10-04 19:17:11-07',
    1
),
(
    'it all returns to nothing',
    'it just comes tumbling down, tumbling down, tumbling down',
    NULL,
    NULL,
    'text',
    'text',
    '2019-10-04 19:19:22-07',
    1
);
SELECT * FROM public."Contents";
