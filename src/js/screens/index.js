document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("kids")) {
        const kids = [
            {id: 1, name: 'Акулич Александра'},
            {id: 2, name: 'Алексеева Александра'},
            {id: 3, name: 'Бардиловский Мирослав'},
            {id: 4, name: 'Бондарчик Полина'},
            {id: 5, name: 'Бородкин Михаил'},
            {id: 6, name: 'Борозна Александра'},
            {id: 7, name: 'Бурак Денис'},
            {id: 8, name: 'Галимская Виктория'},
            {id: 9, name: 'Гончарова Ангелина'}, 
            {id: 10, name: 'Долинский Иван'},
            {id: 11, name: 'Заболотец Маргарита'},
            {id: 12, name: 'Зенченко Вера '},
            {id: 13, name: 'Ивашкевич Алексей'},
            {id: 14, name: 'Казак Евгения'},
            {id: 15, name: 'Касперович Максим'},
            {id: 16, name: 'Кийков Андрей '}, 
            {id: 17, name: 'Кононок Илья'},
            {id: 18, name: 'Кочеревская Карина'},
            {id: 19, name: 'Матюшонок Кирилл'},
            {id: 20, name: 'Мацукевич Виктория'},
            {id: 21, name: 'Мацукевич Евгения'},
            {id: 22, name: 'Метельская София'},
            {id: 23, name: 'Минаев Иван'},
            {id: 24, name: 'Новик Юлия'},
            {id: 25, name: 'Полугодков Тимофей'},
            {id: 26, name: 'Федосенко Никита'},
            {id: 27, name: 'Филиппов Егор'},
            {id: 28, name: 'Черник Лидия'},
            {id: 29, name: 'Шпаглов Матвей'},
            {id: 30, name: 'Ямшанова Ульяна'}
        ]
        
        sessionStorage.setItem("kids", JSON.stringify(kids))
    }

    if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify([]))
    }
})