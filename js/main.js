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

//////////////////////////////////////////////////////////////////
// [ Валидация всех форм ]

document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll(".needs-validation");

    forms.forEach(function (form) {
        var submitButton = form.querySelector("button[type='submit']");

        form.addEventListener("input", function () {
            if (form.checkValidity()) {
                submitButton.classList.remove("disabled");
            } else {
                submitButton.classList.add("disabled");
            }
        });
    });
});
