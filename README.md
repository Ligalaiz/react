## React. SSR

## Demo: **[react-ssr](https://react-ssr-by-ligalaiz.netlify.app/)**

В данном задании нужно из обычного React App, которое вы сделали в одном из предыдущих заданий, сделать Isomorphic React App.

Перед выполнением обязательно ознакомиться с понятием isomorphic app https://www.acuriousanimal.com/blog/20160810/universal-applications

Что должно быть сделано:

1) Создать отдельную ветку для этого задания из ветки с заданием `React. Redux` или `React. Testing`.
2) Добавить сервер, который умеет обрабатывать front-end написанный на React.
3) Сервер умеет возвращать обрабатанный front-end предварительно обернув его в некую структуру HTML.
4) Обновить front-end, чтобы отрисовывать код на сервере из пункта 2-3 (обратите внимание, что при ssr код отрисовывается на сервере только при первой загрузке, все остальные spa активности(такие как routing, обновление данных на странице, обновление элементов и т.д.) выполняются настороне клиента)

Нельзя использовать Next.js, Gatsby или любое другое готовое решение для ssr.

### Оценка

Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).

1) Webpack, eslint, prettier, scripts - **0.5 балла**
2) 2 + 3 + 4 - **14.5 баллов**
