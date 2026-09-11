// ======================================================
// DATABASE MÓN ĂN
// ======================================================

const mealData = [

    // ================= MÓN 1 =================

    {
        id: 1,

        name: "Salad Bơ Quinoa",

        type: "Bữa sáng",

        calories: 420,

        image:
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80",

        description:
            "Một bữa sáng nhẹ, giàu chất xơ và protein để bắt đầu ngày mới.",

        ingredients: [
            "1 chén quinoa nấu chín",
            "1/2 quả bơ",
            "Rau xà lách",
            "Cà chua",
            "Hạt chia",
            "Dầu oliu",
            "Nước cốt chanh"
        ],

        steps: [
            "Rửa sạch rau và cắt nhỏ.",
            "Cho quinoa vào bát lớn.",
            "Thêm bơ và rau.",
            "Tạo sốt bằng dầu oliu và chanh.",
            "Trộn đều và thưởng thức."
        ]
    },


    // ================= MÓN 2 =================

    {
        id: 2,

        name: "Gà Tươi & Rau",

        type: "Bữa trưa",

        calories: 560,

        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",

        description:
            "Bữa ăn giàu protein giúp bạn no lâu và đủ năng lượng.",

        ingredients: [
            "200g ức gà",
            "Rau xanh",
            "Cà rốt",
            "Bông cải xanh",
            "Dầu olive"
        ],

        steps: [
            "Ướp gà với gia vị.",
            "Nướng gà đến chín vàng.",
            "Xào rau với ít dầu.",
            "Phục vụ gà cùng rau."
        ]
    },


    // ================= MÓN 3 =================

    {
        id: 3,

        name: "Dưa Hấu Yogurt",

        type: "Bữa phụ",

        calories: 180,

        image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",

        description:
            "Món ăn nhẹ giải nhiệt và bổ sung dưỡng chất.",

        ingredients: [
            "200g dưa hấu",
            "150g sữa chua",
            "Hạt dưa",
            "Chanh"
        ],

        steps: [
            "Cắt dưa hấu.",
            "Cho sữa chua lên trên.",
            "Rắc hạt dưa.",
            "Thêm vài lát chanh."
        ]
    },


    // ================= MÓN 4 =================

    {
        id: 4,

        name: "Cá Hồi Nướng",

        type: "Bữa tối",

        calories: 510,

        image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",

        description:
            "Món ăn giàu omega-3 và protein.",

        ingredients: [
            "150g cá hồi",
            "Bông cải xanh",
            "Cà rốt",
            "Dầu olive",
            "Chanh",
            "Tỏi"
        ],

        steps: [
            "Rửa sạch cá.",
            "Ướp cá với tỏi và chanh.",
            "Nướng khoảng 15 phút.",
            "Hấp rau củ.",
            "Ăn cùng cá hồi."
        ]
    },


    // ================= MÓN 5 =================

    {
        id: 5,

        name: "Sinh Tố Xoài",

        type: "Bữa phụ",

        calories: 260,

        image:
            "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",

        description:
            "Sinh tố xoài cung cấp năng lượng tự nhiên.",

        ingredients: [
            "1 quả xoài",
            "Sữa hạt",
            "Đá",
            "1 thìa mật ong"
        ],

        steps: [
            "Cắt xoài.",
            "Cho xoài vào máy xay.",
            "Thêm sữa và đá.",
            "Thêm mật ong.",
            "Xay mịn."
        ]
    },


    // ================= MÓN 6 =================

    {
        id: 6,

        name: "Bánh Mì Nguyên Cám",

        type: "Bữa sáng",

        calories: 430,

        image:
            "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",

        description:
            "Bữa sáng nhanh với bánh mì nguyên cám và trứng.",

        ingredients: [
            "2 lát bánh mì nguyên cám",
            "Trứng gà",
            "Cà chua",
            "Rau xanh",
            "Phô mai ít béo"
        ],

        steps: [
            "Nướng bánh mì.",
            "Luộc trứng.",
            "Cắt cà chua.",
            "Cho trứng và rau lên bánh.",
            "Thêm phô mai."
        ]
    },


    // ================= MÓN 7 =================

    {
        id: 7,

        name: "Cơm Gạo Lứt Ức Gà",

        type: "Bữa trưa",

        calories: 480,

        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",

        description:
            "Cơm gạo lứt kết hợp ức gà và rau củ.",

        ingredients: [
            "1 chén cơm gạo lứt",
            "150g ức gà",
            "Bông cải",
            "Cà rốt",
            "Dầu olive"
        ],

        steps: [
            "Nấu cơm gạo lứt.",
            "Ướp ức gà.",
            "Áp chảo ức gà.",
            "Hấp rau củ.",
            "Cho tất cả ra đĩa."
        ]
    },


    // ================= MÓN 8 =================

    {
        id: 8,

        name: "Sữa Chua Trái Cây",

        type: "Bữa phụ",

        calories: 210,

        image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",

        description:
            "Sữa chua kết hợp trái cây tươi.",

        ingredients: [
            "Sữa chua không đường",
            "Dâu tây",
            "Việt quất",
            "Chuối",
            "Hạt chia"
        ],

        steps: [
            "Rửa trái cây.",
            "Cắt trái cây.",
            "Cho sữa chua vào bát.",
            "Thêm trái cây.",
            "Rắc hạt chia."
        ]
    },


    // ================= MÓN 9 =================

    {
        id: 9,

        name: "Salad Cá Ngừ",

        type: "Bữa trưa",

        calories: 390,

        image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",

        description:
            "Salad cá ngừ nhiều rau xanh.",

        ingredients: [
            "Cá ngừ",
            "Xà lách",
            "Cà chua",
            "Dưa leo",
            "Dầu olive"
        ],

        steps: [
            "Rửa rau.",
            "Cắt cà chua.",
            "Cắt dưa leo.",
            "Cho cá ngừ vào.",
            "Trộn đều."
        ]
    },


    // ================= MÓN 10 =================

    {
        id: 10,

        name: "Khoai Lang Trứng",

        type: "Bữa sáng",

        calories: 320,

        image:
            "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=900&q=80",

        description:
            "Khoai lang và trứng tạo nên bữa sáng đơn giản.",

        ingredients: [
            "1 củ khoai lang",
            "2 quả trứng",
            "Rau xanh",
            "Tiêu"
        ],

        steps: [
            "Rửa khoai lang.",
            "Hấp khoai lang.",
            "Luộc trứng.",
            "Rửa rau.",
            "Ăn cùng nhau."
        ]
    }

];


