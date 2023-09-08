import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
