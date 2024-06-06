document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loadingScreen');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 3000);
        
    });
})
function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'flex';

    if(windowId=="other") centerWindow(windowElement);
    if(windowId=="terminal") leftWindow(windowElement);
    if(windowId=="chrome") rightBigWindow(windowElement);
    bringToFront(windowId);
}

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

function bringToFront(windowId) {
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => win.style.zIndex = 0);
    document.getElementById(windowId).style.zIndex = 1;
}

function centerWindow(elmnt) {
    const rect = elmnt.getBoundingClientRect();
    elmnt.style.top = `calc(50% - ${rect.height / 2}px)`;
    elmnt.style.left = `calc(50% - ${rect.width / 2}px)`;
}

function leftWindow(elmnt) {
    elmnt.style.top = `70px`;
    elmnt.style.left = `100px`;
}
function rightBigWindow(elmnt) {
    elmnt.style.top = `100px`;
    elmnt.style.right = `20px`;
}

document.querySelectorAll('.window').forEach(dragElement);

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".titlebar")) {
        elmnt.querySelector(".titlebar").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const resizable = document.querySelector('.chromeIframe');
const resizer = resizable.querySelector('.resizer');

resizer.addEventListener('mousedown', function(e) {
  e.preventDefault();

  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  resizable.style.width = e.clientX - resizable.offsetLeft + 'px';
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}

window.addEventListener('message', (event) => {
    if (event.data === 'chrome') {
        openWindow("chrome")
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const desktop = document.getElementById('desktop');
    const contextMenu = document.getElementById('contextMenu');

    desktop.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const { clientX: mouseX, clientY: mouseY } = e;
        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;
        contextMenu.style.display = 'block';
    });

    desktop.addEventListener('click', () => {
        contextMenu.style.display = 'none';
    });

    contextMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        contextMenu.style.display = 'none';
    });
});
