// Modules
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Classes
import { borderWhiteButton, sectionTitle } from '../classes';

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
  projects,
} from '../utils/information';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function index() {
  return (
    <Container>
      <div className='flex flex-col md:grid grid-cols-2 gap-6 md:gap-20'>
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
      <Projects />
      <Experience />
      <ContactMe />
      <div className='flex w-full justify-center'>
        <button
          className='px-6 py-4 mt-10 rounded-2xl bg-gray-700 hover:bg-gray-600 text-white'
          onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </Container>
  );
}

function AboutMe() {
  return (
    <section>
      <h1 className={sectionTitle} id='about-me-title'>
        About Me
      </h1>
      <p className='text-white'>{aboutMe.description}</p>
    </section>
  );
}

function Hobbies() {
  return (
    <section>
      <h1 className={sectionTitle}>Hobbies</h1>
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
      <h1 className={sectionTitle}>Languages</h1>
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
      <h1 className={sectionTitle}>Schooling</h1>
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
      <h1 className={sectionTitle}>CV</h1>
      <div className='flex gap-4'>
        <Link href='/cv/CV2.pdf'>
          <button className={borderWhiteButton}>View</button>
        </Link>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section>
      <h1
        className={`${sectionTitle} md:text-right mb-3`}
        id='technologies-title'
      >
        Technologies
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
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
      <h1 className={`${sectionTitle} mb-3`}>Extras</h1>
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

function Projects() {
  return (
    <section className='mt-6'>
      <h1 className={`${sectionTitle} mb-3`} id='projects-title'>
        Projects
      </h1>
      <div className='flex flex-col sm:grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {projects.map(({ icon, title, description }, index: number) => (
          <Link href={`/${index}`} key={title}>
            <div className='rounded border-2 border-white flex flex-col bg-neutral-800 cursor-pointer'>
              <div className='py-6 flex justify-center'>
                <FontAwesomeIcon icon={icon} size='3x' className='text-white' />
              </div>
              <div className='py-4 px-6 bg-white flex flex-col text-center'>
                <h3 className='font-semibold'>{title}</h3>
                <small className='text-neutral-800'>{description}</small>
              </div>
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
      <h1 className={`${sectionTitle} mb-3`} id='experience-title'>
        Experience
      </h1>
      <div className='flex flex-col sm:grid grid-cols-2 xl:grid-cols-3 gap-4'>
        {experiences.map(
          ({ title, description, initialDate, finishDate, technologies }) => (
            <div key={title}>
              <div className='flex flex-col rounded text-white text-center py-4 px-6 border-2 border-white cursor-pointer'>
                <h2 className='text-md font-semibold'>{title}</h2>
                <p>{description}</p>
                <small className='text-gray-400 mb-3'>
                  {initialDate} - {finishDate}
                </small>
                <div className='flex flex-wrap gap-4 justify-center'>
                  {technologies.map((tech) => (
                    <div
                      className='py-2 px-4 bg-white rounded text-neutral-800 font-semibold cursor-pointer hover:bg-gray-200'
                      key={tech}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function ContactMe() {
  return (
    <section className='mt-6'>
      <h1 className={`${sectionTitle} mb-3`} id='contact-me-title'>
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
