const restaurants = [
    {
        images: ["/pics/seven1.jpg", "/pics/seven2.jpg", "/pics/seven3.jpg", "/pics/seven4.jpg", "/pics/seven5.jpg"],
        name: "Seven Bar and Restaurant",
        city: "Almaty",
        link: "https://www.google.com/maps/place/SEVEN+Bar+and+Restaurant/@43.2190948,76.9282628,465m/data=!3m1!1e3!4m6!3m5!1s0x38836f34274053cb:0xd64ec19049c4f10!8m2!3d43.219028!4d76.9293705!16s%2Fg%2F1pt_f7v57?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        description: "Seven presents unsurpassed gourmet dishes in Almaty. The restaurant is located on the 28th floor of Esentai Tower, the tallest building in the city. The elegant setting, exclusive Magnum champagne bottles, magnificent views of the mountains and the city, all accompanied by live music creates a very special mood. The chef of the restaurant recreates the best dishes of Michelin chefs, many of which are presented in an unusual “theatrical” presentation, cooking and serving are completed right in front of the guest. The menu also includes sushi, premium beef from the USA, and fresh seafood from France and Canada. There is a lounge area on the 29th floor. Behind the bar, talented mixologists create original variations of traditional cocktail classics. Smoky cocktail connoisseurs are offered a wide range of premium hookah tobacco and a variety of cigars."
    },
    {
        images: ["/pics/la1.jpg", "/pics/la2.jpg", "/pics/la3.jpg", "/pics/la4.jpg", "/pics/la5.jpg"],
        name: "La Rivière",
        city: "Astana",
        link: "https://www.google.com/maps/place/La+Rivi%C3%A8re+Restaurant/@51.1525087,71.4229897,713m/data=!3m1!1e3!4m6!3m5!1s0x4245869ede26dd0d:0xe181899e1ba2abb2!8m2!3d51.152553!4d71.4249071!16s%2Fg%2F11d_bbx9fc?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        description: "In a warm and cozy atmosphere, La Rivière restaurant with an open kitchen and buffet offers Mediterranean cuisine with a wide selection of various gastronomic delights and the best wines in Astana."
    },
    {
        images: ["/pics/san1.jpg", "/pics/san2.jpg", "/pics/san3.jpg", "/pics/san4.jpg", "/pics/san5.jpg"],
        name: "Sandyq",
        city: "Shymkent",
        link: "https://www.google.com/maps/place/Sandyq+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD/@42.3123785,69.621342,202m/data=!3m1!1e3!4m10!1m2!2m1!1z0YHQsNC90LTRi9C6INGI0YvQvNC60LXQvdGC!3m6!1s0x38a91f6f0f1b5409:0x98e43f3f35fe25a6!8m2!3d42.312422!4d69.6215697!15sChvRgdCw0L3QtNGL0Log0YjRi9C80LrQtdC90YJaHSIb0YHQsNC90LTRi9C6INGI0YvQvNC60LXQvdGCkgEQYXNpYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11q7kk5pw7?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        description: "The purpose of this restaurant with the same name Sandyq is to show centuries-old traditions both in cooking, treating food, hospitality in general, and to present unique items of historical and cultural significance, household products of the South Kazakhstan region."
    },
    {
        images: ["/pics/ga1.jpg", "/pics/ga2.jpg", "/pics/ga3.jpg", "/pics/ga4.jpg", "/pics/ga5.jpg"],
        name: "Gastro Grill BALKON",
        city: "Karagandy",
        link: "https://www.google.com/maps/place/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+BALKON/@49.8162228,73.0990259,280m/data=!3m1!1e3!4m6!3m5!1s0x42434768cca3ab91:0x770b5011bad7ae6!8m2!3d49.8163175!4d73.0994727!16s%2Fg%2F11fd6l7wvn?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        description: "The Gastro Grill BALKON restaurant presents a modern new look at such familiar and beloved elements as a light, WINE and MEAT. Here, these classic culinary compositions are presented in the format of a modern kitchen, which allows guests to enjoy unique tastes and aromas in a modern design."
    },
    {
        images: ["/pics/ch1.jpg", "/pics/ch2.jpg", "/pics/ch3.jpg", "/pics/ch4.jpg", "/pics/ch5.jpg"],
        name: "Che Chil Pub",
        city: "Aktau",
        link: "https://www.google.com/maps/place/Chechil+Pub+Aqtau/@43.6435184,51.1501844,381m/data=!3m1!1e3!4m6!3m5!1s0x41b431617411b51f:0xa13e61766ce2c12f!8m2!3d43.6436393!4d51.1510859!16s%2Fg%2F11c3k2wwbl?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        description: "The brewery restaurant with affordable prices offers its guests a wide range of beers, a variety of snacks and meat dishes. The establishment is conveniently located in the city center, which makes it an ideal place to meet with friends or colleagues. In summer, visitors can enjoy the fresh air on the cozy summer terrace."
    },
    {
        images: ["/pics/al1.jpg", "/pics/al2.jpg", "/pics/al3.jpg", "/pics/al4.jpg", "/pics/al5.jpg"],
        name: "Alpenhof",
        city: "Pavlodar",
        link: "https://www.google.com/maps/place/Alpenhof/@52.2932658,76.9723159,181m/data=!3m1!1e3!4m6!3m5!1s0x42f9cac4ab1c1d53:0xd406ea961429568d!8m2!3d52.2933321!4d76.9726375!16s%2Fg%2F11bw2fmjlq?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        description: "Alpenhof is a German restaurant with European cuisine and Bavarian fervor, where you can always drink branded freshly brewed beer. Manufacturer of sausages according to German technologies and recipes. Kazakhstan's first own cheese factory for the production of young Italian cheeses.  "
    }
];

let currentPage = 1;
const itemsPerPage = 5;

function renderRestaurants(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const pageData = restaurants.slice(startIndex, endIndex);

    const restaurantContainer = document.getElementById("restaurants");
    restaurantContainer.innerHTML = "";

    pageData.forEach((restaurant, index) => {
        const restaurantElement = document.createElement("div");
        restaurantElement.classList.add("restaurant");

        let currentImageIndex = 0;

        restaurantElement.innerHTML = `
            <div class="image-container">
                <img src="${restaurant.images[currentImageIndex]}" alt="${restaurant.name}">
                <div class="image-controls">
                    <button class="prev-image">&lt;</button>
                    <button class="next-image">&gt;</button>
                </div>
            </div>
            <h2><a href="${restaurant.link}" target="_blank">${restaurant.name}, ${restaurant.city}</a></h2>
            <p>${restaurant.description}</p>
        `;

        const imageContainer = restaurantElement.querySelector(".image-container img");
        const prevBtn = restaurantElement.querySelector(".prev-image");
        const nextBtn = restaurantElement.querySelector(".next-image");

        prevBtn.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex - 1 + restaurant.images.length) % restaurant.images.length;
            imageContainer.src = restaurant.images[currentImageIndex];
        });

        nextBtn.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex + 1) % restaurant.images.length;
            imageContainer.src = restaurant.images[currentImageIndex];
        });

        restaurantContainer.appendChild(restaurantElement);
    });

    document.getElementById("prev-btn").disabled = page === 1;
    document.getElementById("next-btn").disabled = endIndex >= restaurants.length;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentPage--;
    renderRestaurants(currentPage);
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentPage++;
    renderRestaurants(currentPage);
});

renderRestaurants(currentPage);