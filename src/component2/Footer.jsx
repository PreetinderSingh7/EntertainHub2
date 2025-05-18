import React from 'react';
import './style2/Footer.css';

const Footer = () => {
  const footerSections = [
    {
      title: 'About Us',
      links: [
        { text: 'Our Story', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Press', url: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', url: '#' },
        { text: 'Contact Us', url: '#' },
        { text: 'FAQ', url: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', url: '#' },
        { text: 'Privacy Policy', url: '#' },
        { text: 'Cookie Policy', url: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { text: 'Facebook', url: '#', icon: 'fab fa-facebook' },
        { text: 'Twitter', url: '#', icon: 'fab fa-twitter' },
        { text: 'Instagram', url: '#', icon: 'fab fa-instagram' }
      ]
    }
  ];

  return (
    <footer>
      <div className="footer-content">
        {footerSections.map((section, index) => (
          <div className="footer-section" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url}>
                    {link.icon && <i className={link.icon}></i>} {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EntertainHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;