!function(){"use strict";const t=t=>{const s=t.target.previousElementSibling.textContent;let n=JSON.parse(sessionStorage.getItem("tasks"));n=n.filter((t=>t.id!==Number(s))),sessionStorage.setItem("tasks",JSON.stringify(n)),t.target.parentElement.classList.add("task--out"),setTimeout(e,300)},e=()=>{const e=document.querySelector(".tasks__box"),s=JSON.parse(sessionStorage.getItem("tasks"));0===s.length?e.innerHTML='<p class="task__empty">Здесь пока пусто! Добавьте несколько задач</p>':(e.innerHTML="",s.forEach((t=>{e.innerHTML+=`\n            <article class="task">\n                <div class="task__title-box">\n                    <h3 class="task__title">Задание</h3>\n                    <p class="task__value">${t.value}</p>\n                </div>\n                <span class="hidden">${t.id}</span>\n                <button class="task__button">Удалить задачу</button>\n            </article>\n            `})));const n=document.querySelectorAll(".task__button");n&&n.forEach((e=>{e.addEventListener("click",t)}))},s=t=>{t.preventDefault();const s=t.target.previousElementSibling,n=JSON.parse(sessionStorage.getItem("tasks"));n.push({value:s.value,id:Date.now()}),sessionStorage.setItem("tasks",JSON.stringify(n)),s.value="",e()};document.addEventListener("DOMContentLoaded",(()=>{if(!sessionStorage.getItem("kids")){console.log(sessionStorage.getItem("kids"));const t=["Акулич Александра","Алексеева Александра","Бардиловский Мирослав","Бондарчик Полина","Бородкин Михаил","Борозна Александра","Бурак Денис","Галимская Виктория","Гончарова Ангелина","Долинский Иван","Заболотец Маргарита","Зенченко Вера ","Ивашкевич Алексей","Казак Евгения","Касперович Максим","Кийков Андрей ","Кононок Илья","Кочеревская Карина","Матюшонок Кирилл","Мацукевич Виктория","Мацукевич Евгения","Метельская София","Минаев Иван","Новик Юлия","Полугодков Тимофей","Федосенко Никита","Филиппов Егор","Черник Лидия","Шпаглов Матвей","Ямшанова Ульяна"];sessionStorage.setItem("kids",JSON.stringify(t))}sessionStorage.getItem("tasks")||sessionStorage.setItem("tasks",JSON.stringify([])),e(),document.querySelector(".tasks__button").addEventListener("click",s)}))}();