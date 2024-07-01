# Apple Mac OS Virtual Web Desktop Environment Simulator

## Overview
This project simulates an Apple Mac OS desktop environment using HTML, CSS, and JavaScript. It features interactive windows, a draggable and resizable interface, and a simulated loading screen. This project aims to replicate the user experience of a Mac OS desktop within a web browser.

![image](https://github.com/thabiso-makolana/macos-simulator/assets/165550448/0210b34a-33ec-443a-a89e-c978839ef36c)

## Features
- Simulated loading screen
- Interactive top bar with functional menu items
- Draggable and resizable windows
- Context menu for desktop interactions
- Dock with clickable icons to open various windows

## Technologies Used
- **HTML**: Structure and layout of the web desktop environment.
- **CSS**: Styling for the desktop environment, including animations and effects.
- **JavaScript**: Functionality for interactive features like window management, drag-and-drop, and context menus.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/mac-os-simulator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd mac-os-simulator
    ```
3. Open `index.html` in your preferred web browser.

## Key Web Concepts

### HTML
- **Structure and Layout**: The HTML file (`index.html`) provides the basic structure for the simulated desktop, including a top bar, desktop area, dock, and various windows. Each interactive element is defined with appropriate HTML tags and IDs for styling and functionality.
- **Loading Screen**: A loading screen is implemented using a `div` element with an image and a progress bar to simulate the boot-up process of Mac OS.
- ![image](https://github.com/thabiso-makolana/macos-simulator/assets/165550448/c90a2d95-5248-423d-b978-dddf16ba39c2)


### JavaScript
  ```
- **Event Listeners**: Used to handle user interactions, such as opening and closing windows, dragging elements, and displaying the context menu.

- **Window Management Functions**: Functions like `openWindow`, `closeWindow`, and `bringToFront` control the display and z-index of different windows.
![image](https://github.com/thabiso-makolana/macos-simulator/assets/165550448/8e8914ce-11fb-46cc-ba9b-054b7d70a998)

- **Drag-and-Drop Functionality**: Implemented to allow users to move windows around the desktop.

- **Context Menu**: Displays a custom context menu when the user right-clicks on the desktop.
![image](https://github.com/thabiso-makolana/macos-simulator/assets/165550448/1f8cf417-5185-4148-9974-a555eaf106e2)

## Usage
- Open the project in a web browser to see the simulated Mac OS environment.
- Interact with the desktop by clicking on the dock icons to open various windows.
- Drag and resize the windows as you would in a real OS.
- Right-click on the desktop to access the context menu.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please reach out to makolanathabiso@gmail.com.
---
