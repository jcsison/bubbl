# bubbl

[![Build Status](https://nilla.visualstudio.com/bubbl/_apis/build/status/jcsison.bubbl?branchName=master)](https://nilla.visualstudio.com/bubbl/_build/latest?definitionId=1&branchName=master)
[![CodeFactor](https://www.codefactor.io/repository/github/jcsison/bubbl/badge)](https://www.codefactor.io/repository/github/jcsison/bubbl)
[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/jcsison/bubbl/blob/master/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A bubble-themed cloud-based file storage web application for personal use.

Feel free to try out the serverless demo [here](https://d3umsnoinocrtq.cloudfront.net/).

## Development Requirements
- [.NET Core 3.0.100 SDK](https://dotnet.microsoft.com/download/dotnet-core/3.0)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Node.js](https://nodejs.org/en/download/current/)

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
npm ci
```

Run the web application:

``` bash
dotnet run
```

## Project Structure
- `server/`: Contains the main project files.
    - `Data/`: Manages data models and database migrations.
    - `Service/`: Intermediary between `Data` and `Web`.
    - `Web/`: ASP.NET framework implementing the model-view-controller pattern.
- `serverless/`: Serverless fork intended for quick testing and deployment.

## To-do
#### In progress
- bubble creation, editing, deletion
- bubble filtering
- placeholder images

#### Planned (in order of priority)
- generic file uploading
- additional bubble types (video, audio, code, etc.)
- support for mobile-sized devices
- catalog view
- bubble size buttons
- loading indicators
- title extraction from url
- thumbnail generation from url
- Dockerize application
- user authentication
- YouTube API integration
- integrated video playback
- bubble/file manager UI
