const shapeSelect = document.getElementById('shape');
const calculateBtn = document.getElementById('calculateBtn');
const resultText = document.getElementById('resultText');
const PI = 3.14159;

// Individual inputs
const radiusInput = document.getElementById('radius');
const sideInput = document.getElementById('side');
const widthInput = document.getElementById('width');
const heightRectInput = document.getElementById('heightRect');
const baseInput = document.getElementById('base');
const heightTriInput = document.getElementById('heightTri');

// Function to hide all inputs
function hideAllInputs() {
    radiusInput.style.display = 'none';
    sideInput.style.display = 'none';
    widthInput.style.display = 'none';
    heightRectInput.style.display = 'none';
    baseInput.style.display = 'none';
    heightTriInput.style.display = 'none';
}

// Reset everything on page load
window.addEventListener('load', function() {
    shapeSelect.value = '';
    resultText.textContent = '';
    hideAllInputs();
});

// Show relevant inputs when shape changes
shapeSelect.addEventListener('change', function() {
    const shape = shapeSelect.value;
    resultText.textContent = '';  // clear previous result
    hideAllInputs();              // hide all inputs first

    if(shape === 'circle') radiusInput.style.display = 'inline-block';
    else if(shape === 'square') sideInput.style.display = 'inline-block';
    else if(shape === 'rectangle') {
        widthInput.style.display = 'inline-block';
        heightRectInput.style.display = 'inline-block';
    }
    else if(shape === 'triangle') {
        baseInput.style.display = 'inline-block';
        heightTriInput.style.display = 'inline-block';
    }
});

// Calculate area and clear inputs
calculateBtn.addEventListener('click', function() {
    const shape = shapeSelect.value;
    let area = 0;

    if(shape === 'circle') {
        const radius = radiusInput.value;
        area = PI * radius * radius;
        radiusInput.value = '';
    } 
    else if(shape === 'square') {
        const side = sideInput.value;
        area = side * side;
        sideInput.value = '';
    } 
    else if(shape === 'rectangle') {
        const width = widthInput.value;
        const height = heightRectInput.value;
        area = width * height;
        widthInput.value = '';
        heightRectInput.value = '';
    } 
    else if(shape === 'triangle') {
        const base = baseInput.value;
        const height = heightTriInput.value;
        area = (base * height) / 2;
        baseInput.value = '';
        heightTriInput.value = '';
    }

    // Display result
    if(area > 0) resultText.textContent = `The area of the ${shape} is: ${area}`;
    else resultText.textContent = 'Please enter valid numbers!';
});
