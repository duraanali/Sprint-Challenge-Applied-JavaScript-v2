// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response => {
        const articlesInfo = response.data.articles;
        console.log('articlesInfo: ', articlesInfo);
        articlesInfo.bootstrap.forEach(createArticle);
        articlesInfo.javascript.forEach(createArticle);
        articlesInfo.jquery.forEach(createArticle);
        articlesInfo.node.forEach(createArticle);
        articlesInfo.technology.forEach(createArticle);
    })

    .catch(error => {
        console.log('Error creating cards for articles:', error)
    })



function createArticle(article) {
    // create DOM elements
    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('div')
    const hl = document.createElement('div')
    const author = document.createElement('div')
    const imgCtnr = document.createElement('div')
    const imgSource = document.createElement('img')
    const AuthName = document.createElement('span')

    // add elements to DOM structure
    cardsContainer.appendChild(card);
    card.appendChild(hl);
    card.appendChild(author);
    author.appendChild(imgCtnr);
    author.appendChild(imgSource);
    author.appendChild(AuthName);

    // set content
    hl.textContent = article.headline;
    const authorName = article.authorName;
    AuthName.textContent = `By: ${authorName}`;
    imgSource.src = article.authorPhoto;

    // set classes, styles & attributes
    card.classList.add('card');
    hl.classList.add('headline');
    author.classList.add('author');
    imgCtnr.classList.add('img-container');
    imgSource.style.width = '40px';

    // return card // <- is this needed?
}