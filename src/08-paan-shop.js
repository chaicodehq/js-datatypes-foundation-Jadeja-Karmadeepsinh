/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */
export function createPaanOrder(basePaan, customizations) {
  // Your code here
  if(typeof basePaan !== "object" || basePaan === null) return {};
  if(typeof customizations !== "object" || customizations === null) return {...basePaan};
  return Object.assign({}, basePaan, customizations);
}

export function freezeMenu(menu) {
  // Your code here\
  if(typeof menu !== "object" || menu === null) return {};
  Object.freeze(menu);
  return menu;
}

export function updatePrices(menu, increase) {
  // Your code here
  if(typeof menu !== "object" || menu === null || typeof increase !== "number") return {};
  const newObj = Object.fromEntries(Object.entries(menu).map(([key, value]) => [key, value + increase]));
  return newObj;
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  // Your code here
  if(typeof regularMenu !== "object") regularMenu = {};
  if(typeof specialsMenu !== "object") specialsMenu = {};
  return { ...regularMenu, ...specialsMenu };
}


/*
Object.assign()
Definition

Object.assign() copies properties from one or more source objects into a target object.

Syntax
Object.assign(target, source1, source2, ...)

Example
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const result = Object.assign({}, obj1, obj2);
console.log(result); 
// { a: 1, b: 2 }

What actually happens?

It performs a shallow copy

It copies only enumerable own properties

If keys clash → last one wins

Object.assign({ a: 1 }, { a: 5 });
// { a: 5 }

Important

Nested objects are NOT deeply cloned.

const obj = { a: { b: 1 } };
const copy = Object.assign({}, obj);

copy.a.b = 100;
console.log(obj.a.b); // 100  (same reference)

Time & Space Complexity

Time: O(n) → where n = total properties copied

Space: O(n) → new object created

================================================================

2️⃣ Object.freeze()
📌 Definition

Freezes an object → prevents modification.

📌 Example
const obj = { name: "KJ" };

Object.freeze(obj);

obj.name = "Dominus";
console.log(obj.name); // "KJ"

📌 What Freeze Prevents

❌ Adding properties

❌ Deleting properties

❌ Modifying existing properties

⚠️ BUT (Big Concept)

Freeze is shallow

const obj = {
  inner: { score: 10 }
};

Object.freeze(obj);

obj.inner.score = 50; 
console.log(obj.inner.score); // 50 😈


Nested objects are still mutable unless you recursively freeze.

🧠 Complexity

Time: O(n)

Space: O(1)

=================================================================

4️⃣ Object.entries()
📌 Definition

Converts object into array of [key, value] pairs.

📌 Example
const obj = { a: 1, b: 2 };

console.log(Object.entries(obj));
// [ ['a',1], ['b',2] ]

📌 Why powerful?

Lets you use array methods on objects.

Object.entries(obj).map(([key, value]) => {
  return key + value;
});

🧠 Complexity

Time: O(n)

Space: O(n) (new array created)

=======================================================

5️⃣ Object.fromEntries()
📌 Definition

Opposite of Object.entries()
Converts array of [key, value] into object.

📌 Example
const arr = [
  ['a', 1],
  ['b', 2]
];

const obj = Object.fromEntries(arr);
console.log(obj);
// { a:1, b:2 }

🔥 Powerful Combo Pattern
const obj = { a: 1, b: 2, c: 3 };

const filtered = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);

console.log(filtered);
// { b:2, c:3 }


This is clean object transformation magic ✨

🧠 Complexity

Time: O(n)

Space: O(n)
*/ 

