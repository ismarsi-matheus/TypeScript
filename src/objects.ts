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
