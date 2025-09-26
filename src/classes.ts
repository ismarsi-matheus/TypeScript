interface IPerson {
  id: number;
  //   name: string;
  //   age: number;
  sayMyName(): string; // mesma assinatura da classe
}

class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoIAm() {
    return this.name;
  }
}

// const person = new Person(1, "Matheus", 5);
const felipe = new Person(1, "Matheus", 5);
// console.log(person.sayMyName()); // Matheus
