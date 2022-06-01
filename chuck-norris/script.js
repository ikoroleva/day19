const text = document.querySelector('.quote');
//const img = document.querySelector('.quote_img');

const getJoke = async () => {

    // try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();

    //console.log(data);

    text.textContent = data.value;
    // img.setAttribute('src', data.icon_url);

    // } catch (e) {
    //     console.log('error:', e);
    // } finally {
    // }
};

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.button');
    btn.addEventListener('click', getJoke);
});