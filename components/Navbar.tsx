// Modules
import Link from 'next/link';
import { useRouter } from 'next/router';

// Classes
import { navButton, whiteButton } from '../classes';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className='flex justify-between items-center px-6 md:px-20 py-4 text-white w-full fixed top-0 bg-neutral-800'>
      <NavTitle />
      {router.pathname === '/' && <NavList />}
    </nav>
  );
}

function NavTitle() {
  return (
    <Link href='/'>
      <h1 className='flex text-2xl tracking-wider font-semibold cursor-pointer'>
        AL
      </h1>
    </Link>
  );
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
          <a
            className='px-4 py-2 rounded text-white font-semibold hover:bg-blue-600'
            key={section.title}
            href={section.to}
          >
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
