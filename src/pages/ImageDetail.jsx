import { useLocation } from 'react-router-dom';

export default function ImageDetail() {
  const location = useLocation();
  const { src, alt } = location.state || {};

  return (
    <section className="section-image-detail">
      <div className="image-container">
        {src ? (
          <img src={src} alt={alt || 'Image'} className="image-full" />
        ) : (
          <p>Image not available</p>
        )}
      </div>
    </section>
  );
}
