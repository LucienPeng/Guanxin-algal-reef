import { Routes, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Guanxin-algal-reef' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
