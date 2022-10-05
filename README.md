# Dead Space Log

Dead Space Log is a website for fans of the Dead Space franchise that wish to know information about the necromorphs (in-game enemies), what are their attacks and how to defeat them.

**<a href="https://deadspacelog.netlify.app/"> Link to project </a>** 

![dead-space-log-page](https://user-images.githubusercontent.com/101868896/194131985-434701db-e6e4-4ed9-8008-496932283504.png)

## How it's made

**Tech used:** HTML, CSS, JavaScript

The website consumes an API that I've also created which you can visit <a href="https://github.com/ManuGC22/dead-space-api">here</a> if you wish to know more information about it.

The client-side JS handles the response coming from the API by the use of async/await functions. An event listener fires up the async/await function to fetch the JSON file which contains the data with the information of all the necromorphs.

This information is the set on the DOM to change the innerText of h2 elements and p elements.

## Optimizations

OOP could have been used to encapsulate better the data passed to each node from the API hence making code more readable and making it easier to add new features.

## Lessons learned

- How to avoid text from stacking in the DOM, something that happened to me with li elements, I managed to remove old li elements and show new ones when new information was being presented.
- The functionality and simplicity of using async/await funcctions.
- The importance of creating a function to do one simple action and nothing more, this makes your code more readable.
