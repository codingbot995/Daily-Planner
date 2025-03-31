// Get references to the form and table elements
const dailyPlannerForm = document.getElementById('daily-planner-form');
const registerTable = document.getElementById('register-table');
const submitButton = document.getElementById('submit-button');

// Function to get form data
function getFormData(form) {
    const formData = {};
    const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type === 'checkbox') {
            formData[element.name] = element.checked;
        } else if (element.type === 'number' || element.type === 'select-one') {
            formData[element.name] = element.value;
        }
        // Add a condition to handle the dropdowns
        else if (element.tagName === 'SELECT') {
          formData[element.id] = element.value;
        }
    }
    return formData;
}

// Function to update the register table
function updateRegisterTable(date, data) {
    const headerRow = registerTable.querySelector('thead tr');
    let dateColumnIndex = -1;

    // Check if the date column already exists
    for (let i = 1; i < headerRow.cells.length; i++) {
        if (headerRow.cells[i].textContent === date) {
            dateColumnIndex = i;
            break;
        }
    }

    // If the date column doesn't exist, add it
    if (dateColumnIndex === -1) {
        const newHeaderCell = document.createElement('th');
        newHeaderCell.textContent = date;
        headerRow.appendChild(newHeaderCell);
        dateColumnIndex = headerRow.cells.length - 1;
    }

    // Update the table cells with the form data
    const happyScoreStartRow = registerTable.querySelector('tbody tr:nth-child(1)');
    const showerRow = registerTable.querySelector('tbody tr:nth-child(2)');
    const sleepRow = registerTable.querySelector('tbody tr:nth-child(3)');
    const makeBedRow = registerTable.querySelector('tbody tr:nth-child(4)');
    const medsRow = registerTable.querySelector('tbody tr:nth-child(5)');
    const breakfastRow = registerTable.querySelector('tbody tr:nth-child(6)');
    const cleanKitchenRow = registerTable.querySelector('tbody tr:nth-child(7)');
    const rubbishOutRow = registerTable.querySelector('tbody tr:nth-child(8)');
    const walkingRow = registerTable.querySelector('tbody tr:nth-child(9)');
    const sketchingRow = registerTable.querySelector('tbody tr:nth-child(10)');
    const crosswordsRow = registerTable.querySelector('tbody tr:nth-child(11)');
    const friendsSocialRow = registerTable.querySelector('tbody tr:nth-child(12)');
    const cookEatDinnerRow = registerTable.querySelector('tbody tr:nth-child(13)');
    const healthyDietRow = registerTable.querySelector('tbody tr:nth-child(14)');
    const beersRow = registerTable.querySelector('tbody tr:nth-child(15)');
    const folkiesRow = registerTable.querySelector('tbody tr:nth-child(16)');
    const wineFreeRow = registerTable.querySelector('tbody tr:nth-child(17)');
    const cigarettesRow = registerTable.querySelector('tbody tr:nth-child(18)');
    const choofRow = registerTable.querySelector('tbody tr:nth-child(19)');
    const happyScoreEndRow = registerTable.querySelector('tbody tr:nth-child(20)');


    // Ensure cells exist before updating them
    while (happyScoreStartRow.cells.length <= dateColumnIndex) {
        happyScoreStartRow.insertCell();
        showerRow.insertCell();
        sleepRow.insertCell();
        makeBedRow.insertCell();
        medsRow.insertCell();
        breakfastRow.insertCell();
        cleanKitchenRow.insertCell();
        rubbishOutRow.insertCell();
        walkingRow.insertCell();
        sketchingRow.insertCell();
        crosswordsRow.insertCell();
        friendsSocialRow.insertCell();
        cookEatDinnerRow.insertCell();
        healthyDietRow.insertCell();
        beersRow.insertCell();
        folkiesRow.insertCell();
        wineFreeRow.insertCell();
        cigarettesRow.insertCell();
        choofRow.insertCell();
        happyScoreEndRow.insertCell();
    }
    happyScoreStartRow.cells[dateColumnIndex].textContent = data['happy-score-start'];
    showerRow.cells[dateColumnIndex].textContent = data['shower'] ? '☑' : '';
    sleepRow.cells[dateColumnIndex].textContent = data['sleep'] ? '☑' : '';
    makeBedRow.cells[dateColumnIndex].textContent = data['make-bed'] ? '☑' : '';
    medsRow.cells[dateColumnIndex].textContent = data['meds'] ? '☑' : '';
    breakfastRow.cells[dateColumnIndex].textContent = data['breakfast'] ? '☑' : '';
    cleanKitchenRow.cells[dateColumnIndex].textContent = data['clean-kitchen'] ? '☑': '';
    rubbishOutRow.cells[dateColumnIndex].textContent = data['rubbish-out']? '☑' : '';
    walkingRow.cells[dateColumnIndex].textContent = data['walking'] ? '☑' : '';
    sketchingRow.cells[dateColumnIndex].textContent = data['sketching'] ? '☑' : '';
    crosswordsRow.cells[dateColumnIndex].textContent = data['crosswords'] ? '☑' : '';
    friendsSocialRow.cells[dateColumnIndex].textContent = data['friends-social'];
    cookEatDinnerRow.cells[dateColumnIndex].textContent = data['cook-eat-dinner'] ? '☑' : '';
    healthyDietRow.cells[dateColumnIndex].textContent = data['healthy-diet'];
    beersRow.cells[dateColumnIndex].textContent = data['beers'];
    folkiesRow.cells[dateColumnIndex].textContent = data['folkies'];
    wineFreeRow.cells[dateColumnIndex].textContent = data['wine-free']? '☑' : '';
    cigarettesRow.cells[dateColumnIndex].textContent = data['cigarettes'];
    choofRow.cells[dateColumnIndex].textContent = data['choof'];
    happyScoreEndRow.cells[dateColumnIndex].textContent = data['happy-score-end'];
}

// Event listener for the submit button
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = getFormData(dailyPlannerForm);
    const currentDate = new Date().toLocaleDateString('en-GB'); // Get current date (DD/MM/YYYY)
    updateRegisterTable(currentDate, formData);

     // Reset form fields, but keep the values
    dailyPlannerForm.reset();
    //Manually set the dropdowns
    document.getElementById('happy-score-start').value = formData['happy-score-start'];
    document.getElementById('healthy-diet').value = formData['healthy-diet'];
    document.getElementById('happy-score-end').value = formData['happy-score-end'];

});