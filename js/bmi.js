document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "bmiForm"
            );


        if (!form) return;


        form.addEventListener(
            "submit",
            function (event) {

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

                    alert(
                        "Vui lòng nhập thông tin hợp lệ."
                    );

                    return;
                }


                const heightMeter =
                    height / 100;


                const bmi =
                    weight /
                    (
                        heightMeter *
                        heightMeter
                    );


                const calories =
                    calculateCalories(
                        age,
                        weight,
                        height,
                        activity
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


                localStorage.setItem(
                    "bmiData",
                    JSON.stringify({
                        age,
                        weight,
                        height,
                        activity,
                        bmi,
                        calories,
                        status
                    })
                );


                document.getElementById(
                    "durationResult"
                ).textContent =
                    "4 - 8 tuần";

            }
        );

    }
);