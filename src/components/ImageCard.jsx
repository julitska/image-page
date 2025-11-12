import { Link } from "react-router-dom";
import "./ImageCard.css";

export default function ImageCard({ id, src, alt, title, description }) {
  return (
    <div className="image-card">
      <Link
        to={`/image/${id}`}
        state={{ src, alt, title, description }}>
        <img
          src={src}
          alt={alt || "Image"}
          className="image"
          loading="lazy"
        />
      </Link>
      {title && <h3 className="title">{title}</h3>}
      {description && <p className="description">{description}</p>}
    </div>
  );
}
