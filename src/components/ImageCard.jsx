import './ImageCard.css';

export default function ImageCard({ src, alt, title, description }) {
  return (
    <div className="image-card">
      <img src={src} alt={alt || 'Image'} className="image" />
      {title && <h3 className="title">{title}</h3>}
      {description && <p className="description">{description}</p>}
    </div>
  );
}