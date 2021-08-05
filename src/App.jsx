import styles from './app.module.css';
import Login from './components/Login'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Maker from "./components/Maker";

function App({authService, FileInput, cardRepository}) {
  return (
      <div className={styles.app}>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                      <Login authService={authService} />
                  </Route>
                  <Route path="/maker">
                      <Maker authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
