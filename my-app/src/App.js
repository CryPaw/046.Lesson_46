import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import AlbumsList from "./components/AlbumsList/AlbumsList";
import PhotosList from "./components/PhotosList/PhotosList";

function App() {
  return (
    <Router>
      <div className="App">
        <Link className="App__title" to="/">
          Список користувачів
        </Link>

        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/albums" element={<AlbumsList />} />
          <Route path="/photos" element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;