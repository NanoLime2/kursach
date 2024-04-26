document.addEventListener("click", function(page_button) { //Функция, отвечающая за кнопки на сайте
  if (page_button.target.id=="n_b_1"){//Выполнение команд на 1 кнопку
   document.getElementById("n_f_p").style.display = 'block';  //Показываем блок
   document.getElementById("n_s_p").style.display = 'none'; //Прячем блок
   document.getElementById("n_t_p").style.display = 'none'; //Прячем блок
   document.getElementById("n_b_1").style.background = 'yellow'; //Меняем цвет активной кнопки
   document.getElementById("n_b_2").style.background = 'none'; //Обнуляем цвета
   document.getElementById("n_b_3").style.background = 'none'; //Обнуляем цвета
   //document.getElementById("n_p").style.top = '-100px'; //Поднимаем
   //document.getElementById("news_b_1").style.height = '1500px'; //Меняем высоту у 1 картинки с фоном
   //document.getElementById("news_b_2").style.height = '1600px'; //Меняем высоту у 2 картинки с фоном
   //document.getElementById("footer_news").style.top = '3100px'; //Меняем высоту у 2 картинки с фоном
   document.getElementById("n_f_p").style.transition = 'all 4s ease'; //Транзишн
   const first_page = document.getElementById('n_f_p'); //Закидываем в переменную
   first_page.style.opacity = 0; // Устанавливаем начальное значение прозрачности элемента
   setTimeout(() => { // Задержка перед началом анимации
      const interval_first_page = setInterval(() => {// Интервал анимации
        first_page.style.opacity = parseFloat(first_page.style.opacity) + 0.1; // Увеличиваем прозрачность элемента на 0.1
        if (first_page.style.opacity >= 1) { // Если прозрачность достигла максимального значения, останавливаем анимацию
          clearInterval(interval_first_page);
          window.scrollTo(0, 0); //Перенос наверх сайта
        }
      }, 10);
    }, 10);
  } else if (page_button.target.id=="n_b_2"){//Выполнение команд на 2 кнопку
   document.getElementById("n_f_p").style.display = 'none'; //Прячем блок
   document.getElementById("n_s_p").style.display = 'block'; //Показываем блок
   document.getElementById("n_t_p").style.display = 'none'; //Прячем блок
   document.getElementById("n_b_1").style.background = 'none'; //Обнуляем цвета
   document.getElementById("n_b_2").style.background = 'yellow'; //Меняем цвет активной кнопки
   document.getElementById("n_b_3").style.background = 'none'; //Обнуляем цвета
   //document.getElementById("n_p").style.top = '-100px'; //Поднимаем
   //document.getElementById("news_b_1").style.height = '1500px'; //Меняем высоту у 1 картинки с фоном
   //document.getElementById("news_b_2").style.height = '1600px'; //Меняем высоту у 2 картинки с фоном
   //document.getElementById("footer_news").style.top = '3100px'; //Поднимаем
   document.getElementById("n_s_p").style.transition = 'all 4s ease'; //Транзишн
   const second_page = document.getElementById('n_s_p'); //Закидываем в переменную
   second_page.style.opacity = 0; // Устанавливаем начальное значение прозрачности элемента
   setTimeout(() => { // Задержка перед началом анимации
      const interval_second_page = setInterval(() => {// Интервал анимации
        second_page.style.opacity = parseFloat(second_page.style.opacity) + 0.1; // Увеличиваем прозрачность элемента на 0.1
        if (second_page.style.opacity >= 1) { // Если прозрачность достигла максимального значения, останавливаем анимацию
          clearInterval(interval_second_page);
          window.scrollTo(0, 0); //Перенос наверх сайта
        }
      }, 10);
    }, 10);
  } else if (page_button.target.id=="n_b_3"){//Выполнение команд на 3 кнопку
   document.getElementById("n_f_p").style.display = 'none'; //Прячем блок
   document.getElementById("n_s_p").style.display = 'none'; //Прячем блок
   document.getElementById("n_t_p").style.display = 'block'; //Показываем блок
   document.getElementById("n_b_1").style.background = 'none'; //Обнуляем цвета
   document.getElementById("n_b_2").style.background = 'none'; //Обнуляем цвета
   document.getElementById("n_b_3").style.background = 'yellow'; //Меняем цвет активной кнопки
   document.getElementById("n_t_p").style.transition = 'all 4s ease'; //Транзишн
   //document.getElementById("n_p").style.top = '-120px'; //Поднимаем
   //document.getElementById("news_b_1").style.height = '0px'; //Меняем высоту у 1 картинки с фоном
   //document.getElementById("news_b_2").style.height = '0'; //Меняем высоту у 2 картинки с фоном
   //document.getElementById("footer_news").style.top = '1550px'; //Поднимаем
   const third_page = document.getElementById('n_t_p'); //Закидываем в переменную
   third_page.style.opacity = 0; // Устанавливаем начальное значение прозрачности элемента
   setTimeout(() => { // Задержка перед началом анимации
      const interval_third_page = setInterval(() => {// Интервал анимации
        third_page.style.opacity = parseFloat(third_page.style.opacity) + 0.1; // Увеличиваем прозрачность элемента на 0.1
        if (third_page.style.opacity >= 1) { // Если прозрачность достигла максимального значения, останавливаем анимацию
          clearInterval(interval_third_page);
          window.scrollTo(0, 0); //Перенос наверх сайта
        }
      }, 10);
    }, 10);
  } else if (page_button.target.id=="select_class"){//Выполнение команд на 4 кнопку
   document.getElementById("img_button").style.display = 'none'; //Прячем блок
   document.getElementById("first_button").style.display = 'none'; //Прячем блок
   document.getElementById("second_button").style.display = 'block'; //Показываем блок
  } else if (page_button.target.id=="button_nine_class"){//Выполнение команд на 5 кнопку
   document.getElementById("button_nine_class").style.background = 'linear-gradient(225deg, rgb(40, 193, 158), rgb(159, 230, 232), rgb(10, 122, 112))'; //Меняем background
   document.getElementById("button_ten_class").style.background = 'none'; //Обнуляем его
   document.getElementById("button_eleven_class").style.background = 'none'; //Обнуляем его
   document.getElementById("img_button").style.display = 'block'; //Показываем блок
   document.getElementById("img_button").style.top = '146%'; //Поднимаем
   document.getElementById("img_button").style.left = '73%'; //Сдвигаем влево
   document.getElementById("programa_table_nine_class").style.display = 'block'; //Показываем блок
   document.getElementById("programa_table_nine_class").style.transition = 'all 2s ease'; //Транзишн
   //document.getElementById("background_programa_1").style.height = '1500px'; //Меняем высоту
   //document.getElementById("footer_programa").style.top = '1400px'; //Поднимаем
   const programa_table_nine_class = document.getElementById('programa_table_nine_class'); //Закидываем в переменную
   programa_table_nine_class.style.opacity = 0; // Устанавливаем начальное значение прозрачности элемента
   setTimeout(() => { // Задержка перед началом анимации
      const interval_programa_table_nine_class = setInterval(() => {// Интервал анимации
        programa_table_nine_class.style.opacity = parseFloat(programa_table_nine_class.style.opacity) + 0.1; // Увеличиваем прозрачность элемента на 0.1
        if (programa_table_nine_class.style.opacity >= 1) { // Если прозрачность достигла максимального значения, останавливаем анимацию
          clearInterval(interval_programa_table_nine_class);
        }
      }, 10);
    }, 10);
    document.getElementById("programa_table_ten_class").style.display = 'none'; //Прячем блок
    document.getElementById("programa_table_eleven_class").style.display = 'none'; //Прячем блок
  } else if (page_button.target.id=="button_ten_class"){//Выполнение команд на 6 кнопку
   document.getElementById("button_nine_class").style.background = 'none'; //Обнуляем background
   document.getElementById("button_ten_class").style.background = 'linear-gradient(225deg, rgb(40, 193, 158), rgb(159, 230, 232), rgb(10, 122, 112))'; //Ставим background
   document.getElementById("button_eleven_class").style.background = 'none'; //Обнуляем background
   document.getElementById("img_button").style.display = 'block'; //Показывем блок
   document.getElementById("img_button").style.top = '146%'; //Поднимаем
   document.getElementById("img_button").style.left = '128%'; //Сдвигаем влево
   document.getElementById("programa_table_nine_class").style.display = 'none'; //Прячем блок
   document.getElementById("programa_table_ten_class").style.display = 'block'; //Показывем блок
   document.getElementById("programa_table_ten_class").style.transition = 'all 2s ease'; //Транзишн
   //document.getElementById("background_programa_1").style.height = '1700px'; //Меняем высоту
   //document.getElementById("footer_programa").style.top = '1600px'; //Поднимаем
   const programa_table_ten_class = document.getElementById('programa_table_ten_class'); //Закидываем в переменную
   programa_table_ten_class.style.opacity = 0; // Устанавливаем начальное значение прозрачности элемента
   setTimeout(() => { // Задержка перед началом анимации
      const interval_programa_table_ten_class = setInterval(() => {// Интервал анимации
        programa_table_ten_class.style.opacity = parseFloat(programa_table_ten_class.style.opacity) + 0.1; // Увеличиваем прозрачность элемента на 0.1
        if (programa_table_ten_class.style.opacity >= 1) { // Если прозрачность достигла максимального значения, останавливаем анимацию
          clearInterval(interval_programa_table_ten_class);
        }
      }, 10);
    }, 10);
    document.getElementById("programa_table_eleven_class").style.display = 'none';
  } else if (page_button.target.id=="button_eleven_class"){//Выполнение команд на 7 кнопку
   document.getElementById("button_nine_class").style.background = 'none'; //Обнуляем фон
   document.getElementById("button_ten_class").style.background = 'none'; //Обнуляем фон
   document.getElementById("button_eleven_class").style.background = 'linear-gradient(225deg, rgb(40, 193, 158), rgb(159, 230, 232), rgb(10, 122, 112))'; //Ставим фон
   document.getElementById("img_button").style.display = 'block'; //Показываем блок
   document.getElementById("img_button").style.top = '146%'; //Поднимаем наверх
   document.getElementById("img_button").style.left = '183%'; //Сдвиг влево
   document.getElementById("programa_table_nine_class").style.display = 'none'; //Прячем блок
   document.getElementById("programa_table_ten_class").style.display = 'none'; //Прячем блок
   document.getElementById("programa_table_eleven_class").style.display = 'block'; //Показываем блок
   document.getElementById("programa_table_eleven_class").style.transition = 'all 2s ease'; //Транзишн
   //document.getElementById("background_programa_1").style.height = '1600px'; //Меняем высоту
   //document.getElementById("footer_programa").style.top = '1500px'; //Поднмаем
   const programa_table_eleven_class = document.getElementById('programa_table_eleven_class'); //Закидываем в переменную
   programa_table_eleven_class.style.opacity = 0; // Устанавливаем начальное значение прозрачности элемента
   setTimeout(() => { // Задержка перед началом анимации
      const interval_programa_table_eleven_class = setInterval(() => {// Интервал анимации
        programa_table_eleven_class.style.opacity = parseFloat(programa_table_eleven_class.style.opacity) + 0.1; // Увеличиваем прозрачность элемента на 0.1
        if (programa_table_eleven_class.style.opacity >= 1) { // Если прозрачность достигла максимального значения, останавливаем анимацию
          clearInterval(interval_programa_table_eleven_class);
        }
      }, 10);
    }, 10);
  } else if (page_button.target.id=="tablet_more_information_button"){//Выполнение команд на 8 кнопку
   document.getElementById("tablet_more_information").style.display = 'none'; //Прячем блок
   document.getElementById("tablet_many_information").style.display = 'block'; //Показываем блок
   document.getElementById("tablet_many_information_button").style.display = 'block'; //Показываем блок
   } else if (page_button.target.id=="tablet_many_information_button"){//Выполнение команд на 9 кнопку
   document.getElementById("tablet_more_information").style.display = 'block'; //Показываем блок
   document.getElementById("tablet_many_information").style.display = 'none'; //Прячем блок
   document.getElementById("tablet_many_information_button").style.display = 'none'; //Прячем блок
   }
});

//Индекс слайда по умолчанию
var slideIndex = 0;
showSlides(slideIndex);
//Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}
//Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);
}
//Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Основная функция слайдера
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function openMenu() {
    let menu = document.getElementById('n_b_3');
    menu.style.background = 'yellow';
}
