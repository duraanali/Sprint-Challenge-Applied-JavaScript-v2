// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then(response => {
        // console.log(response);
        const topics = [];
        response.data.topics.forEach(dataTopic => {
            topics.push(dataTopic)
            // console.log(`added ${dataTopic} to topics array`)
        });
        topics.forEach(topic => {
            // console.log(topic);
            createTopics(topic)
        })
    })

    .catch(error => {
        console.log('This just in: something is wrong.', error)
    })

function createTopics(topic) {
    const divTopics = document.querySelector('.topics');
    const topicTabs = document.createElement('div');
    topicTabs.textContent = topic;
    topicTabs.classList.add('tab');
    divTopics.appendChild(topicTabs)
}