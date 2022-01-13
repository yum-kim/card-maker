import styles from './app.module.css';
import Login from './components/login/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Login authService={authService} />}
          ></Route>
          <Route path="/maker" element={<Maker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
