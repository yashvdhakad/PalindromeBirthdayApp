const userDate = document.querySelector("#userDate");
const checkBtn = document.querySelector("#checkBtn");
const outputBox = document.querySelector("#outputBox");

const reverseStr = (str) => {
  let reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
  return reversedStr;
};

const isPalidrome = (str) => {
  let reversedStr = reverseStr(str);
  return reversedStr === str;
};

const convertDateFromNumberToString = (date) => {
  if (date.day < 10) {
    date.day = "0" + date.day;
    return date.day;
  }
  if (date.month < 10) {
    date.month = "0" + date.month;
    return date.month;
  }
  return date.day + date.month + date.year;
};

let date = {
  day: "11",
  month: "1",
  year: "2022",
};
console.log(convertDateFromNumberToString(date));