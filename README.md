[![Netlify Status](https://api.netlify.com/api/v1/badges/ba8259c7-247b-4d69-8668-a5623091a798/deploy-status)](https://app.netlify.com/sites/ligalaiz-react-components-ts/deploys)
## React. Components

## Demo: **[react-components-ts](https://ligalaiz-react-components-ts.netlify.app/)**
## UI Design: **[stories](https://ligalaiz-react-components-ts-stories.netlify.app/)**

Что должно быть сделано:

1) Создать отдельную ветку для этого задания
2) Настроить webpack. Использование create-react-app запрещено. Можно использовать любую другую тулу для сборки(vite, rollup, esbuild)
3) Добавить скрипт для prod/dev сборки(в prod должна быть минификация, source-maps и другие оптимизации)
4) Настроить eslint(airbnb или строже), prettier так, чтобы проект не собирался при наличие ошибок.
5) Создать пустой React App и отрисовать следующее на главной странице:
  - Search Bar.
  (примеры: https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png, https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg)
  - Cards. Чем больше деталей на карточке, тем лучше.
  (примеры: https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg, https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg, https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg).

Все логические части должны быть вынесены в отдельные компоненты.
Компоненты не должны содержать никакой логики, не должно быть запросов к API и роутинга. Просто dumb components.

### Оценка

Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).

1) Webpack(или vite, rollup, esbuild) + scripts - **4 балла**
2) eslint, prettier - **2 балла**
3) React App + компоненты - **9 баллов**

Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.
