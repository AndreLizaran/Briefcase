// Modules
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

// Classes
import { borderWhiteButton } from '../classes';

// Components
import Container from '../components/Container';

// Information
import { projects } from '../utils/information';

export default function Project() {
  //
  const router = useRouter();
  const { id } = router.query;
  const { title, technologies, images, links } = projects[Number(id) | 0];
  const [showImageViewer, setShowImageViewer] = useState(false);

  if (typeof id === 'string' && id) {
    return (
      <>
        <Container>
          <div className='flex flex-col lg:grid grid-cols-2 gap-6 lg:gap-20'>
            <div>
              <h1 className='text-xl mb-1 text-gray-300'>{title}</h1>
              <p className='text-white mb-6'>
                Lorem amet reprehenderit tempor do Lorem est elit veniam irure.
                Nostrud nisi consectetur velit proident irure labore duis
                occaecat dolor ullamco ipsum elit. Nisi duis eu amet minim
                proident duis proident commodo anim exercitation ea non
                exercitation quis.
              </p>
              <h1 className='text-xl mb-3 text-gray-300'>Technologies</h1>
              <div className='flex flex-wrap gap-4 mb-4'>
                {technologies.map((tech) => (
                  <div
                    className='py-2 px-4 bg-white rounded text-neutral-800 font-semibold cursor-pointer hover:bg-gray-200'
                    key={tech}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <h1 className='text-xl mb-3 text-gray-300'>Links</h1>
              {links.repository && (
                <Link href={links.repository}>
                  <button className={borderWhiteButton}>Repository</button>
                </Link>
              )}
            </div>
            <div className='flex flex-col'>
              <h1 className='text-xl mb-1 text-gray-300 lg:text-right mb-3'>
                Images
              </h1>
              <img
                src={images[0]}
                className='rounded border border-white cursor-pointer'
                onClick={() => setShowImageViewer(true)}
              />
              <small className='lg:text-right text-white mt-2'>
                Click to see more
              </small>
            </div>
          </div>
        </Container>
        {showImageViewer && (
          <ImageViewer
            src={images}
            currentIndex={0}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={() => setShowImageViewer(false)}
          />
        )}
      </>
    );
  } else {
    return <></>;
  }
}
