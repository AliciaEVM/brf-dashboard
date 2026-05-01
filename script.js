let count = 0;

function addIssue() {
  count++;

  const list = document.getElementById("list");
  const item = document.createElement("li");

  item.textContent = "Nytt ärende #" + count;

  list.appendChild(item);

  document.getElementById("count").textContent = count + " st";
}