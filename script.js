// 🌟 Part 1: Variables, Data Types, Conditionals
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    result.textContent = "You're an adult!";
  } else {
    result.textContent = "You're a minor.";
  }
}

// ❤️ Part 2: Functions
function calculateTotal(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function showTotal() {
  const numbers = [10, 20, 30];
  const total = calculateTotal(numbers);
  document.getElementById("totalResult").textContent = `Total: ${total}`;
}

function toggleMessage() {
  const text = document.getElementById("toggleText");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

// 🔁 Part 3: Loops
function listItems() {
  const items = ["Apple", "Banana", "Cherry"];
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Clear previous items

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function startCountdown() {
  let count = 5;
  const display = document.getElementById("countdownDisplay");
  display.textContent = "";

  const interval = setInterval(() => {
    display.textContent = `Countdown: ${count}`;
    count--;
    if (count < 0) {
      clearInterval(interval);
      display.textContent = "Done!";
    }
  }, 1000);
}

// 🌐 Part 4: DOM Manipulation
function changeHeading() {
  document.querySelector("h1").textContent = "JavaScript DOM Mastery!";
}

function addNewElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added dynamically.";
  document.body.appendChild(newPara);
}

function toggleClass() {
  const text = document.getElementById("domText");
  text.classList.toggle("highlight");
}
// Function to calculate the sum of two numbers
function calculateSum() {
    // Get values from input fields
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    // Process the inputs (convert to numbers and add them)
    let sum = Number(number1) + Number(number2);

    // Display the result in the paragraph element
    document.getElementById("sumResult").innerHTML = "The sum is: " + sum;
}