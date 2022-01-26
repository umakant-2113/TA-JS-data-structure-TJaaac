```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true
<!-- reason both is object  and both data same. -->
- `user === newUser;` // true
<!-- reason both is object  and both data same. -->
- `user.name === newUser.name;` // true
<!-- reason both is object  and both user.name is same  -->
- `user.name == newUser.name;` // true
<!-- reason both is object  and both user.name is same  -->
- `user.sibling == newUser.sibling;` // true
<!-- reason both is object  and both user.sibling is same  -->
- `user.sibling === newUser.sibling;`// true
<!-- reason both is object  and both user.sibling is same  -->
- `user.sibling == allBrothers;` // false
<!-- both is arrey but first is inside the object  and second is free arrey   -->
- `user.sibling === allBrothers;`//false
<!-- both is arrey but first is inside the object  and second is free arrey   -->
- `brothersCopy === allBrothers;` // false
<!-- brothersCopy takes value from object  so this is not equal  -->

- `brothersCopy == allBrothers;` // false
<!-- brothersCopy takes value from object  so this is not equal  -->
- `brothersCopy == user.sibling;` // true
<!-- brothersCopy takes his value from object and user.sibling takes value from object  -->
- `brothersCopy === user.sibling;`// true
<!-- brothersCopy takes his value from object and user.sibling takes value from object  -->
- `brothersCopy[0] === user.sibling[0];`// true
<!-- brothersCopy takes his value from object and user.sibling takes value from object  -->
- `brothersCopy[1] === user.sibling[1];`// true
<!-- brothersCopy takes his value from object and user.sibling takes value from object  -->
- `user.sibling[1] === newUser.sibling[1];` // true
<!-- brothersCopy takes his value from object and user.sibling takes value from object  -->
