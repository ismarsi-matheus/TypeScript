const returnValue = <T, X, Z>(value: T): T => value;

const message = returnValue<string, boolean, number>("Hello World ");
const count = returnValue(5);

function getFirstElementFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstElementFromArray<string>(["1", "2"]);

const firsValueFromNumberArray = getFirstElementFromArray<number>([10, 20]);

// Promises
const returnPromise = async (): Promise<string> => {
  return "5";
};

// Classes

class GenericNumber<T> {
  zerovalue: T;
  sum: (x: T, y: T) => T;

  constructor(zerovalue: T, sum: (x: T, y: T) => T) {
    this.zerovalue = zerovalue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
