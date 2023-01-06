'use strict';
// const posts = Array.from(document.querySelectorAll('aside .titles a'));

// const articles = Array.from(document.querySelectorAll('.posts article'));
// posts.map((post) => {
// 	post.addEventListener('click', () => {
// 		const currentArticle = post.getAttribute('href').replace('#', '');
// 		posts.map((post) => post.classList.remove('active'));
// 		post.classList.add('active');
// 		articles.map((article) => article.classList.remove('active'));
// 		articles.filter((article) => {
// 			article.id === currentArticle ? article.classList.add('active') : 0;
// 		});
// 	});
// });

function titleClickHandler(event) {
	const clickedElement = this;
	console.log('Link was clicked!');
	console.log(event);
	/* [DONE] remove class 'active' from all article links  */
	const activeLinks = document.querySelectorAll('.titles a.active');

	for (let activeLink of activeLinks) {
		activeLink.classList.remove('active');
	}
	/* [IN PROGRESS] add class 'active' to the clicked link */
	clickedElement.classList.add('active');
	/* [DONE] remove class 'active' from all articles */
	const activeArticles = document.querySelectorAll('.posts article');

	for (let activeArticle of activeArticles) {
		activeArticle.classList.remove('active');
	}
	/* [IN PROGRESS] get 'href' attribute from the clicked link */

	/* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */

	/* [IN PROGRESS] add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
	link.addEventListener('click', titleClickHandler);
}
