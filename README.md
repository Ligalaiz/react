[![Netlify Status](https://api.netlify.com/api/v1/badges/f647edab-0c12-44e5-a614-b004a9eb41e1/deploy-status)](https://app.netlify.com/sites/ligalaiz-react-forms-ts/deploys)

## React. Forms

## Demo: **[react-forms-ts](https://ligalaiz-react-forms-ts.netlify.app/)**
## UI Design: **[stories](https://ligalaiz-react-forms-ts-stories.netlify.ap

Что должно быть сделано:

1) Создать отдельную ветку для этого задания
2) Настроить webpack. Использование create-react-app запрещено. Можно использовать любую другую тулу для сборки(vite, rollup, esbuild)
3) Добавить скрипт для prod/dev сборки(в prod должна быть минификация, source-maps и другие оптимизации)
4) Настроить eslint(airbnb или строже), prettier так, чтобы проект не собирался при наличие ошибок.
5) Создать React App которое:
    Собирает информацию через форму. Тип информации может быть любой, но форма как минимум должна иметь по одному контролу следующих типов: _input, date input, dropdown/select, checkbox, switcher._

    **Пример:**
    input - Имя, Фамилия, Zip код;
    date input - день рождения, дата доставки;
    dropdown/select - список стран, список штатов (выбрать можно только один элемент из списка)
    checkbox - поле "согласен на обработку данных", список дополнительных подарков к заказу (выбрать можно несколько из списка)
    switcher - male/female, хочу получать уведомления об акциях/ не хочу

    Все поля формы должны валидироваться. Валидацию можно вызывать сразу при вводе или при нажатии на кнопку **Submit**. Если какое-то из полей заполнено не верно, то в пределах формы должно отобразиться сообщение об ошибке.
    При нажатии на кнопку Submit все данные из формы должны отобразиться в виде карточки в списке карточек под формой, должно отобразиться сообщение, что данные успешно сохранены, а сама форма должна быть очищена.
    Если мы 5 раз заполнили и сабмитнули форму, то у нас должно быть 5 карточек в списке под формой.

Все логические части должны быть вынесены в компоненты.
Все данные должны храниться в локальном стейте компонент.
Компоненты не должны обращаться к API, не должно быть redux и других сторонних решений для state management.
**Использование каких либо библиотек с компонентами или библиотек, которые работают с формами в этом задании запрещено.**


### Оценка

Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).

1) Webpack((или vite, rollup, esbuild)), eslint, prettier - **0.5 балла**
2) Form + Cards - **14.5 баллов**


Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.
