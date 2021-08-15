import { Route, Switch, useLocation } from 'react-router-dom';
import { routes } from '../../router';

const AppRouter = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      {routes.map(({ path, Component, exact }, idx) => (
        <Route path={path} exact={exact} key={idx}>
          <Component />
        </Route>
      ))}
    </Switch>
  );
};

export default AppRouter;