// ======================================================
// HIỂN THỊ MÓN ĂN
// ======================================================

// QUAN TRỌNG:
// Ban đầu chỉ hiện 5 món.

let visibleCount = 5;


// ======================================================
// MÓN YÊU THÍCH
// ======================================================

let favorites =
    JSON.parse(
        localStorage.getItem("healthyFavorites")
    ) || [];


// ======================================================
// HIỂN THỊ DANH SÁCH MÓN
// ======================================================

function renderMeals() {

    const mealGrid =
        document.getElementById("mealGrid");


    // CHỈ HIỆN visibleCount MÓN

    const visibleMeals =
        mealData.slice(0, visibleCount);


    mealGrid.innerHTML =
        visibleMeals.map(meal => {

            const isFavorite =
                favorites.includes(meal.id);


            return `

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

                            <button
                                class="small-btn primary"
                                onclick="showRecipe(${meal.id})"
                            >
                                Cách làm
                            </button>


                            <button
                                class="small-btn favorite-btn"
                                onclick="toggleFavorite(${meal.id})"
                            >
                                ${isFavorite ? "❤️" : "🤍"}
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");


    // Nếu đã hiện hết món
    // thì ẩn nút Xem thêm.

    const showMoreBtn =
        document.getElementById("showMoreBtn");


    if (visibleCount >= mealData.length) {

        showMoreBtn.style.display =
            "none";

    } else {

        showMoreBtn.style.display =
            "inline-block";

        showMoreBtn.textContent =
            `Xem thêm ${Math.min(
                5,
                mealData.length - visibleCount
            )} món`;
    }
}


// ======================================================
// NÚT XEM THÊM
// ======================================================

document
    .getElementById("showMoreBtn")
    .addEventListener("click", function () {

        // Tăng thêm 5 món

        visibleCount += 5;


        // Hiển thị lại

        renderMeals();


        // Cuộn nhẹ xuống

        document
            .getElementById("mealGrid")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });


// ======================================================
// HIỂN THỊ CHI TIẾT MÓN
// ======================================================

function showRecipe(id) {

    const meal =
        mealData.find(
            item => item.id === id
        );


    if (!meal) return;


    document.getElementById(
        "recipeName"
    ).textContent =
        meal.name;


    document.getElementById(
        "recipeDescription"
    ).textContent =
        meal.description;


    document.getElementById(
        "recipeType"
    ).textContent =
        "🍽 " + meal.type;


    document.getElementById(
        "recipeCalories"
    ).textContent =
        "🔥 " + meal.calories + " kcal";


    document.getElementById(
        "ingredientsList"
    ).innerHTML =

        meal.ingredients.map(
            item =>
                `<li>${item}</li>`
        ).join("");


    document.getElementById(
        "stepsList"
    ).innerHTML =

        meal.steps.map(
            item =>
                `<li>${item}</li>`
        ).join("");


    document
        .getElementById("recipe")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================================
// YÊU THÍCH
// ======================================================

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Đã xóa khỏi yêu thích"
        );

    } else {

        favorites.push(id);

        showToast(
            "❤️ Đã thêm vào yêu thích"
        );
    }


    localStorage.setItem(
        "healthyFavorites",
        JSON.stringify(favorites)
    );


    renderMeals();

    renderFavorites();
}


// ======================================================
// HIỂN THỊ MÓN YÊU THÍCH
// ======================================================

function renderFavorites() {

    const box =
        document.getElementById(
            "favoriteList"
        );


    if (favorites.length === 0) {

        box.innerHTML =
            "<p>Chưa có món yêu thích.</p>";

        return;
    }


    box.innerHTML =

        favorites.map(id => {

            const meal =
                mealData.find(
                    item => item.id === id
                );


            return `

                <div class="favorite-item">

                    <img
                        src="${meal.image}"
                        alt="${meal.name}"
                    >

                    <div>

                        <strong>
                            ${meal.name}
                        </strong>

                        <br>

                        <small>
                            🔥 ${meal.calories} kcal
                        </small>

                    </div>


                    <button
                        class="small-btn"
                        onclick="toggleFavorite(${meal.id})"
                    >
                        Xóa
                    </button>

                </div>

            `;

        }).join("");
}


// ======================================================
// BMI
// ======================================================

document
    .getElementById("bmiForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const age =
                Number(
                    document.getElementById(
                        "age"
                    ).value
                );


            const weight =
                Number(
                    document.getElementById(
                        "weight"
                    ).value
                );


            const height =
                Number(
                    document.getElementById(
                        "height"
                    ).value
                );


            const activity =
                Number(
                    document.getElementById(
                        "activity"
                    ).value
                );


            if (
                age <= 0 ||
                weight <= 0 ||
                height <= 0
            ) {

                showToast(
                    "Vui lòng nhập thông tin hợp lệ."
                );

                return;
            }


            // BMI

            const bmi =
                weight /
                (
                    (height / 100) *
                    (height / 100)
                );


            // BMR

            const bmr =
                10 * weight +
                6.25 * height -
                5 * age +
                5;


            // Calo

            const calories =
                Math.round(
                    bmr * activity
                );


            let status;


            if (bmi < 18.5) {

                status =
                    "Thiếu cân";

            } else if (bmi < 25) {

                status =
                    "Cân nặng bình thường";

            } else if (bmi < 30) {

                status =
                    "Thừa cân";

            } else {

                status =
                    "Béo phì";
            }


            document.getElementById(
                "bmiResult"
            ).textContent =
                bmi.toFixed(1);


            document.getElementById(
                "bmiStatus"
            ).textContent =
                status;


            document.getElementById(
                "calorieResult"
            ).textContent =
                calories +
                " kcal";


            document.getElementById(
                "heroCalories"
            ).textContent =
                calories +
                " kcal";


            document.getElementById(
                "durationResult"
            ).textContent =
                "4 - 8 tuần";


            showToast(
                "Đã tính BMI và calo!"
            );


            drawChart(calories);
        }
    );


// ======================================================
// NHẮC GIỜ ĂN
// ======================================================

function renderReminders() {

    const breakfast =
        localStorage.getItem(
            "breakfastTime"
        ) || "07:00";


    const lunch =
        localStorage.getItem(
            "lunchTime"
        ) || "12:00";


    const dinner =
        localStorage.getItem(
            "dinnerTime"
        ) || "18:30";


    document.getElementById(
        "breakfastTime"
    ).value =
        breakfast;


    document.getElementById(
        "lunchTime"
    ).value =
        lunch;


    document.getElementById(
        "dinnerTime"
    ).value =
        dinner;


    document.getElementById(
        "reminderList"
    ).innerHTML = `

        <div class="reminder-item">

            <span>
                🍳 Bữa sáng
            </span>

            <strong>
                ${breakfast}
            </strong>

        </div>


        <div class="reminder-item">

            <span>
                🍱 Bữa trưa
            </span>

            <strong>
                ${lunch}
            </strong>

        </div>


        <div class="reminder-item">

            <span>
                🍲 Bữa tối
            </span>

            <strong>
                ${dinner}
            </strong>

        </div>

    `;
}


document
    .getElementById("reminderForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            localStorage.setItem(
                "breakfastTime",
                document.getElementById(
                    "breakfastTime"
                ).value
            );


            localStorage.setItem(
                "lunchTime",
                document.getElementById(
                    "lunchTime"
                ).value
            );


            localStorage.setItem(
                "dinnerTime",
                document.getElementById(
                    "dinnerTime"
                ).value
            );


            renderReminders();


            showToast(
                "⏰ Đã lưu giờ ăn!"
            );
        }
    );


// ======================================================
// KIỂM TRA GIỜ ĂN
// ======================================================

setInterval(
    function() {

        const now =
            new Date();


        const currentTime =
            now.toTimeString()
                .slice(0, 5);


        const times = [

            [
                "Bữa sáng",
                localStorage.getItem(
                    "breakfastTime"
                )
            ],

            [
                "Bữa trưa",
                localStorage.getItem(
                    "lunchTime"
                )
            ],

            [
                "Bữa tối",
                localStorage.getItem(
                    "dinnerTime"
                )
            ]

        ];


        times.forEach(
            item => {

                if (
                    item[1] &&
                    item[1] ===
                    currentTime
                ) {

                    showToast(
                        "🔔 Đã đến giờ " +
                        item[0]
                    );
                }

            }
        );

    },
    30000
);


// ======================================================
// BIỂU ĐỒ
// ======================================================

function drawChart(
    calories = 2000
) {

    const canvas =
        document.getElementById(
            "statsChart"
        );


    const ctx =
        canvas.getContext("2d");


    const values = [
        calories * 0.8,
        calories * 0.9,
        calories * 0.75,
        calories,
        calories * 0.95,
        calories * 1.05,
        calories * 0.85
    ];


    const width =
        canvas.clientWidth;


    const height = 300;


    canvas.width =
        width;


    canvas.height =
        height;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    const max =
        Math.max(...values) * 1.2;


    const barWidth =
        width / 10;


    values.forEach(
        (value, index) => {

            const barHeight =
                (
                    value / max
                ) *
                220;


            const x =
                40 +
                index *
                barWidth;


            const y =
                250 -
                barHeight;


            ctx.fillStyle =
                "#15945e";


            ctx.fillRect(
                x,
                y,
                barWidth - 15,
                barHeight
            );


            ctx.fillStyle =
                "#17382c";


            ctx.font =
                "12px Arial";


            ctx.fillText(
                "T" + (index + 2),
                x,
                275
            );

        }
    );
}


// ======================================================
// ĐĂNG NHẬP
// ======================================================

const loginModal =
    document.getElementById(
        "loginModal"
    );


const registerModal =
    document.getElementById(
        "registerModal"
    );


document
    .getElementById("openLogin")
    .onclick =
    function() {

        loginModal.classList.remove(
            "hidden"
        );

    };


document
    .getElementById("closeLogin")
    .onclick =
    function() {

        loginModal.classList.add(
            "hidden"
        );

    };


document
    .getElementById("openRegister")
    .onclick =
    function() {

        loginModal.classList.add(
            "hidden"
        );

        registerModal.classList.remove(
            "hidden"
        );

    };


document
    .getElementById("closeRegister")
    .onclick =
    function() {

        registerModal.classList.add(
            "hidden"
        );

    };


// ======================================================
// ĐĂNG KÝ
// ======================================================

document
    .getElementById("registerForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value;


            const email =
                document.getElementById(
                    "registerEmail"
                ).value;


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const user = {

                name: name,

                email: email,

                password: password

            };


            const users =
                JSON.parse(
                    localStorage.getItem(
                        "healthyUsers"
                    )
                ) || [];

            const emailExists = users.some(
                existingUser =>
                    existingUser.email.toLowerCase() === email.toLowerCase()
            );

            if (emailExists) {
                document.getElementById(
                    "registerMessage"
                ).textContent =
                    "Email này đã được đăng ký.";

                return;
            }

            users.push(user);

            localStorage.setItem(
                "healthyUsers",
                JSON.stringify(users)
            );


            document.getElementById(
                "registerMessage"
            ).textContent =
                "Đăng ký thành công!";


            showToast(
                "🎉 Đăng ký thành công!"
            );


            setTimeout(
                function() {

                    registerModal.classList.add(
                        "hidden"
                    );

                    loginModal.classList.remove(
                        "hidden"
                    );

                },
                1000
            );
        }
    );


// ======================================================
// ĐĂNG NHẬP
// ======================================================

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value;


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const users =
                JSON.parse(
                    localStorage.getItem(
                        "healthyUsers"
                    )
                ) || [];

            const user = users.find(
                existingUser =>
                    existingUser.email.toLowerCase() === email.toLowerCase() &&
                    existingUser.password === password
            );


            if (
                user &&
                user.email === email &&
                user.password === password
            ) {

                document.getElementById(
                    "openLogin"
                ).textContent =
                    "👤 " + user.name;

                localStorage.setItem(
                    "healthyCurrentUser",
                    user.email
                );


                loginModal.classList.add(
                    "hidden"
                );


                showToast(
                    "👋 Đăng nhập thành công!"
                );

            } else {

                document.getElementById(
                    "loginMessage"
                ).textContent =
                    "Email hoặc mật khẩu không đúng.";

            }

        }
    );


// ======================================================
// TOAST
// ======================================================

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function() {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );
}


// ======================================================
// KHỞI ĐỘNG WEBSITE
// ======================================================

renderMeals();

renderFavorites();

renderReminders();

drawChart();