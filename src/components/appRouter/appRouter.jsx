import React from 'react';
import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { routes } from '../../router';
import { Search } from '../search/components/Search';
import { Layout } from '../Layout/Layout';
import { Login } from '../login/Login';
import { SignUp } from '../signUp/SignUp';
import { RequireAuth } from '../../hoc/RequireAuth';

const AppRouter = () => {
  const location = useLocation();
  const match = useMatch(location.pathname);

  return (
    <TransitionGroup>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Search />
              </RequireAuth>
            }
          />

          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <RequireAuth>
                    <CSSTransition
                      in={match != null}
                      timeout={1000}
                      key={location.key}
                      classNames="page"
                    >
                      {route.element}
                    </CSSTransition>
                  </RequireAuth>
                }
              />
            );
          })}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </TransitionGroup>
  );
};

export { AppRouter };
