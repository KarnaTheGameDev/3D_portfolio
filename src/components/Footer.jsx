import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          &copy; {new Date().getFullYear()} <strong>Suman Raj</strong>. All
          rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) =>
            // Internal routes go through Link; external profiles need a real
            // anchor so the URL isn't resolved against the current path.
            link.link.startsWith("http") ? (
              <a
                key={link.name}
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.name}
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </a>
            ) : (
              <Link key={link.name} to={link.link} aria-label={link.name}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
