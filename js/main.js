//////////////////////////////////////////////////////////////////
// [ PHONE MASK ]

var maskPhone = document.querySelectorAll('.maskPhone')
var maskDate = document.querySelectorAll('.maskDate')

maskPhone.forEach(function (el) {
    IMask(el, {
        mask: '+{7}(000)000-00-00'
    });
});

maskDate.forEach(function (el) {
    IMask(el, {
        mask: Date,
        min: new Date(1900, 0, 1),
        lazy: false
    });
});

//////////////////////////////////////////////////////////////////
// [ Отложенная задержка модального окна ]

window.addEventListener("load", function () {
    var loginModalElement = document.getElementById('login_modal');
    if (loginModalElement) {
        setTimeout(function () {
            var myModal = new bootstrap.Modal(loginModalElement);
            myModal.show();
        }, 5000); // Задержка в миллисекундах
    }
});

//////////////////////////////////////////////////////////////////
// [ Кнопка "Назад" ]

function goBack() {
    window.history.back();
}

// Получаем ссылки на поля формы и кнопку отправки
var registrationName = document.getElementById('registrationName');
var registrationEmail = document.getElementById('registrationEmail');
var registrationPass = document.getElementById('registrationPass');
var registrationSubmitBtn = document.getElementById('registrationSubmitBtn');

// Слушаем событие ввода в поля формы
registrationName.addEventListener('input', checkForm);
registrationEmail.addEventListener('input', checkForm);
registrationPass.addEventListener('input', checkForm);

// Функция для проверки, заполнены ли обязательные поля формы
function checkForm() {
    if (registrationName.checkValidity() && registrationEmail.checkValidity() && registrationPass.checkValidity()) {
        registrationSubmitBtn.classList.remove('disabled');
    } else {
        registrationSubmitBtn.classList.add('disabled');
    }
}