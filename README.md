# String Calculator TDD Kata

## 📌 Project Overview
This project is a **String Calculator** implemented using **Test-Driven Development (TDD)**. The calculator takes a string of comma-separated numbers and returns their sum while handling various edge cases, including:

- An empty string should return `0`.
- A single number should return itself.
- Multiple numbers should be summed up.
- Newline (`\n`) as a valid delimiter.
- Custom delimiters using the format: `//[delimiter]\n[numbers]`.
- Throwing an error when negative numbers are encountered.

The project follows **TDD principles** using **Jest** as the testing framework.

## 📁 Project Structure
```
string-calculator/
│── __tests__/               # Contains test files
│   ├── stringCalculator.test.js
│── src/                     # Contains source code
│   ├── stringCalculator.js
│── package.json             # Project dependencies and scripts
│── jest.config.js (optional) # Jest configuration file
│── README.md                # Documentation
```

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

To check, run:
```sh
node -v   # Should return a valid version
npm -v    # Should return a valid version
```

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/ritesh-2124/Incubyte-TDD-Assessment.git
cd string-calculator
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run Tests
To execute Jest test cases, run:
```sh
npm test
```

or run with Jest directly:
```sh
npx jest --verbose
```

If tests are not detected, ensure they are inside `__tests__/` and try:
```sh
npx jest --clearCache
npm test
```

## 🛠 Implementation Details

### **1️⃣ Function: `add(numbers: string): number`**
The `add` function accepts a string and returns the sum of the numbers.

#### **Handling Different Cases**
| Input                  | Output | Explanation |
|------------------------|--------|-------------|
| `""`                  | `0`    | Empty input |
| `"1"`                 | `1`    | Single number |
| `"1,2"`               | `3`    | Sum of numbers |
| `"1\n2,3"`           | `6`    | Supports newlines |
| `"//;\n1;2"`         | `3`    | Custom delimiter `;` |
| `"-1,2"`             | Error  | Negative numbers not allowed |

---

## 📜 Code Implementation
### **1️⃣ `src/stringCalculator.js`**
```js
function add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /,|\n/;
    
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }
    
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    
    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
```

---

### **2️⃣ `__tests__/stringCalculator.test.js`**
```js
const add = require("../src/stringCalculator");

describe("String Calculator", () => {
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });
    
    test("should return the number itself when only one number is provided", () => {
        expect(add("1")).toBe(1);
    });
    
    test("should return sum of two numbers", () => {
        expect(add("1,2")).toBe(3);
    });
    
    test("should handle new lines between numbers", () => {
        expect(add("1\n2,3")).toBe(6);
    });
    
    test("should support custom delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
    });
    
    test("should throw an error when negative numbers are encountered", () => {
        expect(() => add("-1,2")).toThrow("Negative numbers not allowed: -1");
    });
});
```

---

## 📌 Additional Commands
### Run Jest in Watch Mode
```sh
npm test -- --watch
```

### Run Coverage Report
```sh
npx jest --coverage
```

### Run Single Test File
```sh
npx jest __tests__/stringCalculator.test.js
```

---

## 🛠 Troubleshooting
| Issue | Solution |
|--------|----------|
| Jest not detecting tests | Ensure your test file is in `__tests__/` and named `*.test.js` or `*.spec.js` |
| Tests fail unexpectedly | Run `npx jest --clearCache && npm test` |
| Jest not installed | Run `npm install jest --save-dev` |

---

## 🚀 Author
**Ritesh Yadav**

Feel free to reach out for any suggestions or improvements!

