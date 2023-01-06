'use strict';
const posts = Array.from(document.querySelectorAll('aside .titles a'));

const articles = Array.from(document.querySelectorAll('.posts article'));
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
