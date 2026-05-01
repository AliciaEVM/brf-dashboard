// ===== DATA =====
let count = 0;

const issues = [
  "🔧 Trasig tvättmaskin i tvättstuga",
  "💡 Belysning i trapphus fungerar inte",
  "💧 Vattenläcka i källaren",
  "🔐 Portkod behöver uppdateras",
  "🌿 Städning av innergård",
  "🚲 Cykelrum överfullt"
];

const aiInsights = [
  "Föreningens kostnader har ökat med 12% senaste året – överväg att justera avgifterna.",
  "Flera ärenden rör underhåll – planerat underhåll kan minska framtida kostnader.",
  "Energiförbrukningen är högre än snittet – energieffektivisering rekommenderas."
];


// ===== FUNKTIONER =====
function addIssue() {
  const list = document.getElementById("list");

  const randomIssue = issues[Math.floor(Math.random() * issues.length)];

  const item = document.createElement("li");
  item.textContent = randomIssue;

  list.appendChild(item);

  count++;
  document.getElementById("count").textContent = count;
}


function generateAI() {
  const text = document.getElementById("ai-text");

  const randomInsight = aiInsights[Math.floor(Math.random() * aiInsights.length)];

  text.textContent = randomInsight;
}
