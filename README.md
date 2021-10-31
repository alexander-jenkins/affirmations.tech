# Affirmations.tech
## Inspiration
During the school year, our days start to feel very monotonous as we juggle studying, homework, project deadlines, and other responsibilities. It can be very easy to forget to slow down and take some time to make sure that you're doing well, both physically and mentally. While we were brainstorming ways to combat this, we came up with the idea of having a website that sends out positive text messages of encouragement to lift us up, brighten our day, and remind us to take life one day at a time.

---
## What it does
Once you enter a phone number, Affirmations will send a randomly selected message of encouragement to you or your friends.

---
## How we built it
Our website has a front-end build with React javascript and runs on a Node.js/Express backend for the API calls.  When the user enters their phone number, the application generates a random ID and selects an affirmation from a predetermined array for messages. The application then talks to the Twilio API to send a text message to the user's phone with the randomly selected affirmation.

---
## Challenges we ran into
Originally, we were going to use the Google Firebase Firestore service to host many more affirmations that we could poll from to send the users. However, there were incompatibilities with the versions of Node.js and Firebase that we used, causing us to store the messages in an array.

---
## Accomplishments that we're proud of
We are proud of learning about new technologies and using them to create a meaningful website with lots of potential in a very short time span.

---
## What we learned
We learned many lessons--some about life, and others about the challenges of web development. The main takeaway from this project has been that even something small (like a text message with a friendly message) can have a big to impact somebody in a positive way. Another lesson we learned is, while hosting a website and writing an API aren't to difficult, putting them together to create a _working_ website can be difficult. In the end, after doing substantial research and trying different techniques, we were able to get it working. That is one of the most fulfilling things to experience as programmers.

---
## What's next for Affirmations
There are a lot of ways that we hope to improve Affirmations in the future. Some of them include allowing the user to request Affirmations to send them random messages throughout the day and adding new messages of affirmation (including seasonal limited-time-only messages).

---