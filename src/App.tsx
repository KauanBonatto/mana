import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:gameId" element={<Game />} />
    </Routes>
  )
}

export default App
