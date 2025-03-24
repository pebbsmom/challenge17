# Project Title: Social Network API ![License](https://img.shields.io/badge/License-MIT-yellow.svg)
## Description 
This API is designed to be used in a social network web application where users can share their thoughts, react to friends' thought, and create a friend list.  It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
GitHub Link https://github.com/pebbsmom/challenge17
1) Clone this repo onto your local computer using 'git clone'. 2) Make sure you install all the necessary dependencies by running 'npm i' in the terminal. 3) Build the application using 'npm run build' 4) Create and seed the database using 'npm run seed' 5) Start the API by running 'npm run start'
## Usage
In order to use this application, after typing 'npm run start' , open Insomnia to localhost : 3001.  You can then test out the various API endpoints.
Walkthrough Video 







https://github.com/user-attachments/assets/e37a9b59-bd90-4610-808f-8ea1cd5a0ee2


API Endpoints

Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user + thoughts
- `POST /api/users/:userId/friends/:friendId` - Add friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove friend

 Thoughts

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get thought by ID
- `POST /api/thoughts` - Create thought
- `PUT /api/thoughts/:id` - Update thought
- `DELETE /api/thoughts/:id` - Delete thought
- `POST /api/thoughts/:thoughtId/reactions` - Add reaction
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete reaction
 
## License
This project is licensed under the MIT license. [MIT](https://opensource.org/licenses/MIT)
## Contributing
Many thanks to Dan M. for his assistance and the TAs in the class.  Additionally, Copilot was used for code suggestions and debugging.
## Tests
In order to test the application, create the HTTP requests in Insomnia and verify that they work.  
## Questions
To reach me with additional questions please contact me at:
perezteri@hotmail.com  
GitHub : [pebbsmom](https://github.com/pebbsmom)



