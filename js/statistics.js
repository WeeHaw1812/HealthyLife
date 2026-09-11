document.addEventListener(
    "DOMContentLoaded",
    function () {

        const bmiData =
            JSON.parse(
                localStorage.getItem(
                    "bmiData"
                )
            );


        const favorites =
            JSON.parse(
                localStorage.getItem(
                    "healthyFavorites"
                )
            ) || [];


        const weeks =
            localStorage.getItem(
                "planWeeks"
            ) || 0;


        if (bmiData) {

            document.getElementById(
                "totalCalories"
            ).textContent =
                bmiData.calories;


            document.getElementById(
                "currentBMI"
            ).textContent =
                bmiData.bmi.toFixed(1);

        }


        document.getElementById(
            "totalFavorites"
        ).textContent =
            favorites.length;


        document.getElementById(
            "planWeeks"
        ).textContent =
            weeks;


        drawChart(
            bmiData
                ? bmiData.calories
                : 2000
        );

    }
);


function drawChart(calories) {

    const canvas =
        document.getElementById(
            "calorieChart"
        );


    if (!canvas) return;


    const ctx =
        canvas.getContext("2d");


    canvas.width =
        canvas.clientWidth;


    canvas.height =
        300;


    const values = [

        calories * .8,

        calories * .9,

        calories * .95,

        calories,

        calories * .85,

        calories * 1.05,

        calories * .9

    ];


    const max =
        Math.max(...values) * 1.2;


    const width =
        canvas.width;


    const barWidth =
        width / 10;


    values.forEach(
        (value, index) => {

            const height =
                value / max * 220;


            const x =
                35 +
                index * barWidth;


            const y =
                250 -
                height;


            ctx.fillStyle =
                "#15945e";


            ctx.fillRect(
                x,
                y,
                barWidth - 15,
                height
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