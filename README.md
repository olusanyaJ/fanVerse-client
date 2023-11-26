# FanVerse

![Screenshot 2023-11-26 at 08 44 24](https://github.com/olusanyaJ/fanVerse-client/assets/145439880/fbb558ac-b461-44f5-b820-52672d30c81d) ![Screenshot 2023-11-26 at 08 43 53](https://github.com/olusanyaJ/fanVerse-client/assets/145439880/8e5ad672-98de-4df2-80d7-8ba2095b5afb) 

![Screenshot 2023-11-26 at 08 44 54](https://github.com/olusanyaJ/fanVerse-client/assets/145439880/584269aa-de2b-4940-87de-d5b742902a16) ![Screenshot 2023-11-26 at 08 45 31](https://github.com/olusanyaJ/fanVerse-client/assets/145439880/2e069a83-18ad-4b57-852c-ac598e22462d) 

Note

![Screenshot 2023-11-26 at 08 46 12](https://github.com/olusanyaJ/fanVerse-client/assets/145439880/9c852bdd-4a0b-40aa-86c0-130c2d1fc16a)

![Screenshot 2023-11-26 at 08 47 40](https://github.com/olusanyaJ/fanVerse-client/assets/145439880/8466ee74-a204-4e5b-85cd-0a96da1d6b51)



## Overview

"FanVerse" is a dynamic sports social network tailored for football and lawn tennis enthusiasts. It's a hub where fans unite to discuss, share, and celebrate their favorite sports. With personalized profiles, engaging fan clubs, live match updates, and interactive group discussions, FanVerse creates a vibrant space for fans to connect, stay updated, and engage in the exciting world of football and tennis.

### Problem

Enthusiasts often struggle to find a dedicated and interactive space to connect with like-minded fans, share their excitement, and stay updated on live matches. Existing social networks might lack specialized features, resulting in fragmented discussions.

"FanVerse" fills this gap by offering a specialized platform tailored for football and tennis, allowing fans to engage in real-time discussions, get live updates, and create a sense of community around their favorite sports.

### Tech Stack

Frontend:

- React
- Sass, JavaScript.

Backend:

- Node.js, Express.js, Knex.js.
- Database (SQl).

### Features

Users

- Users can sign up and choose prefered sport, log in, and create personalized profiles.
- Users homefeed would have posts of different users with same choice of sport.
- Users can like other users posts
- Users can create their own post and it shows on the home feeed
- Users can delete posts
- Users can edit profile

### Installation

Frontend:

- clone the repo
- npm i (to install all the dependencies)
- npm start

Backend:

- clone the repo
- npm i (to install all the dependencies)
- run knex
- create a database
- edit your knex file
- run migratin and seed
- npm start

### API Reference

Users:

GET api/users
  - Retrieves the list of all users from the Db

GET api/users/:id
  - Retrieves a specific user from the users table
    
DEL api/users/:id
  - Deletes a specific user from the users table

POST /user-auth/login
  - Implements user login

POST /user-auth/register
  - Creates a new user on signup

GET /profile
  - Gets the profile of a logged in user

Posts:

GET /posts
  - Retrieves the list of all posts from the Db
    
GET /posts?sports_type="sportyType"
  - Retrieves the list of all posts according to "sportyType" from the Db

GET /posts/user/:user_id
  - Retrieves all the posts of a specific user_id from the post table

GET /posts/:id
  - Retrieves a specific post from the post table

POST /posts/
  - Creates a new post

DEL /posts/:id
  - Deletes a specific post from the post table

### Next Steps

Live Match Updates:

- Real-time updates on live football and tennis matches.
- Display match schedules for upcoming games and past results.

Fan Clubs:

- Join existing fan clubs.
- Create new fan clubs and invite others to join.

Interactive Discussions:

- Discussion forums for live match conversations.
- Comment, like, and share posts within the forums.

Notifications:

- Receive notifications for new discussions, match updates, and club activities.

OAuth:

- Implement OAuth login with Facebook, Google and Apple.

Advanced User Profiles:

- Additional user details, profile customization.

Gamification Elements:

- Achievements, badges for active users.

Expanded Data Sources:

- Integration with additional sports data APIs.

Mobile Application:

- Develop a mobile version of the app for wider accessibility.

Analytics Dashboard:

- User engagement analytics for administrators.

# 🫶🏽
