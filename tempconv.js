// Get elements from the DOM
const inputValue = document.getElementById('inputValue');
const inputUnit = document.getElementById('inputUnit');
const outputValue = document.getElementById('outputValue');
const outputUnit = document.getElementById('outputUnit');
const convertButton = document.getElementById('convertButton');

// Conversion function
function convertTemperature() {
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
        outputValue.textContent = 'Please enter a valid number';
        return;
    }

    let result;

    switch (inputUnit.value) {
        case 'celsius':
            switch (outputUnit.value) {
                case 'celsius':
                    result = value;
                    break;
                case 'fahrenheit':
                    result = (value * 9/5) + 32;
                    break;
                case 'kelvin':
                    result = value + 273.15;
                    break;
            }
            break;
        case 'fahrenheit':
            switch (outputUnit.value) {
                case 'celsius':
                    result = (value - 32) * 5/9;
                    break;
                case 'fahrenheit':
                    result = value;
                    break;
                case 'kelvin':
                    result = (value - 32) * 5/9 + 273.15;
                    break;
            }
            break;
        case 'kelvin':
            switch (outputUnit.value) {
                case 'celsius':
                    result = value - 273.15;
                    break;
                case 'fahrenheit':
                    result = (value - 273.15) * 9/5 + 32;
                    break;
                case 'kelvin':
                    result = value;
                    break;
            }
            break;
    }

    outputValue.textContent = result.toFixed(2);
}

// Add click event listener to the Convert button
convertButton.addEventListener('click', convertTemperature);
