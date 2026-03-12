document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const cookieButton = document.getElementById("cookie-button");
    const cookieButton2 = document.getElementById("cookie-button2");

    banner.style.display = "block";

    cookieButton.addEventListener("click", () => {
        banner.style.display = "none";
    });

    cookieButton2.addEventListener("click", () => {
        banner.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const catalogue = document.querySelector(".item-cards");

    if (window.location.pathname.includes("games.html")) {
        fetch("games.json")
            .then(response => response.json())
            .then(data => {
                const games = data.games;
                catalogue.innerHTML = ''; 
                games.forEach(game => {
                    const itemCard = document.createElement("div");
                    itemCard.classList.add("card"); 
                    itemCard.innerHTML = `
                        <img src="${game.img}" alt="${game.title}"> 
                        <h2>${game.title}</h2>
                        <h4>${game.price}</h4>
                        <h6>${game.year}</h6>
                        <div class="short"><hr></div>
                        <p>${game.desc}</p>
                    `;
                    catalogue.appendChild(itemCard);
                });
            });
    }

    if (window.location.pathname.includes("hardware.html")) {
        fetch("hardware.json")
            .then(response => response.json())
            .then(data => {
                const hardware = data.hardware;
                catalogue.innerHTML = '';
                hardware.forEach(item => {
                    const itemCard = document.createElement("div");
                    itemCard.classList.add("card");
                    itemCard.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <h4>${item.price}</h4>
                        <h6>${item.year}</h6>
                        <div class="short"><hr></div>
                        <p>${item.description}</p>
                    `;
                    catalogue.appendChild(itemCard);
                });
            });
    }
});

