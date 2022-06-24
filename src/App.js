import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
import PostPage from './containers/PostPage';
import AuthContext from './components/Admin/LoginAuthContext';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './components/Hooks';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setLocalStorage = useLocalStorage('isLoggedIn', isLoggedIn);

  useEffect(() => {
    setLocalStorage.setItem();
    setIsLoggedIn(setLocalStorage.getItem());
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoggedIn: setIsLoggedIn,
      }}
    >
      <Routes>
        <Route path='/Guanxin-algal-reef' element={<HomePage />} />
        <Route path='/admin-login' element={<AdminPage />} />
        <Route path='/admin-post' element={<PostPage />} />
        <Route path='/*' element={<h1>Page not found</h1>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
