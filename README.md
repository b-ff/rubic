Rubic gallery
========



[ENG]

jQuery plugin which adds to gallery the effect reminding a cube of Rubik

To install plug-in:

 - Add jQuery library into head section of your document. As example:

    &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"&gt;&lt;/script&gt;

 - Upload script to your project folder, or use direct link from GitHub to include script 
   into head section of your document:

		&lt;script src="jquery.rubic.js"&gt;&lt;/script&gt;

 - To initialize plug-in you need to call it for HTML-list having the following structure:

    &lt;ul id="gallery"&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="path to full image" /&gt;&lt;span&gt;Caption for this image&lt;/span&gt;&lt;/li&gt;
    &lt;/ul&gt;
    

    Running plug-in for ul#gallery:

    jQuery(document).ready(function() {
      jQuery("ul#gallery").rubic({ параметры });
    });

    Plug-in parameters:

       - itemSize   - integer, width or height of each element in pixels (default value is 150)
       - itemMargin - integer, element margin in pixels (default value is 5)
       - itemRadius - integer, border radius of elements in pixels (default value is 15)




[RUS]

jQuery плагин, добавляющий галерее эффект напоминающий кубик Рубика

Для установки плагина необходимо:

 - Добавьте в секцию head вашего документа скрипт библиотеки jQuery если вы не используете её в своём проекте.
   Пример:

    &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"&gt;&lt;/script&gt;

 - Загрузите скрипт плагина в папку для скриптов вашего проекта или используйте прямую ссылку на файл из GitHub чтобы
   добавить скрипт плагина в секцию head вашего документа. Пример:

  	&lt;script src="jquery.rubic.js"&gt;&lt;/script&gt;

 - Для работы плагина необходимо применить его к HTML-списку имеющему следующую структуру:

    &lt;ul id="gallery"&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="путь к полноразмерному изображению" /&gt;&lt;span&gt;Краткое описание изображения&lt;/span&gt;&lt;/li&gt;
    &lt;/ul&gt;
    

    Применяем плагин к списку ul#gallery:

  	jQuery(document).ready(function() {
			jQuery("ul#gallery").rubic({ параметры });
		});

    Параметры плагина:

       - itemSize   - числовое значение, длина либо ширина уменьшенного элемента в пикселях (по умполчанию 150)
       - itemMargin - числовое значение, отступ от каждого элемента в пикселях (по умолчанию 5)
       - itemRadius - числовое значение, радиус скругления углов элемента в пикселях (по умолчанию 15)