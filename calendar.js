// Elementos do DOM
const currentDateElement = document.getElementById("currentDate");
const calendarBody = document.getElementById("calendarBody");
const prevYearButton = document.getElementById("prevYear");
const nextYearButton = document.getElementById("nextYear");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

// Dados do calendário
let currentDate = new Date();

// Função para atualizar o calendário
function updateCalendar() {
    // Limpa o calendário
    calendarBody.innerHTML = "";

    // Obtém o primeiro dia do mês
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Obtém o último dia do mês
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Cria as células do calendário
    let day = new Date(firstDay);
    let weekRow = document.createElement("tr");
    // mbsfilho

    while (day <= lastDay) {
        if (day.getDay() === 0 && weekRow.childElementCount > 0) {
            calendarBody.appendChild(weekRow);
            weekRow = document.createElement("tr");
        }

        const cell = document.createElement("td");
        cell.textContent = day.getDate();
        weekRow.appendChild(cell);
        day.setDate(day.getDate() + 1);
    }

    if (weekRow.childElementCount > 0) {
        calendarBody.appendChild(weekRow);
    }

    // Atualiza o cabeçalho com o mês e ano atual
    currentDateElement.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
}
// Eventos dos botões de navegação
prevYearButton.addEventListener("click", () => {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    updateCalendar();
});

nextYearButton.addEventListener("click", () => {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    updateCalendar();
});

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Inicialização
updateCalendar();
