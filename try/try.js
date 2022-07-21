class Person {
  static num = 7;
  constructor(height, weight, age) {
    this.height = height;
    this.weight = weight;
    this.age = age;
  }
  getHeight(n) {
    return this.height * n;
  }
}

let matt = new Person(172, 58, 19);

console.log(matt.getHeight(2));

class Student extends Person {
  constructor(height, weight, age, score) {
    super(height, weight, age);
    this.score = score;
  }
  getScore() {
    return this.score;
  }
}

let stu = new Student(172, 58, 19, 100);
console.log(stu.getScore());
console.log(Person.num);
