document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateSettlement);
    }
    
    // Add event listeners to all input fields to calculate when any value changes
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('input', calculateSettlement);
    });
});

function calculateSettlement() {
    // Get input values
    const B = parseFloat(document.getElementById('B').value) || 0;
    const LB = parseFloat(document.getElementById('LB').value) || 0;
    const DB = parseFloat(document.getElementById('DB').value) || 0;
    const N = parseFloat(document.getElementById('N').value) || 0;
    const qnet = parseFloat(document.getElementById('qnet').value) || 0;
    
    // Calculate settlement using the provided equation
    const S = -3.0687 + (1.1136 * B) + (3.1362 * LB) - (0.5651 * DB) - (0.2141 * N) + (0.0482 * qnet);
    
    // Display the result rounded to 2 decimal places
    document.getElementById('S').value = S.toFixed(2);
}