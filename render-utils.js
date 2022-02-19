export function renderPost(object) {
    const div = document.createElement('div');
    div.classList.add('post');
    const h3 = document.createElement('h3');
    h3.classList.add('title');
    const p = document.createElement('p');
    p.classList.add('contact');
    const details = document.createElement('p');
    details.classList.add('details');

    h3.textContent = object.title;
    details.textContent = object.description;
    p.textContent = 'contact: ' + object.contact;

    div.append(h3, details, p);
    return div;
}