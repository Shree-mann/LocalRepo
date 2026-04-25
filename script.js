// Function to toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("bg-slate-900");
    body.classList.toggle("text-white");
    
    // Save preference to local storage so it stays on refresh
    const isDark = body.classList.contains("bg-slate-900");
    localStorage.setItem("dark-mode", isDark);
}

// Check for saved preference on page load
window.onload = () => {
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("bg-slate-900", "text-white");
    }
};