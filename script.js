document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const cookieButton = document.getElementById("cookie-button");
    const cookieButton2 = document.getElementById("cookie-button2");
    
    const catalogue = document.querySelector(".item-cards");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.querySelector(".close");

    const path = window.location.pathname;

    if (banner) {
        banner.style.display = "block";
        [cookieButton, cookieButton2].forEach(btn => {
            if (btn) btn.onclick = () => banner.style.display = "none";
        });
    }

    if (path.includes("games.html") || path.includes("index.html") || path === "/") {
        fetch("games.json")
            .then(res => res.json())
            .then(data => {
                if (!catalogue) return;
                catalogue.innerHTML = ''; 
                data.games.forEach(game => {
                    if (!game.title) return;

                    const itemCard = document.createElement("div");
                    itemCard.classList.add("card"); 
                    itemCard.innerHTML = `
                        <img class="myImg" src="${game.img}" alt="${game.title}"> 
                        <h2>${game.title}</h2>
                        <h4>${game.price}</h4>
                        <h6>${game.year}</h6>
                        <div class="short"><hr></div>
                        <p>${game.desc}</p>
                        <ul>
                            <li>${game.f1}</li>
                            <li>${game.f2}</li>
                            <li>${game.f3}</li>
                        </ul>
                    `;
                    catalogue.appendChild(itemCard);
                    const img = itemCard.querySelector('.myImg');
                    img.onclick = function() {
                        if (modal) {
                            modal.style.display = "block";
                            modalImg.src = this.src;
                            captionText.innerHTML = this.alt;
                        }
                    };
                });
            });
    }

    if (path.includes("hardware.html")) {
        fetch("hardware.json")
            .then(res => res.json())
            .then(data => {
                if (!catalogue) return;
                catalogue.innerHTML = '';
                data.hardware.forEach(item => {
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

    if (span) {
        span.onclick = () => modal.style.display = "none";
    }
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };
});