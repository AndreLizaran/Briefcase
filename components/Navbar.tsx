// Classes
import { navButton, whiteButton } from '../classes';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-6 md:px-20 py-4 text-white w-full fixed top-0 bg-neutral-800'>
      <NavTitle />
      <NavList />
    </nav>
  );
}

function NavTitle() {
  return <h1 className='flex text-2xl tracking-wider font-semibold'>AL</h1>;
}

const navSections = [
  { title: 'About me', to: '#about-me-title' },
  { title: 'Technologies', to: '#technologies-title' },
  { title: 'Experience', to: '#experience-title' },
];

function NavList() {
  return (
    <div className='flex gap-6 items-center'>
      <ul className='hidden md:flex text-md font-semibold gap-6'>
        {navSections.map((section) => (
          <a className={navButton} key={section.title} href={section.to}>
            {section.title}
          </a>
        ))}
      </ul>
      <a className={whiteButton} href='#contact-me-title'>
        Contact me
      </a>
    </div>
  );
}
