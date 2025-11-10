import { useLocation } from 'react-router-dom';

export default function ImageDetail() {
  const location = useLocation();
  const { src, alt, title, description } = location.state || {};

  return (
    <div className="image-detail">
      {src ? (
        <img src={src} alt={alt || 'Image'} className="full-image" />
      ) : (
        <p>Image not available</p>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
