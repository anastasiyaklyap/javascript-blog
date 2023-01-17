'use strict';
const articles = Array.from(document.querySelectorAll('.posts article'));

const genrateTitleLinks = (customSelector = '') => {
  const articles = Array.from(document.querySelectorAll(`.posts article${customSelector}`));

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
  // Show clicked article
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
};

genrateTitleLinks();
const tagsSideBar = document.querySelector('aside .list.tags');
const authorSideBar = document.querySelector('aside .list.authors');

// Add tags and authors to the article
let allTags = {};
let allAuthors = [];
articles.map((article) => {
  const tagPlaceholder = article.querySelector('.post-tags .list-horizontal');
  const tags = article.getAttribute('data-tags').split(' ');
  tags.map((tag) => {
    tagPlaceholder.insertAdjacentHTML('beforeend', `<li><a href="#tag-${tag}">${tag}</a></li> `);
    if(!allTags.hasOwnProperty(tag)) {
      allTags[tag] = 1;
    } else {
      allTags[tag]++;
    }
    // allTags.push(`<li><a href="#tag-${tag}">${tag}</a></li> `);
  });

  const authorPlaceholder = article.querySelector('.post-author');
  const author = article.getAttribute('data-author');
  authorPlaceholder.insertAdjacentHTML('beforeend', `by <a href="#author-${author.replace(' ', '-')}">${author}</a>`);
  allAuthors.push(`<li><a href="#author-${author.replace(' ', '-')}">${author}</a></li>`);
});
const calculateTagsParams = tags => {
  const params = {
    min: 999999,
    max: 0
  };
  for(let tag in tags){
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
    if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  return params;
};
const optCloudClassCount = 5;
const optCloudClassPrefix = 'tag-size-';
const calculateTagClass = (count, params) => {

}
const tagsParams = calculateTagsParams(allTags);
console.log('tagsParams: ', tagsParams);


let allTagsHTML = '';
for(let tag in allTags) {
  const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);
  allTagsHTML += `<li><a href="#tag-${tag}" class="${tagLinkHTML}">${tag} (${allTags[tag]})</a></li>`;
  console.log(tagLinkHTML);
}


tagsSideBar.innerHTML = allTagsHTML;

// const uniqueTags = [...new Set(allTags)];
const uniqueAuthors = [...new Set(allAuthors)];

// tagsSideBar.innerHTML = uniqueTags.join(' ');
authorSideBar.innerHTML = uniqueAuthors.join(' ');

const tags = Array.from(document.querySelectorAll('a[href^="#tag-"]'));

tags.map((tag) => {
  tag.addEventListener('click', (e) => {
    e.preventDefault();
    const href = tag.getAttribute('href');
    const tagName = href.replace('#tag-', '');
    const activeTags = Array.from(document.querySelectorAll('a.active[href^="#tag-"]'));
    activeTags.map((activeTag) => {
      activeTag.classList.remove('active');
    });
    const currentHrefs = Array.from(document.querySelectorAll('a[href="' + href + '"]'));
    currentHrefs.map((currentHref) => {
      currentHref.classList.add('active');
    });
    genrateTitleLinks('[data-tags~="' + tagName + '"]');
  });



});

const authors = Array.from(document.querySelectorAll('a[href^="#author-"]'));
authors.map((author) => {
  author.addEventListener('click', (e) => {
    e.preventDefault();
    const href = author.getAttribute('href');
    const authorName = href.replace('#author-', '').replace('-', ' ');
    console.log(authorName.replace('-', ' '))
    const activeAuthors = Array.from(document.querySelectorAll('a.active[href^="#author-"]'));
    activeAuthors.map((activeAuthor) => {
      activeAuthor.classList.remove('active');
    });
    const currentHrefs = Array.from(document.querySelectorAll('a[href="' + href + '"]'));
    currentHrefs.map((currentHref) => {
      currentHref.classList.add('active');
    });
    genrateTitleLinks('[data-author="' + authorName + '"]');
  });

});
