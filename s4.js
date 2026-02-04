let h1Element = document.querySelector("h1");
let ulElement = document.querySelector("ul");
let toggle = false;

let intervalId = null;

function startBlinking() {
  return setInterval(() => {
    h1Element.innerHTML = "Hi";
    if (toggle) {
      h1Element.style.backgroundColor = "red";
    } else {
      h1Element.style.backgroundColor = "green";
    }
    toggle = !toggle;
  }, 100);
}

intervalId = startBlinking();

h1Element.addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

h1Element.addEventListener("mouseout", () => {
  intervalId = startBlinking();
});

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  localStorage.setItem("list", JSON.stringify(data));

  let lis = data
    .map((value) => {
      return `<li class="list-item">${value.name}</li>`;
    })
    .join("");

  ulElement.innerHTML = lis;
}

let list = localStorage.getItem("list");
if (list) {
  list = JSON.parse(list);

  let lis = list
    .map((value) => {
      return `<li class="list-item">${value.name}</li>`;
    })
    .join("");

  ulElement.innerHTML = lis;
} else {
  getData();
}
