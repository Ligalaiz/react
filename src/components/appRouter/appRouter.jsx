import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { routes } from '../../router';
import { Search } from '../search/components/Search';
import { Layout } from '../Layout/Layout';

const AppRouter = () => {
  const location = useLocation();
  const match = useMatch(location.pathname);

  return (
    <TransitionGroup>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search />} />

          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <CSSTransition
                    in={match != null}
                    timeout={1000}
                    key={location.key}
                    classNames="page"
                  >
                    {route.element}
                  </CSSTransition>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </TransitionGroup>
  );
};

export { AppRouter };
