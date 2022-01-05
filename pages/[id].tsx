// Modules
import { useRouter } from 'next/router';

// Classes
import { sectionTitle } from '../classes';

// Components
import Container from '../components/Container';

// Information
import { projects } from '../utils/information';

export default function project() {
  //
  const router = useRouter();
  const { id } = router.query;
  const idNumber = parseInt(id as string, 10);

  return (
    <Container>
      <div className='flex flex-col md:grid grid-cols-2 gap-6 md:gap-20'>
        <div>
          <h1 className={sectionTitle}>{projects[idNumber].title}</h1>
          <p className='text-white mb-6'>
            Lorem amet reprehenderit tempor do Lorem est elit veniam irure.
            Nostrud nisi consectetur velit proident irure labore duis occaecat
            dolor ullamco ipsum elit. Nisi duis eu amet minim proident duis
            proident commodo anim exercitation ea non exercitation quis.
          </p>
          <h1 className={`${sectionTitle} mb-3`}>Technologies</h1>
          <div className='flex flex-wrap gap-4'>
            {projects[idNumber].technologies.map((tech) => (
              <div
                className='py-2 px-4 bg-white rounded text-neutral-800 font-semibold cursor-pointer hover:bg-gray-200'
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className={`${sectionTitle} md:text-right mb-3`}>Images</h1>
        </div>
      </div>
    </Container>
  );
}
