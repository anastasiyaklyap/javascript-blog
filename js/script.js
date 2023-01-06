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
	console.log('Link was clicked!');
	console.log(event);
	/* remove class 'active' from all article links  */

	/* add class 'active' to the clicked link */

	/* remove class 'active' from all articles */

	/* get 'href' attribute from the clicked link */

	/* find the correct article using the selector (value of 'href' attribute) */

	/* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
	link.addEventListener('click', titleClickHandler);
}
