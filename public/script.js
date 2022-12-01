/**
 * this function will accept detials about a person
 * create an object for them.
 *
 * @param {string} name the persons full name
 * @param {number} age the persons age
 * @param {boolean} isDeveloper whether or not person is developer
 * @returns {Object} the person object
 */
function createPerson(name, age, isDeveloper) {
  return {
    name: name,
    age: age,
    isDeveloper: isDeveloper,
  };
}

class Person {
  /**
   * this constructor creates a person
   *
   * @param {string} name the persons full name
   * @param {number} age the persons age
   * @param {boolean} isDeveloper whether or not person is developer
   * @returns {Object} the person object
   */
  constructor(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }
}

/**
 * Outpups etails abouta person.
 *
 * @param {Person} person
 */
function printDetails(person) {
  console.log(`${person.name} is ${person.age} years old is `);
}

/**
 * gives you numbers.
 *
 * @returns {number[]}
 */
function getNumber() {
  return [10, 12, 130, 150];
}
const numbers = getNumber();

for (const n in numbers) {
  console.log(n);
  /**
   * this section will add 2 to every num
   */
  console.log(n+2);
}


/**
 * create new person
 */
let p1 = new Person("alex", 21, true);
printDetails(p1);
