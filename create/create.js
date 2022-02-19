import { checkAuth, createPost } from '../fetch-utils.js';


const postForm = document.getElementById('create-post');
checkAuth();
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(postForm);
    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        contact: formData.get('contact'),
    };
    await createPost(post);
    postForm.reset();
    location.replace('/');
});