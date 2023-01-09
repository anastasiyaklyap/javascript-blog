'use strict';
const articles = Array.from(document.querySelectorAll('.posts article'));

(() => {
    const titleList = document.querySelector('.titles');
    titleList.innerHTML = '';
    const navBar = document.querySelector('.sidebar .list');
    articles.map((article) => {
        const title = article.querySelector('.post-title').textContent;
        const id = article.getAttribute('id');
        navBar.insertAdjacentHTML(
            'beforeend',
            `<li><a href=#${id}><span>${title}</span></li>`
        );
    });
})();

const posts = Array.from(document.querySelectorAll('aside .titles a'));
posts.map((post) => {
    post.addEventListener('click', (e) => {
        e.preventDefault();
        const currentArticle = post.getAttribute('href').replace('#', '');
        posts.map((item) => item.classList.remove('active'));
        post.classList.add('active');
        articles.map((article) => article.classList.remove('active'));
        articles.filter((article) => {
            article.id === currentArticle ? article.classList.add('active') : 0;
        });
    });
});
