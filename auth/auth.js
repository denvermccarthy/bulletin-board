import { redirectIfLoggedIn, signInUser, signUpUser } from '../fetch-utils.js';
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');

signUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUp);
    await signUpUser(formData.get('user'), formData.get('password'));
    redirectIfLoggedIn();
});

signIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signIn);
    await signInUser(formData.get('user'), formData.get('password'));
    redirectIfLoggedIn();
});
