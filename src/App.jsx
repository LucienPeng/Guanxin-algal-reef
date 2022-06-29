import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
import AuthContext from './components/Admin/LoginAuthContext';
import PostPage from './containers/PostPage';
import { useState, useEffect } from 'react';
import { useLocalStorage, useFetchDataFirebase } from './components/Hooks';
import { DeleteNews } from './components/Admin/PostNews/DeletePostNews';
import { AddNews } from './components/Admin/PostNews/AddPostNews';
import { Activities } from './components/Admin/Activities/Activites';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuth, setIsAuth] = useState(isLoggedIn);
  const localStorage = useLocalStorage();

  useEffect(() => {
    const loginstatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginstatus === null ? false : loginstatus);
    setIsAuth(loginstatus === null ? false : loginstatus);
  }, [isLoggedIn, localStorage]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoggedIn: setIsLoggedIn,
      }}
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
        {isAuth && (
          <>
            <Route path='/admin/post' element={<PostPage />}>
              <Route path='delete' element={<DeleteNews />} />
              <Route path='add' element={<AddNews />} />
            </Route>
            <Route path='/admin/activites'>
              <Route path='manage' element={<Activities />} />
              <Route path='add' element={<Activities />} />
            </Route>
            <Route
              path='/admin/*'
              element={<Navigate to={'/admin'} replace={true} />}
            />
          </>
        )}
        <Route path='/*' element={<h1>Page not found</h1>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
