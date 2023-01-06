'use strict';
const posts = Array.from(document.querySelectorAll('aside .titles a'));

const articles = Array.from(document.querySelectorAll('.posts article'));
posts.map((post) => {
	post.addEventListener('click', (e) => {
		e.preventDefault();
		const currentArticle = post.getAttribute('href').replace('#', '');
		posts.map((post) => post.classList.remove('active'));
		post.classList.add('active');
		articles.map((article) => article.classList.remove('active'));
		articles.filter((article) => {
			article.id === currentArticle ? article.classList.add('active') : 0;
		});
	});
});

// function titleClickHandler(event) {
// 	event.preventDefault();
// 	const clickedElement = this;
// 	console.log('Link was clicked!');
// 	console.log(event);
// 	/* [DONE] remove class 'active' from all article links  */
// 	const activeLinks = document.querySelectorAll('.titles a.active');

// 	for (let activeLink of activeLinks) {
// 		activeLink.classList.remove('active');
// 	}
// 	/* [DONE] add class 'active' to the clicked link */
// 	clickedElement.classList.add('active');
// 	/* [DONE] remove class 'active' from all articles */
// 	const activeArticles = document.querySelectorAll('.posts article');

// 	for (let activeArticle of activeArticles) {
// 		activeArticle.classList.remove('active');
// 	}
// 	/* [DONE] get 'href' attribute from the clicked link */
// 	const articleId = clickedElement.getAttribute('href').replace('#', '');
// 	/* [DONE] find the correct article using the selector (value of 'href' attribute) */
// 	const currentArticle = document.getElementById(articleId);
// 	console.log(currentArticle);

// 	/* [DONE] add class 'active' to the correct article */
// 	currentArticle.classList.add('active');
// }

// const links = document.querySelectorAll('.titles a');

// for (let link of links) {
// 	link.addEventListener('click', titleClickHandler);
// }
