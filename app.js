const checkboxEl = document.querySelector("#feature-flag");
const textAreaEl = document.querySelector("textarea");
let autosavedata = "";
function init() {
  autosavedata = localStorage.getItem("autosave-data");
  document.querySelector("textarea").value = autosavedata;
}
init();

let timer;
let isRunning = false;

checkboxEl.addEventListener("click", function () {
  if (checkboxEl.checked) {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(storeOnLocalStorage, 1000);
    }
  } else {
    isRunning = false;
    clearInterval(timer);
  }
});

function storeOnLocalStorage() {
  autosavedata = document.querySelector("textarea").value;
  localStorage.setItem("autosave-data", autosavedata);
  console.log(autosavedata);
}
