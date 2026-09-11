function getFavorites() {

    return JSON.parse(
        localStorage.getItem(
            "healthyFavorites"
        )
    ) || [];
}


function saveFavorites(favorites) {

    localStorage.setItem(
        "healthyFavorites",
        JSON.stringify(favorites)
    );
}


function toggleFavorite(id) {

    let favorites =
        getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    saveFavorites(favorites);


    if (
        typeof renderMeals ===
        "function"
    ) {

        renderMeals();

    }


    if (
        typeof renderFavorites ===
        "function"
    ) {

        renderFavorites();

    }
}


function isFavorite(id) {

    return getFavorites()
        .includes(id);

}


function renderFavorites() {

    const box =
        document.getElementById(
            "favoriteList"
        );


    if (!box) return;


    const favorites =
        getFavorites();


    const meals =
        mealData.filter(
            meal =>
                favorites.includes(
                    meal.id
                )
        );


    if (meals.length === 0) {

        box.innerHTML = `
            <div class="card">
                ❤️ Chưa có món ăn yêu thích.
                <br><br>
                <a href="meals.html"
                   class="btn btn-primary">
                    Xem món ăn
                </a>
            </div>
        `;

        return;
    }


    box.innerHTML =
        meals.map(
            meal => `

            <div class="meal-card">

                <img
                    src="${meal.image}"
                    alt="${meal.name}"
                >

                <div class="meal-content">

                    <h3>
                        ${meal.name}
                    </h3>

                    <p>
                        🔥 ${meal.calories} kcal
                    </p>

                    <div class="meal-buttons">

                        <a
                            href="meal-detail.html?id=${meal.id}"
                            class="small-btn btn-primary"
                        >
                            Xem
                        </a>

                        <button
                            class="small-btn"
                            onclick="toggleFavorite(${meal.id})"
                        >
                            ❤️ Xóa
                        </button>

                    </div>

                </div>

            </div>

        `
        ).join("");

}


document.addEventListener(
    "DOMContentLoaded",
    renderFavorites
);