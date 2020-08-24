'use strict';

var phoneField = document.querySelector('.form__input-phone');

var phoneMask = IMask(
    phoneField, {
      mask: '+{7}(000)000-00-00'
    });
