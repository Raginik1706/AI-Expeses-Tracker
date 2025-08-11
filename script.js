function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "linear-gradient(to right, #1e3c72, #2a5298)";
        document.body.style.color = "black";
    }
});

// Expense Tracker
let expenses = [];

function addExpense() {
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;

    if (!desc || !amount) {
        alert("Please enter all details!");
        return;
    }

    let category = categorizeExpense(desc);
    expenses.push({ desc, amount, category });

    updateExpenseList();
}

// AI-Based Categorization (Basic Logic)
function categorizeExpense(desc) {
    desc = desc.toLowerCase();
    if (desc.includes("food") || desc.includes("restaurant")) return "🍕 Food";
    if (desc.includes("travel") || desc.includes("bus") || desc.includes("ticket")) return "🚗 Travel";
    if (desc.includes("shopping") || desc.includes("clothes")) return "🛍️ Shopping";
    return "📌 Other";
}

function updateExpenseList() {
    let list = document.getElementById("expense-list");
    list.innerHTML = "";
    expenses.forEach(exp => {
        list.innerHTML += `<p>${exp.desc} - $${exp.amount} (${exp.category})</p>`;
    });
}
