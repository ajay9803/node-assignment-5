# Node.js Assignment 5

This is a Node.js application for managing users and their to-do items. The application includes user authentication and authorization using JWT, CRUD operations for users (restricted to super admin), and CRUD operations for to-do items for each user. 

## Features

- Add a Default Super Admin User
- Create CRUD Routes for Users
- Ensure Only Super Admin Can Access User Routes
- Implement CRUD Operations for To-Do Items for Each User
- Add Proper HTTP Status Codes
- Proper Error Handling
- Logging with Winster
- Data validation with Joi
- Use of limiter-package to limit request
- Use of helmet-package to be safe from web-vulnerabilites
- Use of Cors for to allow safe domains

## Installation

1. Clone the repository:
   git clone https://github.com/ajay9803/node-assignment-4

2. Install packages:  
   npm install

## Testing
Two basic testings have been done.

# Unit Testing
Packages Used: **Mocha**, **Sinon** and **Expect**.

Run **npm run test** to run all the unit tests 

# Integration Testing
Packages Used: **Mocha**, **Sinon**, **Expect** and **Supertest**.

Run **npm run test:integration** to run all the unit tests 