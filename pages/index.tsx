// Modules
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Classes
import { borderWhiteButton, whiteButton } from '../classes';

// Components
import Container from '../components/Container';

// Information
import {
  hobbies,
  aboutMe,
  languages,
  grades,
  technologies,
  experiences,
  contacts,
  extras,
} from '../utils/information';

export default function index() {
  return (
    <Container>
      <div className='flex flex-col md:grid grid-cols-2 gap-20'>
        <div className='flex flex-col gap-6'>
          <AboutMe />
          <Hobbies />
          <Languages />
          <Schooling />
          <CV />
        </div>
        <Technologies />
      </div>
      <Extras />
      <Experience />
      <ContactMe />
    </Container>
  );
}

function AboutMe() {
  return (
    <section>
      <h1 className='text-xl mb-1 text-gray-300' id='about-me-title'>
        About Me
      </h1>
      <p className='text-white'>{aboutMe.description}</p>
    </section>
  );
}

function Hobbies() {
  return (
    <section>
      <h1 className='text-xl mb-1 text-gray-300'>Hobbies</h1>
      <ul className='text-white list-disc pl-6'>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}

function Languages() {
  return (
    <section>
      <h1 className='text-xl mb-1 text-gray-300'>Languages</h1>
      <ul className='text-white list-disc pl-6'>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </section>
  );
}

function Schooling() {
  return (
    <section>
      <h1 className='text-xl mb-1 text-gray-300'>Schooling</h1>
      <ul className='pl-6'>
        {grades.map(({ title, description, initialDate, finishDate }) => (
          <div className='flex flex-col' key={title}>
            <li className='list-disc text-white'>{title}</li>
            <small className='text-sm text-gray-400'>{description}</small>
            <small className='text-sm text-white'>{`${initialDate} - ${finishDate}`}</small>
          </div>
        ))}
      </ul>
    </section>
  );
}

function CV() {
  return (
    <section>
      <h1 className='text-xl mb-3 text-gray-300'>CV</h1>
      <div className='flex gap-4'>
        <button className={whiteButton}>View</button>
        <button className={borderWhiteButton}>Download</button>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section>
      <h1 className={`text-xl text-gray-300 md:text-right mb-3`} id='technologies-title'>
        Technologies
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {technologies.map(({ title, icon, url }) => (
          <Link key={title} href={url}>
            <div className='rounded text-white flex flex-col bg-gray-700 hover:bg-gray-600 items-center py-4 px-6 cursor-pointer justify-center'>
              <FontAwesomeIcon icon={icon} className='text-5xl mb-1' />
              <h3 className='font-semibold text-md text-center'>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className='mt-6'>
      <h1 className='text-xl text-gray-300 mb-3'>Extras</h1>
      <div className='flex flex-wrap gap-4'>
        {extras.map(({ title, url }) => (
          <Link key={title} href={url}>
            <div className='py-2 px-4 bg-white rounded text-neutral-800 font-semibold cursor-pointer hover:bg-gray-200'>
              {title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className='mt-6'>
      <h1 className='text-xl text-gray-300 mb-3' id='experience-title'>
        Experience
      </h1>
      <div className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-4'>
        {experiences.map(({ title, description, initialDate, finishDate }) => (
          <div key={title}>
            <div className='flex flex-col rounded text-white text-center py-4 px-6 border-2 border-white cursor-pointer'>
              <h2 className='text-md font-semibold'>{title}</h2>
              <p>{description}</p>
              <small className='text-gray-400'>
                {initialDate} - {finishDate}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactMe() {
  return (
    <section className='mt-6'>
      <h1 className='text-xl text-gray-300 mb-3' id='contact-me-title'>
        Contact Me
      </h1>
      <div className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-4'>
        {contacts.map(({ title, icon, url }) => (
          <Link href={url} key={title}>
            <div className='flex flex-col rounded bg-white text-center items-center cursor-pointer py-4 px-6 text-neutral-800 hover:bg-gray-200'>
              <FontAwesomeIcon icon={icon} className='text-5xl mb-1' />
              <h2 className='text-md font-semibold'>{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
