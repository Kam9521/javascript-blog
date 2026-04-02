'use strict';
{
   const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;

    /* remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll(
      optTitleListSelector + " a.active",
    );

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll(
      optArticleSelector + ".active",
    );

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    if (targetArticle) {
      targetArticle.classList.add("active");
    }
  };

  const generateTitleLinks = function() {
    /* find title list */
    const titleList = document.querySelector(optTitleListSelector);

    /* remove contents of titleList */
    titleList.innerHTML = '';

    /* find all the articles */
    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';

    for (let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');

      /* get the article title */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */
      const linkHTML =
        '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* add link to html variable */
      html = html + linkHTML;
    }

    /* insert all links into titleList */
    titleList.innerHTML = html;

    /* find all links in titles list */
    const links = document.querySelectorAll(optTitleListSelector + " a");

    /* add click event listener to each link */
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();
  }
