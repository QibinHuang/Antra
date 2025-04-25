const form = document.getElementById("goal-form");
const goalsContainer = document.getElementById("goals-container");

const BASE_URL = "http://localhost:3000/goals";

// Fetch goals on load
window.addEventListener("DOMContentLoaded", loadGoals);

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const repetitions = document.getElementById("repetitions").value;

  const newGoal = { description, category, repetitions, achieved: false };

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newGoal)
  });

  const createdGoal = await res.json();
  renderGoal(createdGoal);
  form.reset();
});

// Load and display goals
async function loadGoals() {
  const res = await fetch(BASE_URL);
  const goals = await res.json();
  goals.forEach(renderGoal);
}

function renderGoal(goal) {
  const div = document.createElement("div");
  div.className = "goal";
  if (goal.achieved) div.classList.add("completed");

  div.innerHTML = `
    <p>${goal.description} - <strong>${goal.category}</strong> (${goal.repetitions})</p>
    <button class="achieve-btn">${goal.achieved ? "Achieved" : "Mark as Achieved"}</button>
  `;

  const button = div.querySelector("button");
  button.addEventListener("click", async () => {
    const updatedGoal = { ...goal, achieved: true };

    await fetch(`${BASE_URL}/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ achieved: true })
    });

    div.classList.add("completed");
    button.textContent = "Achieved";
  });

  goalsContainer.appendChild(div);
}
