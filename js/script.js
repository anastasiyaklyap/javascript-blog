'use strict';

const templates = {
  // eslint-disable-next-line no-undef
  articleLink: Handlebars.compile(
    document.querySelector('#template-article-link').innerHTML
  ),
  // eslint-disable-next-line no-undef
  tagLink: Handlebars.compile(
    document.querySelector('#template-tag-link').innerHTML
  ),
  // eslint-disable-next-line no-undef
  authorLink: Handlebars.compile(
    document.querySelector('#template-author-link').innerHTML
  ),
  // eslint-disable-next-line no-undef
  tagCloudLink: Handlebars.compile(
    document.querySelector('#template-tag-cloud-link').innerHTML
  ),
  // eslint-disable-next-line no-undef
  authorLinks: Handlebars.compile(
    document.querySelector('#template-author-links').innerHTML
  ),
};

const options = {
  articles: Array.from(document.querySelectorAll('.posts article')),
  articleData: [],
  menuPosts: document.querySelector('.sidebar .list'),
  postsList: document.querySelector('.titles'),
  tagPlaceholder: '.post-tags .list-horizontal',
  authorPlaceholder: '.post-author',
  allTags: {},
  allAuthors: {},
  menuTags: document.querySelector('.sidebar .tags'),
  menuAuthors: document.querySelector('.sidebar .authors'),
  classCount: 5,
};

const collectArticleData = () => {
  options.articles.map((article) => {
    const title = article.querySelector('.post-title').textContent;
    const id = article.getAttribute('id');
    const tags = article.getAttribute('data-tags');
    const author = article.getAttribute('data-author');
    options.articleData.push({
      title,
      id,
      tags,
      author,
    });
    tags.split(' ').map((tag) => {
      article
        .querySelector(options.tagPlaceholder)
        .insertAdjacentHTML('beforeend', templates.tagLink({ tag }));
      options.allTags.hasOwnProperty(tag)
        ? options.allTags[tag]++
        : (options.allTags[tag] = 1);
    });
    const authorLink = author.replace(' ', '-');
    article
      .querySelector(options.authorPlaceholder)
      .insertAdjacentHTML(
        'beforeend',
        templates.authorLink({ author, authorLink })
      );
    options.allAuthors.hasOwnProperty(author)
      ? options.allAuthors[author]++
      : (options.allAuthors[author] = 1);
  });
};

const generateLeftSideBar = (selector = ' ') => {
  options.postsList.innerHTML = '';
  options.articleData
    .filter(
      ({ tags, author }) => tags.includes(selector) || author.includes(selector)
    )
    .map(({ id, title }) => {
      options.menuPosts.insertAdjacentHTML(
        'beforeend',
        templates.articleLink({ id, title })
      );
    });
  clickHandlerLeftSideBar();
};

const calculateTagsParams = (tags) => {
  const values = Object.values(tags);
  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
};

const calculateTagClass = (count, params) => {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  return Math.floor(percentage * (options.classCount - 1) + 1);
};

const generateRigthSideBarTags = () => {
  const tagsParams = calculateTagsParams(options.allTags);
  for (let tag in options.allTags) {
    const tagLinkHTML = calculateTagClass(options.allTags[tag], tagsParams);
    options.menuTags.innerHTML += templates.tagCloudLink({ tag, tagLinkHTML });
  }
};

const generateRigthSideBarAuthors = () => {
  for (let author in options.allAuthors) {
    const authorLink = author.replace(' ', '-');
    options.menuAuthors.innerHTML += templates.authorLinks({
      author,
      authorLink,
    });
  }
};

const clickHandlerLeftSideBar = () => {
  const posts = Array.from(document.querySelectorAll('aside .titles a'));
  posts.map((post) => {
    post.addEventListener('click', (e) => {
      e.preventDefault();
      const currentArticle = post.getAttribute('href').replace('#', '');
      posts.map((item) => item.classList.remove('active'));
      post.classList.add('active');
      options.articles.map((article) => article.classList.remove('active'));
      options.articles.filter((article) => {
        article.id === currentArticle ? article.classList.add('active') : null;
      });
    });
  });
};

const clickHandler = (selector) => {
  const array = Array.from(
    document.querySelectorAll(`a[href^="#${selector}-"]`)
  );
  array.map((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href');
      const itemName = href.replace(`#${selector}-`, '').replace('-', ' ');
      const activeItems = Array.from(
        document.querySelectorAll(`a.active`)
      );

      activeItems.map((activeItem) => {
        if (
          !activeItem.getAttribute('href').includes(itemName) &&
          !activeItem.getAttribute('href').includes(itemName.replace(' ', '-'))
        ) {
          activeItem.classList.remove('active');
        }
      });
      const currentHrefs = Array.from(
        document.querySelectorAll('a[href="' + href + '"]')
      );
      generateLeftSideBar(itemName);
      currentHrefs.map((currentHref) => {
        if (currentHref.classList.contains('active')) {
          generateLeftSideBar();
          currentHref.classList.remove('active');
        } else {
          currentHref.classList.add('active');
        }
      });
    });
  });
};
collectArticleData();
generateRigthSideBarTags();
generateRigthSideBarAuthors();
clickHandler('author');
clickHandler('tag');
generateLeftSideBar();
