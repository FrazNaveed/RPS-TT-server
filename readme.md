# Your Project Name

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [.env File Configuration](#configuration)

## Introduction

This is a Node.js-based application that allows users to manage vehicles and associated users through a RESTful API. Users has a option sign-in either with email & password or using Metamask wallet.

## Installation

To run this project on your local machine, follow these steps:

1. Clone the repository to your local machine:
2. Navigate to the project directory:
3. Install the required dependencies using npm: `npm install`
4. Set up your environment variables in the `.env` file.
5. Start the server: `npm start`

# .env File Configuration

The `.env` file is used to store configuration variables for the project. These variables are important for setting up application's environment and may include sensitive information, API keys, and database connection strings. Below are the required variables you need to add to your `.env` file:

## Required Variables

1. `PORT`: The port number on which your server will listen. Example: `PORT=3000`
2. `MONGO_URL`: The MONGO_URL variable is used to store the connection string for your MongoDB database. Example: `MONGO_URL=mongodb://username:password@localhost:27017/my_database`
3. `JWT_SECRET`: The secret key used to sign JSON Web Tokens for user authentication. Example: `JWT_SECRET=your_secret_key_here`
4. `MAIL_USERNAME`: The email from which you will send emails to users.
5. `MAIL_PASSWORD`: The password of your email account.
6. `OAUTH_CLIENTID`: This is used for OAuth 2.0 authentication and represents the client identifier assigned by the OAuth provider to uniquely identify your application. Example: `OAUTH_CLIENTID=your_oauth_client_id_here`
7. `OAUTH_CLIENT_SECRET`: It is a confidential key used in OAuth 2.0 authentication to authenticate your application with the OAuth provider. Example: `OAUTH_CLIENT_SECRET=your_oauth_client_secret`
8. `OAUTH_REFRESH_TOKEN`: This is used in OAuth 2.0 authentication to obtain a new access token when the original access token has expired, allowing your application to maintain continuous access to the user's resources. Example: `OAUTH_REFRESH_TOKEN=your_oauth_refresh_token`
