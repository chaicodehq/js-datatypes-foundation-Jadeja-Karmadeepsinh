/**
 * 📮 Dak Ghar Parcel Service - JSON & Type Conversion
 *
 * Dak Ghar (Post Office) mein parcels ka data manage karna hai.
 * Kabhi JSON mein convert karna padta hai, kabhi JSON se wapas laana
 * padta hai, kabhi ek type se doosre mein. Type conversion ka journey!
 *
 * Methods to explore: JSON.stringify(), JSON.parse(),
 *   String(), Number(), Array.from()
 *
 * Functions:
 *
 *   1. parcelToJSON(parcel)
 *      - JSON.stringify() se parcel object ko JSON string mein convert karo
 *      - try-catch use karo (circular references ke liye)
 *      - Agar parcel undefined hai ya error aaye, return ""
 *      - Example: parcelToJSON({id:"P001", weight:2.5})
 *                 => '{"id":"P001","weight":2.5}'
 *
 *   2. jsonToParcel(jsonString)
 *      - JSON.parse() se JSON string ko wapas object mein convert karo
 *      - try-catch use karo (invalid JSON ke liye)
 *      - Agar jsonString string nahi hai ya invalid JSON hai, return null
 *      - Example: jsonToParcel('{"id":"P001","weight":2.5}')
 *                 => {id:"P001", weight:2.5}
 *
 *   3. convertToString(value)
 *      - String() se kisi bhi value ko string mein convert karo
 *      - Example: convertToString(42) => "42"
 *      - Example: convertToString(true) => "true"
 *      - Example: convertToString(null) => "null"
 *      - Example: convertToString(undefined) => "undefined"
 *
 *   4. convertToNumber(value)
 *      - Number() se value ko number mein convert karo
 *      - Agar result NaN hai, toh NaN hi return karo (caller handle karega)
 *      - Example: convertToNumber("42.5") => 42.5
 *      - Example: convertToNumber(true) => 1
 *      - Example: convertToNumber("hello") => NaN
 *      - Example: convertToNumber("") => 0
 *
 *   5. stringToChars(str)
 *      - Array.from() se string ko characters ki array mein convert karo
 *      - Agar str string nahi hai, return []
 *      - Example: stringToChars("Dak") => ["D", "a", "k"]
 *      - Example: stringToChars("") => []
 *
 * @example
 *   parcelToJSON({id:"P001"})            // => '{"id":"P001"}'
 *   jsonToParcel('{"id":"P001"}')        // => {id:"P001"}
 *   convertToString(42)                   // => "42"
 *   stringToChars("Dak")                  // => ["D", "a", "k"]
 */
export function parcelToJSON(parcel) {
  // Your code here
  try{
    const str = JSON.stringify(parcel);
    if(str === undefined) return "";
    return str;
  }catch(e){
    return "";
  }
}

export function jsonToParcel(jsonString) {
  // Your code here
  if(typeof jsonString !== "string" || jsonString === "") return null;
  try{
    return JSON.parse(jsonString);
  }catch(e){
    return null;
  }
}

export function convertToString(value) {
  // Your code here
  return String(value);
}

export function convertToNumber(value) {
  // Your code here
  return Number(value);
}

export function stringToChars(str) {
  // Your code here
  if(typeof str !== "string") return [];
  return Array.from(str);
}

/*

1️⃣ JSON.stringify()

👉 Converts JavaScript object → JSON string

const user = { name: "Aman", age: 22 };

const jsonString = JSON.stringify(user);

console.log(jsonString);
// '{"name":"Aman","age":22}'


✔ Used when:

Sending data to server

Saving to localStorage

Deep copying (basic level)

⚠️ Important
JSON.stringify(undefined) // undefined
JSON.stringify(function(){}) // undefined


It ignores:

functions

undefined values

2️⃣ JSON.parse()

👉 Converts JSON string → JavaScript object

const str = '{"name":"Aman","age":22}';

const obj = JSON.parse(str);

console.log(obj.name); // Aman


⚠️ String must be valid JSON.

Invalid:

JSON.parse("{name: Aman}") ❌


Valid:

JSON.parse('{"name":"Aman"}') ✅

🔥 Common Use Together
const deepCopy = JSON.parse(JSON.stringify(obj));


Basic deep clone trick.

3️⃣ String()

👉 Converts value into string.

String(123)      // "123"
String(true)     // "true"
String(null)     // "null"
String(undefined)// "undefined"


Difference from .toString():

null.toString() ❌ error
String(null)    ✅ works


Safer conversion.

4️⃣ Number()

👉 Converts value into number.

Number("123")     // 123
Number("12.5")    // 12.5
Number("abc")     // NaN
Number(true)      // 1
Number(false)     // 0
Number("")        // 0


⚠️ Important difference:

Number("123abc") // NaN
parseInt("123abc") // 123


Number() strict hota hai.

5️⃣ Array.from()

👉 Converts iterable / array-like → real array.

Convert String → Array
Array.from("hello")
// ["h", "e", "l", "l", "o"]

Convert Set → Array
const set = new Set([1,2,3]);

Array.from(set)
// [1,2,3]

Convert Object Keys
Array.from(Object.keys({a:1, b:2}))
// ["a", "b"]

With Mapping
Array.from([1,2,3], x => x * 2)
// [2,4,6]

*/
