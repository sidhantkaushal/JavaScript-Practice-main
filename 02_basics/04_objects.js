// Singleton and empty object

const tinderUser = new Object();

// Non singleton but empty

const tinderUser1 = {};

console.log(tinderUser);

const regularUser = {
  userFullName: {
    firstName: "John",
    lastName: "Smith",
  },
};

console.log(regularUser.userFullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  4: "c",
  5: "d",
};

const resultObj = { ...obj1, ...obj2 };
console.log(resultObj);

const newRes = Object.assign({}, obj1, obj2);
console.log(newRes);

console.log(Object.keys(newRes));
console.log(Object.values(newRes));
console.log(Object.entries(newRes));

console.log(regularUser.hasOwnProperty("userFullName"));

const product = {
  name: "golfball",
  price: 40,
  type: "sports",
};

const { name: itemName } = product;
console.log(itemName);
