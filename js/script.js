let ans = document.getElementById("result");
let button = document.querySelectorAll("button");
let string = "";
let list = Array.from(button);
list.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      ans.value = string + " =";
      localStorage.setItem("ans", string);
    } else if (e.target.innerHTML === "AC") {
      string = "";
      ans.value = string;
    } else if (e.target.innerHTML === "CE") {
      string = string.substring(0, string.length - 1);
      ans.value = string;
    } else if (e.target.innerHTML === "prv") {
      if (localStorage.getItem("ans") !== null) {
        string = localStorage.getItem("ans");
        ans.value = string;
      } else {
        string = "0";
        ans.value = string;
      }
    } else {
      string += e.target.innerHTML;
      ans.value = string;
    }
  });
});
