const findTheOldest = function(people) {
    // Calculate age for each person
    people.forEach(person => {
        person.yearOfDeath ??= new Date().getFullYear();
        person['age'] = person.yearOfDeath - person.yearOfBirth;
    })

    // Sorts by oldest descending
    return people.sort((a,b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
