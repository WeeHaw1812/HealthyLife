let visibleCount = 10;

function shuffleMeals(meals) {
    const shuffledMeals = [...meals];

    for (let index = shuffledMeals.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledMeals[index], shuffledMeals[randomIndex]] =
            [shuffledMeals[randomIndex], shuffledMeals[index]];
    }

    return shuffledMeals;
}

let filteredMeals = shuffleMeals(mealData);


function renderMeals() {

    const grid =
        document.getElementById(
            "mealGrid"
        );


    if (!grid) return;


    const visibleMeals =
        filteredMeals.slice(
            0,
            visibleCount
        );


    grid.innerHTML =
        visibleMeals.map(
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
                        🍽 ${meal.type}
                    </p>

                    <p>
                        🔥 ${meal.calories} kcal
                    </p>


                    <div class="meal-buttons">

                        <a
                            href="meal-detail.html?id=${meal.id}"
                            class="small-btn btn-primary"
                        >
                            Xem cách làm
                        </a>


                        <button
                            class="small-btn"
                            onclick="toggleFavorite(${meal.id})"
                        >
                            ${
                                isFavorite(meal.id)
                                ? "❤️"
                                : "🤍"
                            }
                        </button>

                    </div>

                </div>

            </div>

        `
        ).join("");


    const button =
        document.getElementById(
            "showMoreBtn"
        );


    if (!button) return;


    if (
        visibleCount >=
        filteredMeals.length
    ) {

        button.style.display =
            "none";

    } else {

        button.style.display =
            "inline-flex";

        button.textContent =
            "Xem thêm món";
    }
}


// ================= XEM THÊM =================

const showMoreBtn =
    document.getElementById(
        "showMoreBtn"
    );


if (showMoreBtn) {

    showMoreBtn.addEventListener(
        "click",
        function () {

            visibleCount += 10;

            renderMeals();

        }
    );

}


// ================= TÌM KIẾM =================

const searchMeal =
    document.getElementById(
        "searchMeal"
    );


if (searchMeal) {

    searchMeal.addEventListener(
        "input",
        filterMeals
    );

}


// ================= LỌC LOẠI =================

const mealType =
    document.getElementById(
        "mealType"
    );


if (mealType) {

    mealType.addEventListener(
        "change",
        filterMeals
    );

}


function filterMeals() {

    const keyword =
        searchMeal
        ? searchMeal.value
            .toLowerCase()
        : "";


    const type =
        mealType
        ? mealType.value
        : "all";


    filteredMeals =
        mealData.filter(
            meal => {

                const matchName =
                    meal.name
                        .toLowerCase()
                        .includes(
                            keyword
                        );


                const matchType =
                    type === "all" ||
                    meal.type === type;


                return (
                    matchName &&
                    matchType
                );

            }
        );


    visibleCount = 10;

    filteredMeals = shuffleMeals(filteredMeals);

    renderMeals();

}


// ================= CHI TIẾT =================

function renderMealDetail() {

    const box =
        document.getElementById(
            "mealDetail"
        );


    if (!box) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const meal =
        mealData.find(
            item => item.id === id
        );


    if (!meal) {

        box.innerHTML = `
            <div class="card">
                Không tìm thấy món ăn.
            </div>
        `;

        return;
    }


    box.innerHTML = `

        <div class="meal-detail-grid">

            <div>

                <img
                    class="meal-detail-image"
                    src="${meal.image}"
                    alt="${meal.name}"
                >

            </div>


            <div class="card">

                <span class="badge">
                    ${meal.type}
                </span>

                <h1>
                    ${meal.name}
                </h1>

                <p>
                    ${meal.description}
                </p>

                <h3>
                    🔥 ${meal.calories} kcal
                </h3>


                <button
                    class="btn btn-primary"
                    onclick="toggleFavorite(${meal.id})"
                >
                    ${
                        isFavorite(meal.id)
                        ? "❤️ Đã yêu thích"
                        : "🤍 Thêm yêu thích"
                    }
                </button>

            </div>

        </div>


        <div class="meal-detail-grid"
             style="margin-top:25px;">

            <div class="card">

                <h2>
                    🥕 Nguyên liệu
                </h2>

                <ul>

                    ${
                        meal.ingredients
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("")
                    }

                </ul>

            </div>


            <div class="card">

                <h2>
                    👨‍🍳 Cách làm
                </h2>

                <ol>

                    ${
                        meal.steps
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("")
                    }

                </ol>

            </div>

        </div>

    `;
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderMeals();

        renderMealDetail();

    }
);