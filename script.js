fetch("games.json")
    .then(response => response.json())
    .then(data => {
        const games = data.games;
        const catalogue = document.querySelector(".item-cards");
        catalogue.innerHTML = ''; 
        games.forEach(game => {
            const itemCard = document.createElement("div");
            itemCard.classList.add("card"); 
            
            itemCard.innerHTML = `
                <img src="${game.img}" alt="${game.title}"> 
                <h2>${game.title}</h2>
                <h6>${game.price}</h6>
                <div class="short">
                    <hr>
                </div>
                <p>${game.desc}</p>
                <h4>Features</h4>
                <ul>
                    <li>${game.f1}</li>
                    <li>${game.f2}</li>
                    <li>${game.f3}</li>
                </ul>
            `;
            catalogue.appendChild(itemCard);
        });
    })
    .catch(err => console.error("Loading Error Occurred:", err));