// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShortenerPage from './pages/ShortenerPage';

// import RedirectHandler from './pages/RedirectHandler';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ShortenerPage />} />
        
//         <Route path="/:shortcode" element={<RedirectHandler />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';

import RedirectHandler from './pages/RedirectHandler';
import LoginPage from './pages/LoginPage';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {user ? (
          <>
            <Route path="/" element={<ShortenerPage />} />
            
            <Route path="/:shortcode" element={<RedirectHandler />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
