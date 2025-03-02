import React from 'react';
import { NavLink } from 'react-router';
import FooterStyle from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.footerContent}>
        <div className={FooterStyle.about}>
          <h3>Mindful Stretch</h3>
          <p>
            Mindful Stretch is dedicated to promoting wellness through yoga
            and mindful practices. Join us to nurture your body and mind.
          </p>
        </div>
        <div className={FooterStyle.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/yog-page">Yogasana</NavLink>
            </li>
            <li>
              <NavLink to="/community/social-community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className={FooterStyle.social}>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={FooterStyle.bottomBar}>
        <p>
          © {new Date().getFullYear()} Mindful Stretch. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
