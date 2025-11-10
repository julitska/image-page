import ImageCard from './ImageCard';

const images = [
  {
    src: '/images/image-1.jpg',
    title: 'Busy City Life',
    description: 'Exploring the unknown',
    alt: 'Crowded urban street with traffic and dark orange hues'
  },
  {
    src: '/images/image-2.jpg',
    title: 'Quiet Wonder',
    description: 'Venice on the water',
    alt: 'A boat navigating through the canals of Venice'
  },

  {
    src: '/images/image-3.jpg',
    title: 'Sports',
    description: 'Basketball action shot',
    alt: 'Basketball player mid-air going for a slam dunk'
  },
  {
    src: '/images/image-4.jpg',
    title: 'Artistic Ideas',
    description: 'Two pencils in different colors',
    alt: 'Two colored pencils crossing each other'
  },
  {
    src: '/images/image-5.jpg',
    title: 'Abstract Photography',
    description: 'Art against grey wall',
    alt: 'A hand holding abstract painted plant'
  },
  {
    src: '/images/image-6.jpg',
    title: 'Holiday Vibes',
    description: 'Colourful holiday destination',
    alt: 'Serene lake surrounded by mountains during sunrise'
  },
  {
    src: '/images/image-7.jpg',
    title: 'Fashion',
    description: 'Bright and colorful fashion style',
    alt: 'A bath with legs sticking out wearing colorful shoes'
  },
  {
    src: '/images/image-8.jpg',
    title: 'Jeans Style',
    description: 'Folded denim jeans',
    alt: 'Stack of folded blue denim jeans'
  },
  {
    src: '/images/image-9.jpg',
    title: 'Deep Sea',
    description: 'Underwater world with jellyfish',
    alt: 'Underwater scene with jellyfish and blue hues'
  }
];

export default function ImagePage() {
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <ImageCard
          key={index}
          src={img.src}
          alt={img.title}
          title={img.title}
          description={img.description}
        />
      ))}
    </div>
  );
}