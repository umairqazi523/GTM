const selectedElements = [];

// Function to highlight and select an interactive element
function selectElement(element, elementType) {
    element.classList.add('selected');
    selectedElements.push({
        type: elementType,
        label: element.innerText
    });

    // Simulate sending an event to GTM (mocked with console.log)
    console.log(`Event sent to GTM: Type - ${elementType}, Label - ${element.innerText}`);

    updateSelectionLog();
}

// Function to unselect an interactive element
function unselectElement(element, elementType) {
    element.classList.remove('selected');
    const index = selectedElements.findIndex((item) => item.type === elementType && item.label === element.innerText);
    if (index !== -1) {
        selectedElements.splice(index, 1);
    }

    updateSelectionLog();
}

// Function to update the dashboard with selected elements
function updateSelectionLog() {
    const selectedElementsList = document.getElementById('selectedElementsList');
    selectedElementsList.innerHTML = '';
    const selectedElementsCount = {};

    selectedElements.forEach((item) => {
        if (!selectedElementsCount[item.label]) {
            selectedElementsCount[item.label] = 1;
        } else {
            selectedElementsCount[item.label]++;
        }
    });

    for (const [label, count] of Object.entries(selectedElementsCount)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${label} (${count} interactions)`;
        selectedElementsList.appendChild(listItem);
    }
}

// Function to toggle selection mode
function toggleSelectionMode() {
    if (document.body.classList.contains('selection-mode')) {
        document.body.classList.remove('selection-mode');
        removeSelectionHighlight();
    } else {
        document.body.classList.add('selection-mode');
    }
}

// Function to remove selection highlight from all elements
function removeSelectionHighlight() {
    const selectedElements = document.querySelectorAll('.selected');
    selectedElements.forEach((element) => {
        element.classList.remove('selected');
    });
}

// Event listeners to handle element selection, unselection, and mode toggle
const elements = document.querySelectorAll('button, a, select');
elements.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (document.body.classList.contains('selection-mode')) {
            if (element.classList.contains('selected')) {
                unselectElement(element, e.target.tagName.toLowerCase());
            } else {
                selectElement(element, e.target.tagName.toLowerCase());
            }
        }
    });
});

document.getElementById('buttonToggleMode').addEventListener('click', toggleSelectionMode);


const dashboardToggler = document.querySelector('.selection-log__toggler');
const dashboard = document.querySelector('.selection-log');
dashboardToggler.addEventListener('click', function (e) {
    if (dashboardToggler.getAttribute('aria-expanded') == 'false') {
        dashboardToggler.setAttribute('aria-expanded', "true")
    } else {
        dashboardToggler.setAttribute('aria-expanded', "false")
    }
    document.body.classList.toggle('dashboard-is-opened');
    dashboard.classList.toggle('show');
});