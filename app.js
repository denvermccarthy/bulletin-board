import { fetchPosts, checkAuth } from "./fetch-utils.js";

// import functions and grab DOM elements
const board = document.getElementById('board');
// let state

// set event listeners 
// console.log('hey!');
window.addEventListener('load', async () => {
    // checkAuth();

    const posts = await fetchPosts();
    console.log(posts);

    
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
