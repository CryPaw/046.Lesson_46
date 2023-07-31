import "./AlbumsList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h1>Список альбомів користувача</h1>
      <ul className="albums-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link className="albums-list__link" to={`/photos?albumId=${album.id}`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumsList;