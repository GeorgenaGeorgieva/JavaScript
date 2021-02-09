function personalBMI(name, age, weight, height) {

    let person = {
        name: name,
        personalInfo: { age: Number(age), weight: Number(weight), height: Number(height) },
        BMI: Math.round((weight / height / height) * 10000)
    };


    if (person.BMI < 18.5) {
        person.status = 'underweight';
    } else
    if (person.BMI < 25) {
        person.status = 'normal';
    } else if (person.BMI < 30) {
        person.status = 'overweight';
    } else {
        person.status = 'obese';
        person.recommendation = 'admission required';
    }

    return person;
}

personalBMI('Peter', 29, 75, 182);
personalBMI('Honey Boo Boo', 9, 57, 137);