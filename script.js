// Sprawdź czy wpisane w input pasuje.
// wielkość liter nie ma znaczenia - .toUpperCase lub .toLowerCase.
// Obie metody działają na pojedyńczym elemencie typu string

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

const lowerCasePassword = passwords.map((password) => password.toLowerCase());

// Sposób 1
// const showMessage = (e) => {
//   div.textContent = "";
//   const text = e.target.value;
//   passwords.forEach((password, index) => {
//     if (password.toLowerCase() === text) {
//       div.textContent = messages[index];
//       e.target.value = "";
//     } else if (password.toUpperCase() === text) {
//       div.textContent = messages[index];
//       e.target.value = "";
//     }
//   });
// };

// Sposób 2
// const showMessage = (e) => {
//   passwords.forEach((item, i) => {
//     if (item.toLowerCase() === e.target.value.toLowerCase()) {
//       document.querySelector("div").textContent = messages[i];
//     }
//   });
// };

// Sposób 3

// passwords.forEach((password, index) => {
//   passwords[index] = password.toLowerCase();
//   //   console.log(passwords);
// });

// const showMessage = (e) => {
//   const input = e.target.value.toLowerCase();
//   passwords.forEach((password, i) => {
//     if (password === input) {
//       document.querySelector("div").textContent = messages[i];
//     }
//   });
// };

// Sposób 4, metoda MAP

const showMessage = (e) => {
  const text = e.target.value.toLowerCase();

  for (let i = 0; i < lowerCasePassword.length; i++) {
    if (text === lowerCasePassword[i]) {
      document.querySelector("div").textContent = messages[i];
    }
  }
};

input.addEventListener("input", showMessage);
