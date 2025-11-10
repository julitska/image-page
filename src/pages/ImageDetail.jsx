import { useParams } from 'react-router-dom';

export default function ImageDetail() {
  const { id } = useParams();
  return (
    <div className="image-detail">
      <h3>Image #{id}</h3>
      <img src={`/images/${id}.jpg`} alt={`Image ${id}`} />
    </div>
  );
}