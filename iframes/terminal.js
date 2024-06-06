document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById('output');
    const inputLine = document.getElementById('input-line');
    const commandInput = document.getElementById('command-input');
    const prompt = document.getElementById('prompt').innerText;

    const commands = {
        help: 'Available commands: help, clear, about and madlib',
        clear: '',
        about: 'This is a simple terminal simulator to run a madlib game.',
        madlib: "STARTING!\n__  __           _ _      _ _\n|  \/  |         | | |    (_) |\n| \  / | __ _  __| | |     _| |__ ____\n| |\/| |/ _` |/ _` | |    | | '_ \_  /\n| |  | | (_| | (_| | |____| | |_) / /\n|_|  |_|\__,_|\__,_|______|_|_.__/___|\n\n **opening browser**\n"
    };

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleCommand(commandInput.value);
            commandInput.value = '';
        }
    });

    function handleCommand(command) {
        const commandTrimmed = command.trim();
        let outputText = '';
        
        if (commandTrimmed in commands) {
            outputText = commands[commandTrimmed];
        } else {
            outputText = `Command not found: ${commandTrimmed}`;
        }

        if (commandTrimmed === 'clear') {
            output.innerHTML = '';
        } else {
            output.innerHTML += `${prompt} ${commandTrimmed}\n${outputText}\n`;
            if(commandTrimmed === "madlib"){
                setTimeout(() => {
                    window.parent.postMessage('chrome', '*');
                }, 3000);
            }
        }

        inputLine.scrollIntoView();
    }

    output.innerHTML = `Last login: Sun Jun 02 20:37 on console\nFor a list of available commands, type 'help'.`;
    inputLine.scrollIntoView();
});
