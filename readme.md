# Node.js Assignment 5

This is a Node.js application for managing users and their to-do items. The application includes user authentication and authorization using JWT, CRUD operations for users (restricted to super admin), and CRUD operations for to-do items for each user.

Data validation has been added to all the routes using Joi package.

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

1. Clone the repository
   git clone https://github.com/ajay9803/node-assignment-4