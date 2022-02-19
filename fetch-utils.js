const SUPABASE_URL = 'https://lxifeplqjanpuugbzgyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aWZlcGxxamFucHV1Z2J6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU0NTEsImV4cCI6MTk2MDAxMTQ1MX0.4hkIbGdYMJ7SzqMSm39JtJRvMyFal0vMXHHWB0APEJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    await client.auth.signUp({ email, password });

}

export async function signInUser(email, password) {
    await client.auth.signIn({ email, password });

}

export function redirectIfLoggedIn() {
    const user = getUser();
    if (user){
        location.replace('/create');
    }
}

export function checkAuth() {
    const user = getUser();
    if (!user){
        location.replace('/auth');
    } 
}

export async function fetchPosts() {
    const resp = await client.from('bulletin_board').select('*');
    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function createPost(post){
    const resp = await client.from('bulletin_board').insert({ title: post.title, description: post.description, contact: post.contact });
    console.log(resp, 'resp');
    return checkError(resp);
}