let students = [
  "Aarav Sharma",
  "Vivaan Patel",
  "Aditya Singh",
  "Arjun Verma",
  "Sai Kumar",
  "Rohan Mehta",
  "Kunal Shah",
  "Yash Desai",
  "Atharv Joshi",
  "Omkar Kulkarni",
  "Raj Malhotra",
  "Aniket Patil",
  "Sarthak Gupta",
  "Dev Mishra",
  "Nikhil Agarwal",
  "Tanmay Choudhary",
  "Harsh Vardhan",
  "Mohit Jain",
  "Pranav Nair",
  "Shreyas Iyer",
  "Neha Sharma",
  "Aditi Patil",
  "Sneha Reddy",
  "Pooja Verma",
  "Kavya Nair",
  "Isha Shah",
  "Riya Mehta",
  "Ananya Gupta",
  "Tanvi Kulkarni",
  "Shruti Deshmukh",
  "Muskan Jain",
  "Simran Kaur",
  "Priya Singh",
  "Nandini Joshi",
  "Mansi Agarwal",
  "Diksha Mishra",
  "Vaishnavi Patil",
  "Rutuja Pawar",
  "Sakshi Yadav",
  "Megha Choudhary",
  "Bhavesh Patel",
  "Darshan Solanki",
  "Tushar Pawar",
  "Akash Yadav",
  "Manish Tiwari",
  "Chirag Shah",
  "Rahul Soni",
  "Deepak Maurya",
  "Gaurav Bansal",
  "Sameer Khan",
];

let ulElement = document.querySelector("ul");
let inputElement = document.querySelector("input");

function debounce(cb, timer) {
  let timerId = null;
  return function (event) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      cb(event);
    }, timer);
  };
}
inputElement.addEventListener(
  "keyup",
  debounce((event) => {
    if (inputElement.value.length === 0) {
      ulElement.innerHTML = "";
      return false;
    }
    ulElement.innerHTML = students
      .filter((value) =>
        value.toLowerCase().includes(inputElement.value.toLowerCase()),
      )
      .map((value) => {
        return `<li>${value}</li>`;
      })
      .join("");

    console.log(
      students
        .filter((value) =>
          value.toLowerCase().includes(inputElement.value.toLowerCase()),
        )
        .map((value) => {
          return `<li>${value}</li>`;
        })
        .join(""),
    );
  }, 500),
);

function throttling(cb, timer) {
  let isThrottle = false;

  return function (event) {
    if (isThrottle === false) {
      cb(event);
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, timer);
    }
  };
}

window.addEventListener(
  "scroll",
  throttling(() => {
    console.log("scroll");
  }, 1000),
);
