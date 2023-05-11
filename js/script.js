// -----declare our elements-----
// article elements
const articleContainer = document.getElementById("article-container");
// modal elements
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementById("close-button");
// toolbar elements
const searchInput = document.getElementById("search-box");
const submitSearch = document.getElementById("submit-search");
// status box
const statusUpdate = document.getElementById("status-update");


// -----declare our data-----
let articles = [
    {
        id: 0,
        title: "MMA Fighting",
        description: "Conor McGregor doesn't mess around",
        content: `
        <p>
        Conor McGregor is a professional mixed martial artist from Ireland, widely regarded as one of the biggest names in combat sports. Born on July 14, 1988, in Dublin, McGregor began his career in combat sports as an amateur boxer before transitioning to mixed martial arts (MMA) in 2008.
        </p>
        <p>
        McGregor quickly gained a reputation for his striking ability and knockout power in the featherweight and lightweight divisions of the Ultimate Fighting Championship (UFC). He won the featherweight championship in 2015 by defeating Jose Aldo in just 13 seconds, which remains the fastest finish in UFC title fight history.
        </p>
        <p>
        McGregor's brash personality and unique style of trash-talking helped to make him a polarizing figure in the world of combat sports. He often makes headlines for his out-of-the-cage antics, including his notorious bus attack in 2018, which led to his arrest and subsequent legal troubles.
        </p>
        <p>
        In addition to his fighting career, McGregor is also a successful entrepreneur, having launched his own whiskey brand, Proper No. Twelve, in 2018. He has also been involved in various philanthropic efforts, including donating money to hospitals in Ireland during the COVID-19 pandemic.
        </p>
        <p>
        Despite his controversial reputation, there is no denying McGregor's impact on the sport of MMA and his popularity among fans. His fights continue to draw massive crowds and generate significant pay-per-view revenue, cementing his status as one of the biggest stars in combat sports history.
        </p>
        `,
        timestamp: "12:30pm",
        image: "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1679843665/saejzn9hxjbh0yd59fim.jpg",
        alt: "Conor Mcgregor in the octogon"
    },

    {
        id: 1,
        title: "Gamespot",
        description: "Diablo 4 released!",
        content: `Diablo 4 is an upcoming action role-playing game developed and published by Blizzard Entertainment. It is the fourth installment in the popular Diablo franchise and is set in a dark and foreboding world filled with demons and other supernatural creatures. 
        <br>
        Players will be able to choose from several classes and embark on quests to battle hordes of enemies, collect loot, and upgrade their skills and abilities. Diablo 4 promises to deliver the same fast-paced, hack-and-slash gameplay that made the series famous, while also introducing new features such as a shared open world and PvP zones. The game is highly anticipated by fans of the franchise and is expected to be released in the near future.`,
        timestamp: "1am",
        image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt197bfce3b1cb7880/6286c2cccf13bb4bbe6278ad/open-graph.jpg",
        alt: "demon girl with goat horns"
    },

    {
        id: 2,
        title: "J Cole",
        description: "Released a new album",
        content: `
        J. Cole, born Jermaine Lamarr Cole on January 28, 1985, is an American rapper, singer, and producer from Fayetteville, North Carolina. He first gained recognition with his mixtapes and debut album "Cole World: The Sideline Story" in 2011, which peaked at number one on the US Billboard 200. Cole's music is known for its introspective and socially conscious themes, often tackling issues such as race, politics, and social inequality. He has released several critically acclaimed albums, including "2014 Forest Hills Drive," which was certified double platinum and nominated for a Grammy Award for Best Rap Album. Cole is widely regarded as one of the most talented and influential rappers of his generation.
        `,
        timestamp: "6am",
        image: "https://larrybrownsports.com/wp-content/uploads/2022/02/j-cole.jpg",
        alt: "jcole smiling wearing denim jacket"
    },
    {
        id: 3,
        title: "Square Enix",
        description: "Upcoming Donkey Kong game",
        content: `
        A donkey kong game is coming up. Should be fire
        `,
        timestamp: "7am",
        image: "https://images.nintendolife.com/f98f626232369/donkey-kong.large.jpg",
        alt: "donkey and diddy kong in jungle"
    },
    {
        id: 4,
        title: "Namco",
        description: "Tekken 8 released",
        content: `
        Wow it's finally out!
        `,
        timestamp: "7pm",
        image: "https://i.ytimg.com/vi/2hPuRQz6IlM/maxresdefault.jpg",
        alt: "jin standing in flames"
    },
    {
        id: 5,
        title: "MMA news",
        description: "Israel Adeysana said something wack",
        content: `
        No one can believe it
        `,
        timestamp: "7am",
        image: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/07/Israel-Adesanya-UFC-276-press-conference-02.jpg?w=640",
        alt: "israel flexing during UFC weigh in"
    }

];

