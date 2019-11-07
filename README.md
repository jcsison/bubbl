# bubbl
A bubble-themed cloud-based file storage web application for personal use.

## Features
- Currently a work in progress!

## Development Requirements
- [.NET Core 3.0.100 SDK](https://dotnet.microsoft.com/download/dotnet-core/3.0)
- [PostgreSQL](https://www.postgresql.org/download/)

## Instructions
Install [.NET Core 3.0.100 SDK](https://dotnet.microsoft.com/download/dotnet-core/3.0) and [PostgreSQL](https://www.postgresql.org/download/).

### Setting Up the Database

Ensure that the PostgreSQL service is started:

``` bash
sudo service postgresql start
```

Assuming default settings, set the password for the default user `postgres` to `123`.

```bash
sudo -u postgres psql
\password postgres
exit
```

Create the `bubbl` database:

``` bash
sudo -u postgres createdb bubbl
```

Populate database:

``` bash
sudo -u postgres psql -d bubbl -a -f testdata.pgsql
```

### Running the Web Application

From the `Web/` directory, install npm dependencies:

``` bash
npm install
```

Run the web application:

``` bash
dotnet run
```

### Project Structure
- `Data/`: Manages data models and database migrations.
- `Service/`: Intermediary between the frontend and backend.
- `Web/`: ASP.NET framework implementing the model-view-controller pattern.

## To-do
#### In progress
- bubble creation, editing, deletion
- bubble tagging

#### Planned (in order of priority)
- more default types (hyperlink, video, audio, generic file, code)
- type verification
- bubble sorting/filtering
- file manager UI
- YouTube API integration
- user authentication
- integrated video playback
