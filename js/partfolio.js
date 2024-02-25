import {get, parfolioArray} from "../js/utilis.js";
console.log(parfolioArray);


document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    const mainBox = get(".partfolio__wrapper");

    function renderPortfolioCards() {
        const cardCount = window.innerWidth >= 768 ? 6 : 4;

        let displayCards = parfolioArray.slice(0, cardCount).map(item => {
            const { id, image } = item;
            return `
                <div class="partfolio__innerside" data-id=${id}>
                    <img src=${image} alt="partfolio links">
                    <div class="parfolio__hover-box">
                        <div>
                            <h2>Make sure to plan <br/> the hierarchy of your project</h2>
                            <button>
                                Read more <i class="right__button-vector fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        mainBox.innerHTML = displayCards;
    }

    renderPortfolioCards();

    window.addEventListener("resize", renderPortfolioCards);
});

