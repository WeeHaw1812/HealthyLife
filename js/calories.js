function calculateCalories(
    age,
    weight,
    height,
    activity
) {

    const bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;


    return Math.round(
        bmr * activity
    );
}