// Returns the age of a person
const getAge = function(people) {
    const deathYear = people.yearOfDeath || new Date().getFullYear();
    return deathYear - people.yearOfBirth;
};

// Returns the person with the greatest age
const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(currentPerson);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
