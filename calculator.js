let mode = 'degree'; 


function setMode(newMode) {
    mode = newMode;
    document.getElementById('mode-indicator-display').innerText = mode === 'degree' ? 'Deg' : 'Rad';
}


function convertToRadians(value) {
    return mode === 'radian' ? value * (Math.PI / 180) : value;
}


function deleteLastChar() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}


function appendTrig(func) {
    document.getElementById('display').value += func + '(';
}
function clearDisplay() {
    document.getElementById('display').value = '';
}


function appendValue(value) {
    if (value === 'π') {
        document.getElementById('display').value += 'π'; // Display π symbol
    } else if (value === 'e') {
        document.getElementById('display').value += 'e'; // Display e symbol
    }
    else{
        document.getElementById('display').value += value;

    }
}


function calculateResult() {
    
    
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/π/g, Math.PI).replace(/e/g, Math.E);
        expression = expression.replace(/sin\(/g, mode === 'degree' ? `Math.sin(Math.PI/180*` : 'Math.sin(')
                               .replace(/cos\(/g, mode === 'degree' ? `Math.cos(Math.PI/180*` : 'Math.cos(')
                               .replace(/tan\(/g, mode === 'degree' ? `Math.tan(Math.PI/180*` : 'Math.tan(');
        expression = expression.replace(/ln\(/g, 'Math.log10(200.9092813)+Math.log10(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/%/g, '/100');
        
        let result = eval(expression); 
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function toggleMode() {
    if (mode === 'degree') {
        setMode('radian');
    } else {
        setMode('degree');
    }
}
function factorial() {
    let n = parseInt(document.getElementById('display').value);
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    document.getElementById('display').value = result;
}