// creating a loop which shows all the articles, and puts them into the article container

for (let i = 0; i < articles.length; i++) {
    articleContainer.innerHTML += `
    <div class="article">
        <img src="${articles[i].image}" alt="${articles[i].alt}">
        <h2>${articles[i].title}</h2>
        <p class="date-tag">${articles[i].timestamp}</p>
        <p>${articles[i].description}</p>
        <button data-id="${articles[i].id}" class="readmore-button">Read more<button>
    </div>
    `
}



function openModal(content) {
    modalContent.innerHTML = `
    <p>${content}</p>
    `
    modal.classList.toggle("active");
}

// this function will check for "read more" buttons on the page, these will be on an article

function addButtonEvents() {
    const readmoreButtons = document.getElementsByClassName("readmore-button");

    // loop through all available buttons
    // add an event listener for a click
    for (let i = 0; i < readmoreButtons.length; i++) {
        // always use an anonymous function after testing for the click
        readmoreButtons[i].addEventListener("click", function () {
            // console.log(readmoreButtons[i].dataset.id);

            // we're getting the ID of the current button on the article, and assigning to a variable called currentArticleId
            let currentArticleId = readmoreButtons[i].dataset.id;
            // here's where we link the content to the ID
            let content = articles[currentArticleId].content;

            openModal(content);
        });
    }
}

// close button on click
closeButton.addEventListener("click", function () {
    modal.classList.toggle("active");
});

// collect all the buttons and attach their listeners
addButtonEvents();

// ---search functionality---

function searchArticles(e) {
    // prevent the default behaviour of the form
    e.preventDefault();
    // put the search value into a variable
    let searchString = searchInput.value;
    // check if the search string is empty
    if (searchString === "") {
        statusUpdate.innerHTML = "Please enter a search term";
        statusUpdate.classList.toggle("active");
        return;
    }
    // start filtering results
    findMatch(searchString);
}

function renderArticle(article) {
    // we will show the article on the screen
    articleContainer.innerHTML += `
    <div class="article">
        <img src="${article.image}" alt="${article.alt}">
        <h2>${article.title}</h2>
        <p class="date-tag">${article.timestamp}</p>
        <p>${article.description}</p>
        <button data-id="${article.id}" class="readmore-button">Read more<button>
    </div>
    `
}

function findMatch(string) {
    // clear all results, later we'll fill them in
    articleContainer.innerHTML = "";
    // declare a variable which determines if there's a match
    let match = false;
    // convert our search string to lower case
    let stringLowercase = string.toLowerCase();
    console.log(stringLowercase);
    // loop through all the articles, to match the search string to the description
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].description.toLowerCase().match(stringLowercase)) {
            // console.log("We found a match!");
            // console.log(articles[i]);
            match = true;
            // ran a function which will show the article on the screen
            // pass in the article which matches to the search, as an argument
            renderArticle(articles[i]);
        }
    }
    // the loop has finished
    // !match is the same as match === false
    if (!match) {
        console.log("No match found!");
    }
}

submitSearch.addEventListener("click", function () {
    searchArticles(event);
})