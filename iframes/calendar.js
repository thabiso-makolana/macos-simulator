document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.getElementById('calendar-body');
    const month = "June";
    const year = 2024;

    function generateCalendar(month, year) {
        const startDay = 5;
        const daysInMonth = 30;

        let date = 1;
        let html = '';

        for (let i = 0; i < 5; i++) { // Create 5 weeks
            let row = '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startDay) {
                    row += '<td></td>';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    row += `<td${date === 3 ? ' class="today"' : ''}>${date}</td>`;
                    date++;
                }
            }
            row += '</tr>';
            html += row;
        }

        calendarBody.innerHTML = html;
    }

    generateCalendar(month, year);
});
