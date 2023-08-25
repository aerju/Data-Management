# MongoDB API for Data Management

This project provides an API to upload CSV/XLSX data into MongoDB and perform CRUD operations on different collections such as User, Account, and Policy.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Introduction

This project aims to create a versatile API that facilitates data management in MongoDB. It offers functionalities to upload CSV/XLSX data and perform CRUD operations on various collections, including User, Account, and Policy.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm are installed.
- MongoDB is installed and running.
- Clone this repository: `https://github.com/aerju/Data-Management.git`

## Installation

1. Navigate to the project directory: `cd your-repo`
2. Install dependencies: `npm install`
3. Set up your MongoDB connection:
   - Open `app.js` and locate the MongoDB connection URL.
   - Replace `'mongodb://localhost:27017/your-database'` with your MongoDB URL.
4. Run the server: `npm start`

## Usage

1. **Server**:The Node.js API app is now running locally at: `http://localhost:4000`
   
1. **Uploading Data**: To upload CSV/XLSX data, make a `POST` request to `/upload` endpoint.

2. **User CRUD Operations**:
   - Create User: `POST /user`
   - Get Users: `GET /user`
   - Update User: `PUT /user/:id`
   - Delete User: `DELETE /user/:id`

3. **Account CRUD Operations**:
   - Create Account: `POST /account`
   - Get Account: `GET /account`
   - Update Account: `PUT /account/:id`
   - Delete Account: `DELETE /account/:id`

4. **Policy CRUD Operations**:
   - Create Policy: `POST /policy`
   - Get Policy: `GET /policy`
   - Update Policy: `PUT /policy/:id`
   - Delete Policy: `DELETE /policy/:id`





