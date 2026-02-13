/**
 * 💌 Indian Postcard Writer - String Advanced
 *
 * Dadi ji ko digital postcard likhna hai. Template literals se message banana,
 * addresses check karna, formatting karna — string advanced methods se
 * postcards likh!
 *
 * Methods to explore: template literals (`${}`), .startsWith(),
 *   .endsWith(), .padStart(), .padEnd(), .match()
 *
 * Functions:
 *
 *   1. writePostcard(sender, receiver, message)
 *      - Template literal se formatted postcard banao:
 *        "Priy {receiver},\n\n{message}\n\nAapka/Aapki,\n{sender}"
 *      - Agar koi bhi param string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: writePostcard("Guddu", "Dadi ji", "Hum theek hain")
 *                 => "Priy Dadi ji,\n\nHum theek hain\n\nAapka/Aapki,\nGuddu"
 *
 *   2. isValidPincode(code)
 *      - Indian pincodes: 6 digits, "0" se start nahi hota
 *      - .startsWith("0") se check karo ki "0" se start nahi ho raha
 *      - .length === 6 check karo
 *      - Har character digit hona chahiye (use /^\d+$/ regex test or check each char)
 *      - Agar code string nahi hai, return false
 *      - Example: isValidPincode("400001") => true
 *      - Example: isValidPincode("012345") => false
 *
 *   3. formatPostcardField(label, value, width)
 *      - label.padEnd(width) + ": " + value — for aligned fields
 *      - Wait, let me simplify: return label.padEnd(12) + ": " + value
 *      - Agar width provided, use that instead of 12
 *      - Agar label ya value string nahi hai, return ""
 *      - Example: formatPostcardField("From", "Guddu") => "From        : Guddu"
 *      - Example: formatPostcardField("To", "Dadi ji", 8) => "To      : Dadi ji"
 *
 *   4. isFromState(address, stateCode)
 *      - .endsWith() se check karo ki address kisi state code se end hota hai
 *      - Agar address ya stateCode string nahi hai, return false
 *      - Example: isFromState("Guddu, Lucknow, UP", "UP") => true
 *      - Example: isFromState("Priya, Mumbai, MH", "UP") => false
 *
 *   5. countVowels(message)
 *      - .match(/[aeiouAEIOU]/g) se saare vowels dhundho
 *      - Return: count (match result ki length, ya 0 agar null hai)
 *      - Agar message string nahi hai, return 0
 *      - Example: countVowels("Namaste India") => 6
 *
 * @example
 *   writePostcard("Guddu", "Dadi ji", "Hum theek hain")
 *   isValidPincode("400001")   // => true
 *   countVowels("Namaste")     // => 3
 */
export function writePostcard(sender, receiver, message) {
  // Your code here
  if (
    typeof sender !== "string" ||
    typeof receiver !== "string" ||
    typeof message !== "string"
  )
    return "";

  sender = sender.trim();
  receiver = receiver.trim();
  message = message.trim();

  if (sender.length === 0 || receiver.length === 0 || message.length === 0)
    return "";
  else return `Priy ${receiver},\n\n${message}\n\nAapka/Aapki,\n${sender}`;
}

export function isValidPincode(code) {
  // Your code here
  if(typeof code !== "string" || code === "") return false;
  if(code.startsWith("0") || code.length !== 6) return false;
  const pin = code.match(/^\d+$/);
  return pin !== null;
}

export function formatPostcardField(label, value, width) {
  // Your code here
  if(typeof label !== "string" || typeof value !== "string") return "";
  return label.padEnd(width ? width : 12) + ": " + value;
}

export function isFromState(address, stateCode) {
  // Your code here
  if(typeof address !== "string" || typeof stateCode !== "string") return false;
  return address.endsWith(stateCode);
}

export function countVowels(message) {
  // Your code here
  if(typeof message !== "string") return 0;
  const vowel = message.match(/[aeiouAEIOU]/g)
  return vowel ? vowel.length : 0;
}

/*

1️⃣ Template Literals ${}
📌 Definition

Backticks ` ` allow string interpolation and multi-line strings.

📌 Example
const name = "KJ";
const role = "JS Warrior";

const intro = `Hello, I am ${name}, the ${role}!`;
console.log(intro);

Why Better Than + ?

Instead of:

"Hello " + name + "!"


Cleaner and readable.

Hidden Superpower

You can execute expressions:

`2 + 2 = ${2 + 2}` // "2 + 2 = 4"

🧠 Complexity

Time: O(n) (string creation)

Space: O(n)

2️⃣ .startsWith()
📌 Definition

Checks if string starts with a specific substring.

"paanShop".startsWith("paan"); // true

With position parameter:
"paanShop".startsWith("Shop", 4); // true

Case Sensitive ⚠️
"Hello".startsWith("he"); // false

🧠 Complexity

Time: O(m) → m = length of substring

Space: O(1)

3️⃣ .endsWith()
📌 Definition

Checks if string ends with a substring.

"invoice.pdf".endsWith(".pdf"); // true

With length parameter:
"paanShop".endsWith("paan", 4); // true

🧠 Complexity

Time: O(m)

Space: O(1)

4️⃣ .padStart()
📌 Definition

Pads string from start until it reaches desired length.

"5".padStart(3, "0"); 
// "005"


Very common in:

Invoice numbers

OTP formatting

Time formatting

"9".padStart(2, "0"); // "09"


If string already longer than target length → no change.

🧠 Complexity

Time: O(n)

Space: O(n) (new string created)

5️⃣ .padEnd()

Same as padStart but from end.

"KJ".padEnd(5, "*"); 
// "KJ***"


Useful for:

Table formatting

Console alignment

🧠 Complexity

Time: O(n)

Space: O(n)

6️⃣ .match()

🔥 Now we enter regex territory.

📌 Definition

Returns result of matching a string against a regular expression.

const str = "Order 123 placed";
str.match(/\d+/);
// ["123"]

With Global Flag:
"abc123xyz456".match(/\d+/g);
// ["123", "456"]


Without g flag:

returns first match + metadata

With g:

returns array of matches

If no match:

"hello".match(/\d+/); // null


⚠️ Always check for null before accessing result.

🧠 Complexity

Depends on regex.
Worst case: O(n²) (complex patterns)
Simple pattern: ~O(n)

🧠 Summary Table
Method	Purpose	Returns	Mutates?
${}	Interpolation	String	❌
startsWith	Check prefix	Boolean	❌
endsWith	Check suffix	Boolean	❌
padStart	Add padding start	String	❌
padEnd	Add padding end	String	❌
match	Regex match	Array / null	❌

*/
