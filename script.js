function calculateAge() {
    // Get user input
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Get today's date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are zero-based
    const currentDay = today.getDate();

    // Calculate age
    let age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
}
