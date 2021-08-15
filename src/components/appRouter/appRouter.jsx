import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { routes } from '../../router';

const AppRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <Switch location={location}>
        {routes.map(({ path, Component, exact }, idx) => (
          <Route path={path} exact={exact} key={idx}>
            {({ match }) => (
              <CSSTransition
                timeout={1000}
                classNames="page"
                in={match !== null}
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </Switch>
    </TransitionGroup>
  );
};

export default AppRouter;
