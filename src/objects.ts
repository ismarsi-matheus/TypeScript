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
};

const user: User = {
  name: "Jane",
  age: 22,
  email: "jane@doe.com",
  password: "12345",
  orders: [{ productId: "1", price: 200 }],
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
    books:['Livro 1'],
    email:'jhon@doe.com',
    name:'Jhon',
    orders:[],
};
