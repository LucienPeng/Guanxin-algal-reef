import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Guanxin-algal-reef' element={<HomePage />} />
        <Route path='/admin-login' element={<AdminPage />} />
        <Route path='/*' element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
