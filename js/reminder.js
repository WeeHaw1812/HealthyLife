document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "reminderForm"
            );


        const reminderList =
            document.getElementById(
                "reminderList"
            );


        function loadTimes() {

            document.getElementById(
                "breakfastTime"
            ).value =
                localStorage.getItem(
                    "breakfastTime"
                ) || "07:00";


            document.getElementById(
                "lunchTime"
            ).value =
                localStorage.getItem(
                    "lunchTime"
                ) || "12:00";


            document.getElementById(
                "dinnerTime"
            ).value =
                localStorage.getItem(
                    "dinnerTime"
                ) || "18:30";

        }


        function renderReminder() {

            if (!reminderList)
                return;


            const breakfast =
                document.getElementById(
                    "breakfastTime"
                ).value;


            const lunch =
                document.getElementById(
                    "lunchTime"
                ).value;


            const dinner =
                document.getElementById(
                    "dinnerTime"
                ).value;


            reminderList.innerHTML = `

                <div class="reminder-item">
                    <span>🍳 Bữa sáng</span>
                    <strong>${breakfast}</strong>
                </div>

                <div class="reminder-item">
                    <span>🍱 Bữa trưa</span>
                    <strong>${lunch}</strong>
                </div>

                <div class="reminder-item">
                    <span>🍲 Bữa tối</span>
                    <strong>${dinner}</strong>
                </div>

            `;

        }


        loadTimes();

        renderReminder();


        if (form) {

            form.addEventListener(
                "submit",
                function (event) {

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


                    renderReminder();


                    alert(
                        "Đã lưu giờ ăn!"
                    );

                }
            );

        }


        const savePlan =
            document.getElementById(
                "savePlan"
            );


        if (savePlan) {

            savePlan.addEventListener(
                "click",
                function () {

                    const weeks =
                        document.getElementById(
                            "duration"
                        ).value;


                    localStorage.setItem(
                        "planWeeks",
                        weeks
                    );


                    const result =
                        document.getElementById(
                            "planResult"
                        );


                    result.textContent =
                        `Bạn đã chọn duy trì chế độ ăn trong ${weeks} tuần.`;

                }
            );

        }

    }
);