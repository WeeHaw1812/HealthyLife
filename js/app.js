document.addEventListener(
    "DOMContentLoaded",
    function () {

        // ================= USER =================

        const currentEmail = localStorage.getItem(
            "healthyCurrentUser"
        );

        const users =
            JSON.parse(
                localStorage.getItem(
                    "healthyUsers"
                )
            ) || [];

        const user =
            users.find(
                account => account.email === currentEmail
            ) || null;


        const userName =
            document.getElementById(
                "userName"
            );


        if (
            user &&
            userName
        ) {

            userName.textContent =
                user.name;

        }


        // ================= BMI =================

        const bmiData =
            JSON.parse(
                localStorage.getItem(
                    "bmiData"
                )
            );


        if (bmiData) {

            const bmi =
                document.getElementById(
                    "dashboardBMI"
                );


            const status =
                document.getElementById(
                    "dashboardBMIStatus"
                );


            const calories =
                document.getElementById(
                    "dashboardCalories"
                );


            if (bmi)
                bmi.textContent =
                    bmiData.bmi.toFixed(1);


            if (status)
                status.textContent =
                    bmiData.status;


            if (calories)
                calories.textContent =
                    bmiData.calories;

        }


        // ================= FAVORITES =================

        const favorites =
            JSON.parse(
                localStorage.getItem(
                    "healthyFavorites"
                )
            ) || [];


        const favoriteCount =
            document.getElementById(
                "favoriteCount"
            );


        if (favoriteCount) {

            favoriteCount.textContent =
                favorites.length;

        }

    }
);