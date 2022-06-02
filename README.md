# Tech Blog
![GitHub License](https://img.shields.io/badge/License-MIT-green)

## Description

- Challenge Assignment for University of Wisconsin Extended Campus Coding Bootcamp
- This application allows users to view and comment on blog pots, as well as publish posts of their own.

## Table of Contents

- [User Story](#user-story)
- [Installation](#installation)
- [Preview](#preview)
- [Deployed Application](#deployed-application)
- [License](#license)
- [Questions](#questions)

## User Story

GIVEN a CMS-style blog site
<br />
WHEN I visit the site for the first time
<br />
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
<br />
WHEN I click on the homepage option
<br />
THEN I am taken to the homepage
<br />
WHEN I click on any other links in the navigation
<br />
THEN I am prompted to either sign up or sign in
<br />
WHEN I choose to sign up
<br />
THEN I am prompted to create a username and password
<br />
WHEN I click on the sign-up button
<br />
THEN my user credentials are saved and I am logged into the site
<br />
WHEN I revisit the site at a later time and choose to sign in
<br />
THEN I am prompted to enter my username and password
<br />
WHEN I am signed in to the site
<br />
THEN I see navigation links for the homepage, the dashboard, and the option to log out
<br />
WHEN I click on the homepage option in the navigation
<br />
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
<br />
WHEN I click on an existing blog post
<br />
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
<br />
WHEN I enter a comment and click on the submit button while signed in
<br />
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
<br />
WHEN I click on the dashboard option in the navigation
<br />
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
<br />
WHEN I click on the button to add a new blog post
<br />
THEN I am prompted to enter both a title and contents for my blog post
<br />
WHEN I click on the button to create a new blog post
<br />
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
<br />
WHEN I click on one of my existing posts in the dashboard
<br />
THEN I am able to delete or update my post and taken back to an updated dashboard
<br />
WHEN I click on the logout option in the navigation
<br />
THEN I am signed out of the site
<br />
WHEN I am idle on the site for more than a set time
<br />
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Installation

To run application on local server: 
<br />
- Run `npm install` at the root of the project
- Enter the MYSQL Shell and run `source db/schema.sql;` to initialize the database
- Create a .env file and add the following information:
  - DB_NAME=ecommerce_db
  - DB_USER='your MYSQL username'
  - DB_PW='your MYSQL password'
- In the root of the project, run `npm run seed` to seed the database
- Run `npm start` or `node server.js` to start the server

## Preview:

The following GIF demonstrates the Tech Blog's appearance and functionality:

![GIF of application functionallity]()

## Deployed Application

Click [here](https://carolyn-tech-blog.herokuapp.com/) to view the deployed applicaiton on Heroku.

## License

This application is licensed under MIT.

## Questions

If you have any questions about this project please email me directly at [cghudson@uwalumni.com](mailto:cghudson@uwalumni.com) .

View more of my projects on [GitHub](https://github.com/cghudson).