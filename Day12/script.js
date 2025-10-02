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

// Function to hide all input containers
function hideAllInputs() {
    radiusInput.parentElement.style.display = 'none';
    sideInput.parentElement.style.display = 'none';
    widthInput.parentElement.style.display = 'none';
    heightRectInput.parentElement.style.display = 'none';
    baseInput.parentElement.style.display = 'none';
    heightTriInput.parentElement.style.display = 'none';
}

// Reset everything on page load
window.addEventListener('load', function() {
    shapeSelect.value = '';    // default option
    resultText.textContent = '';
    hideAllInputs();
});

// Show relevant inputs when shape changes
shapeSelect.addEventListener('change', function() {
    const shape = shapeSelect.value;
    resultText.textContent = '';  // clear previous result
    hideAllInputs();              // hide all inputs first

    if(shape === 'circle') radiusInput.parentElement.style.display = 'block';
    else if(shape === 'square') sideInput.parentElement.style.display = 'block';
    else if(shape === 'rectangle') {
        widthInput.parentElement.style.display = 'block';
        heightRectInput.parentElement.style.display = 'block';
    }
    else if(shape === 'triangle') {
        baseInput.parentElement.style.display = 'block';
        heightTriInput.parentElement.style.display = 'block';
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
