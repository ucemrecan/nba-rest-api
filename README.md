# NBA Rest API

This project is a simple NBA Rest API created using Express.js. The API provides basic CRUD (Create, Read, Update, Delete) operations for NBA teams and players.

## Getting Started

To run the project, follow the steps below.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository using `git clone git@github.com:ucemrecan/nba-rest-api.git`
2. Open the terminal in the project directory.
3. Navigate into the project directory using `cd nba-rest-api`.
4. Use the `npm install` command to install dependencies.
5. Start the project with the `npm run dev` command.

### Usage

You can use the following basic routes to interact with the API:

- **GET `/api/teams`**: Get all teams.

  Response Example:

  ```json
  [
    {
      "id": 1,
      "name": "Los Angeles Lakers",
      "founded": 1947,
      "arena": "Crypto.com Arena",
      "conference": "Western",
      "division": "Pacific",
      "city": "Los Angeles",
      "nba_titles": 17
    },
    // Other teams...
  ]

- **GET `/api/teams/:name`**: Get a specific team by name.

  Response Example for Miami Heat:
  
    ```json
    {
      "id": 4,
      "name": "Miami Heat",
      "founded": 1988,
      "arena": "AmericanAirlines Arena",
      "conference": "Eastern",
      "division": "Southeast",
      "city": "Miami",
      "nba_titles": 3
    }

- **GET `/api/division/:division`**: Get teams in a specific division.

  Response Example for Pacific:

  ```json
  [
    {
        "id": 3,
        "name": "Golden State Warriors",
        "founded": 1946,
        "arena": "Chase Center",
        "conference": "Western",
        "division": "Pacific",
        "city": "San Francisco",
        "nba_championship": 7
    }

- **GET `/api/conference/:conference`**: Get teams in a specific conference.

  Response Example for Western:

  ```json
  [
     {
        "id": 8,
        "name": "Dallas Mavericks",
        "founded": 1980,
        "arena": "American Airlines Center",
        "conference": "Western",
        "division": "Southwest",
        "city": "Dallas",
        "nba_titles": 1
      },
    // Other teams...
  ]

- **POST `/api/teams`**: Add a new team.

  Request Body Example:

  ```json
    {
      "name": "New Team",
      "founded": 2000,
      "arena": "New Arena",
      "conference": "Eastern",
      "division": "Atlantic",
      "city": "New City",
      "nba_titles": 0
    }
  ```
  Response Example:

  ```json
  [
    // Existing teams...
    {
      "id": 15,
      "name": "New Team",
      "founded": 2000,
      "arena": "New Arena",
      "conference": "Eastern",
      "division": "Atlantic",
      "city": "New City",
      "nba_titles": 0
    }
  ]

- **PUT `/api/teams/:name`**: Update a team by name.

  Request Body Example:

  ```json
    {
      "name": "Updated Team",
      "founded": 2005,
      "arena": "Updated Arena",
      "conference": "Western",
      "division": "Pacific",
      "city": "Updated City",
      "nba_titles": 1
    }
  ```
  Response Example:
  ```json
    [
      // Existing teams...
      {
        "id": 15,
        "name": "Updated Team",
        "founded": 2005,
        "arena": "Updated Arena",
        "conference": "Western",
        "division": "Pacific",
        "city": "Updated City",
        "nba_titles": 1
      }
    ]

- **DELETE `/api/teams/:name`**: Delete a team by name.
