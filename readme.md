# Interactive Element Tracking and GTM Event Simulation

## Overview

This project is a simplified tool for selecting and tracking interactions on a mock webpage. It allows users to select interactive elements and simulate events sent to a mock Google Tag Manager (GTM) endpoint.

## Features

- Three buttons with different labels.
- Two links.
- An embedded video.
- A dropdown menu (Selectbox) with at least three options.

## Visual Interaction Selector

- Users can enter "selection mode."
- In selection mode, hovering over interactive elements highlights them.
- Clicking on an interactive element marks it as "selected for tracking" with a visual indicator.

## Event Simulation

- Simulates an event being sent to GTM every time a selected element is interacted with.
- Mocks the GTM endpoint and logs events to the console.

## Approach

1. **Interactive Element Selection**: We use JavaScript to enable users to select interactive elements. When an element is clicked, it is marked as selected for tracking. Elements are selected based on their type (e.g., button, link) and label.

2. **Event Simulation**: We simulate event tracking by logging information to the console. This is a simplified mock of the GTM integration. Each event includes the element type, label, and the number of interactions.

3. **Dashboard**: We display a dashboard on the side of the webpage, listing all selected elements and their interaction counts.

4. **Interaction Count Handling**: To handle interaction counts for selected elements, we use an array of objects to store the selected elements, their types, labels, and interaction counts.

## Challenges Faced

1. **Handling New and Existing Selections**: One challenge was to correctly handle elements that were already selected. We had to ensure that the interaction count increments for existing selections and initializes to 1 for new selections.

2. **Complex Element Comparison**: Initially, I encountered issues with finding selected elements when comparing complex objects. The solution involved iterating through the array and checking for matches based on type and label.

3. **Clear and Effective User Interface**: This project provides a basic demonstration of functionality. In a real-world scenario, a more user-friendly and polished interface would be needed.

## Future Enhancements

1. Integration with a Real GTM Endpoint: In a production environment, this system would be integrated with Google Tag Manager or other analytics tools.

2. Improved User Interface: A more user-friendly and intuitive interface for selecting elements and viewing interactions.

3. Data Persistence: Storing selected elements and interactions in a database for future reference and analysis.

## Installation

- Clone this repository.
- Open the `index.html` file in a web browser.

## Usage

1. Click the "Toggle Selection Mode" button to enter selection mode.
2. Hover over interactive elements to highlight them.
3. Click on an element to select it for tracking.
4. View the selected elements and their interaction counts in the dashboard.
