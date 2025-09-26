// Type
type Order = {
  productId: string;
  price: number;
  quantity?: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  name: "Jane",
  age: 22,
  email: "jane@doe.com",
  password: "12345",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

user.password;

const print = (message?: string) => {};

print(user.password!);

// Union

type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["Livro 1"],
  email: "jhon@doe.com",
  name: "Jhon",
  orders: [],
  register() {
    return "a";
  },
};
// Interfaces
interface UserInterface {
  readonly name: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  name: "Felipe",
  login() {
    return "a";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  name: "Author",
  books: [],
  login() {
    return "a";
  },
};

type Grade = number | string;
const grade: Grade = 1;
