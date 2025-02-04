import { Routes, Route } from "react-router";
import { GameView, HomeView } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<HomeView />} />
      <Route path="/:gameId" element={<GameView />} />
    </Routes>
  );
}

export default App;
