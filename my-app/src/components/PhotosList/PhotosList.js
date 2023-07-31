import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function PhotosList() {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get("albumId");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h1>Фото з альбому</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotosList;