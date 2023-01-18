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
    const tagPlaceholder = article.querySelector('.post-tags .list-horizontal');
    const tags = article.getAttribute('data-tags').split(' ');
    tags.map((tag) => {
      tagPlaceholder.insertAdjacentHTML('beforeend', `<li><a href="#tag-${tag}">${tag}</a></li> `);
    });
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

// const tags = document.querySelectorAll('a.active[href^="#tag-"]');

const tagsArr = Array.from(document.querySelectorAll('a[href^="#tag-"]'));
console.log(tagsArr, typeof(tagsArr));
tagsArr.map((tag) => {
  tag.addEventListener('click', (e) => {
    e.preventDefault();
    const clickedTag = tag.getAttribute('href').replace('#tag-', '');
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  });
});

// function titleClickHandler(event) {
//   event.preventDefault();
//   const clickedElement = this;
//   /* [DONE] remove class 'active' from all article links  */
//   const activeLinks = document.querySelectorAll('.titles a.active');

//   for (let activeLink of activeLinks) {
//     activeLink.classList.remove('active');
//   }
//   /* [DONE] add class 'active' to the clicked link */
//   clickedElement.classList.add('active');
//   /* [DONE] remove class 'active' from all articles */
//   const activeArticles = document.querySelectorAll('.posts article');

//   for (let activeArticle of activeArticles) {
//     activeArticle.classList.remove('active');
//   }
//   /* [DONE] get 'href' attribute from the clicked link */
//   const articleId = clickedElement.getAttribute('href').replace('#', '');
//   /* [DONE] find the correct article using the selector (value of 'href' attribute) */
//   const currentArticle = document.getElementById(articleId);

//   /* [DONE] add class 'active' to the correct article */
//   currentArticle.classList.add('active');
// }



// const optArticleSelector = '.post',
//   optTitleSelector = '.post-title',
//   optTitleListSelector = '.titles';
//   optArticleTagsSelector = '.post-tags .list';
//   optArticleAuthorSelector = '.post-author';

//   function generateTitleLinks(customSelector = ''){

//   /* remove contents of titleList */
//   const titleList = document.querySelector(optTitleListSelector);
//   titleList.innerHTML = '';
//   /* for each article */
//   const articles = document.querySelectorAll(optArticleSelector + customSelector);
//   let html = '';
//   for (let article of articles) {
//     /* get the article id */
//     const articleId = article.getAttribute('id');
//     /* find the title element */
//     /* get the title from the title element */
//     const articleTitle = article.querySelector(optTitleSelector).innerHTML;
//     /* create HTML of the link */
//     const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
//     /* insert link into titleList */
//     html = html + linkHTML;
//   }
//   titleList.innerHTML = html;
// }

// generateTitleLinks();

// const links = document.querySelectorAll('.titles a');

// for (let link of links) {
//   link.addEventListener('click', titleClickHandler);
// }

// function generateTags(){
//   /* find all articles */
//   const articles = document.querySelectorAll(optArticleSelector);

//   /* START LOOP: for every article: */
//   for (let article of articles) {
//     /* find tags wrapper */
//     const tagsWrapper = article.querySelector(optArticleTagsSelector);
//     /* make html variable with empty string */
//     let html = '';
//     /* get tags from data-tags attribute */
//     const articleTags = article.getAttribute('data-tags');

//     /* split tags into array */
//     const articleTagsArray = articleTags.split(' ');
//     /* START LOOP: for each tag */
//     for (let tag of articleTagsArray) {
//       /* generate HTML of the link */
//       const linkHTML = `<li><a href="#tag-${tag}">${tag}</a></li> `;
//       /* add generated code to html variable */
//       html = html + linkHTML;
//     /* END LOOP: for each tag */
//     }
//     /* insert HTML of all the links into the tags wrapper */
//     tagsWrapper.innerHTML = html;
//   /* END LOOP: for every article: */
//   }
// }

// generateTags();

// function tagClickHandler(event){
//   /* prevent default action for this event */
//   event.preventDefault();
//   /* make new constant named "clickedElement" and give it the value of "this" */
//   const clickedElement = this;
//   /* make a new constant "href" and read the attribute "href" of the clicked element */
//   const href = clickedElement.getAttribute('href');
//   /* make a new constant "tag" and extract tag from the "href" constant */
//   const tag = href.replace('#tag-', '');
//   /* find all tag links with class active */
//   const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
//   /* START LOOP: for each active tag link */
//   for (let activeTag of activeTags) {
//     /* remove class active */
//     activeTag.classList.remove('active');
//   /* END LOOP: for each active tag link */
//   }
//   /* find all tag links with "href" attribute equal to the "href" constant */
//   const currentHrefs = document.querySelectorAll('a[href="' + href + '"]');
//   /* START LOOP: for each found tag link */
//   for (let currentHref of currentHrefs) {
//     /* add class active */
//     currentHref.classList.add('active');
//   /* END LOOP: for each found tag link */
//   }
//   /* execute function "generateTitleLinks" with article selector as argument */
//   generateTitleLinks('[data-tags~="' + tag + '"]');
// }

// function addClickListenersToTags(){
//   /* find all links to tags */
//   const links = document.querySelectorAll('a[href^="#tag-"]');
//   /* START LOOP: for each link */
//   for (let link of links) {
//     /* add tagClickHandler as event listener for that link */
//     link.addEventListener('click', tagClickHandler);
//   /* END LOOP: for each link */
//   }
// }

// addClickListenersToTags();

// function generateAuthors(){
//   /* find all articles */
//   const articles = document.querySelectorAll(optArticleSelector);

//   /* START LOOP: for every article: */
//   for (let article of articles) {
//     /* find tags wrapper */
//     const authorWrapper = article.querySelector(optArticleAuthorSelector);
//     /* make html variable with empty string */
//     let html = '';
//     /* get tags from data-tags attribute */
//     const articleAuthor = article.getAttribute('data-author');
//     html = `by <a href="#author-${articleAuthor.replace(' ', '-').toLowerCase()}">${articleAuthor}</a>`;
//     /* insert HTML of all the links into the tags wrapper */
//     authorWrapper.innerHTML = html;
//   /* END LOOP: for every article: */
//   }
// }

// generateAuthors();

// function authorClickHandler(event){
//   /* prevent default action for this event */
//   event.preventDefault();
//   /* make new constant named "clickedElement" and give it the value of "this" */
//   const clickedElement = this;
//   /* make a new constant "href" and read the attribute "href" of the clicked element */
//   const href = clickedElement.getAttribute('href');
//   /* make a new constant "tag" and extract tag from the "href" constant */
//   /* find all tag links with class active */
//   const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
//   /* START LOOP: for each active tag link */
//   for (let activeAuthor of activeAuthors) {
//     /* remove class active */
//     activeAuthor.classList.remove('active');
//   /* END LOOP: for each active tag link */
//   }
//   /* find all tag links with "href" attribute equal to the "href" constant */
//   const currentHrefs = document.querySelectorAll('a[href="' + href + '"]');
//   /* START LOOP: for each found tag link */
//   for (let currentHref of currentHrefs) {
//     /* add class active */
//     currentHref.classList.add('active');
//   /* END LOOP: for each found tag link */
//   }
//   /* execute function "generateTitleLinks" with article selector as argument */
//   generateTitleLinks('[data-author="' + href + '"]');
// }

// function addClickListenersToAuthor(){
//   /* find all links to tags */
//   const links = document.querySelectorAll('a[href="#author-"]');
//   /* START LOOP: for each link */
//   for (let link of links) {
//     /* add tagClickHandler as event listener for that link */
//     link.addEventListener('click', authorClickHandler);
//   /* END LOOP: for each link */
//   }
// }

// addClickListenersToAuthor();