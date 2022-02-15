import { fetchPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

// import functions and grab DOM elements
const board = document.getElementById('board');
// let state

// set event listeners 
// console.log('hey!');
window.addEventListener('load', async () => {

    const posts = await fetchPosts();
    
    posts.forEach(element => {
        board.append(renderPost(element));
    });
    
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
