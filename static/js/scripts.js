// Original scroll script from Clean Blog theme
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove('is-visible');
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
});

// Fetch data and dynamically update the page with Reuters news
const newsData = {
    "source": {
        "id": "reuters",
        "name": "Reuters"
    },
    "author": "Joey Roulette",
    "title": "SpaceX catches giant Starship booster in fifth flight test - Reuters",
    "description": "The company achieved another novel engineering feat in its push to build a reusable moon and Mars vehicle.",
    "url": "https://www.reuters.com/technology/space/spacex-launches-fifth-starship-test-eyes-novel-booster-catch-2024-10-13/",
    "urlToImage": "https://www.reuters.com/resizer/v2/F63OT2AUDJJWVDZTI53UJRUZQ4.jpg?auth=a4fc1ad786a9ced4e3c8e7a4794b43a6156b309670948c7eaef187b71e21af97&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "2024-10-13T19:56:25Z",
    "content": null
};

// Dynamically display the fetched news on the homepage
const newsContainer = document.getElementById('news-container');

if (newsContainer) {
    const articleHTML = `
        <div class="news-article">
            <img src="${newsData.urlToImage}" alt="News Image" class="img-fluid" />
            <h2>${newsData.title}</h2>
            <p>${newsData.description}</p>
            <p>By ${newsData.author} | Published on ${new Date(newsData.publishedAt).toLocaleDateString()}</p>
            <a href="${newsData.url}" target="_blank">Read more on Reuters</a>
        </div>
    `;
    newsContainer.innerHTML = articleHTML;
}
