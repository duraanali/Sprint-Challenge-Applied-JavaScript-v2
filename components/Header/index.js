// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContent = [
    {
        date: "SMARCH 28, 2019",
        title: "Lambda Times",
        temp: "98°"
    }
];

const headerContainer = document.querySelector(".header-container")

headerContent.forEach(data => {
    headerContainer.appendChild(headerLambda(data.date, data.title, data.temp));
});

function headerLambda(date, title, temp) {
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerDegree = document.createElement('span')

    // set the styles
    header.classList.add('header')
    headerDate.classList.add('date')
    headerDegree.classList.add('temp')

    // set the content
    headerDate.textContent = date;
    headerTitle.textContent = title;
    headerDegree.textContent = temp;

    // put together
    header.appendChild(headerDate)
    header.appendChild(headerTitle)
    header.appendChild(headerDegree)

    return header
}
