var submit = document.querySelector("#submit");
var list = document.querySelector("#list");
var form = document.querySelector("#form");

submit.addEventListener("click", (e) => addItem(e));

const addItem = (e) => {
  e.preventDefault();

  var title = form.elements.title.value;
  if (title.length != 0) {
    var element = document.createElement("li");
    element.classList.add("list-group-item", "list-group-item-action");
    element.textContent = title;

    list.appendChild(element);

    document.querySelector("#input").value = "";
  }
};
