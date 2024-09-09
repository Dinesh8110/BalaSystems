import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Newsletter />
      <FooterMenu />
      <ContactUs />
      <div className="footer">
        <p className="footer-text">©2024 Bala Systems</p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`contact-us ${isMobile ? 'mobile-contact-us' : ''}`}>
      <div className={`section ${isMobile ? 'mobile-section' : ''}`}>
        <h3 className="header">Address</h3>
        <p className="content">123 Main Street,</p>
        <p className="content">Springfield, IL 62701</p>
      </div>
      {!isMobile ? (
        <div className="section center-section">
          <h3 className="header">Opening Hours</h3>
          <p className="content">Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p className="content">Sat: 10:00 AM - 4:00 PM</p>
          <p className="content">Sun: Closed</p>
        </div>
      ) : (
        <div className="section right-section">
          <div className="section sub-section">
            <h3 className="header">Phone Number</h3>
            <p className="content">+1 (555) 123-4567</p>
          </div>
          <div className="section sub-section">
            <h3 className="header">Opening Hours</h3>
            <p className="content">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="content">Sat: 10:00 AM - 4:00 PM</p>
            <p className="content">Sun: Closed</p>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="section">
          <h3 className="header">Phone Number</h3>
          <p className="content">+1 (555) 123-4567</p>
        </div>
      )}
    </div>
  );
};

const Newsletter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`newsletter ${isMobile ? 'newsletter-mobile' : ''}`}>
      <div className="icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="social-icon">
            <i className={`fab fa-${link.name}`}></i>
          </a>
        ))}
      </div>
      { (
        <div className="icons">
          {paymentIcons.map((icon, index) => (
            <i key={index} className={`fab fa-${icon}`}></i>
          ))}
        </div>
      )}
    </div>
  );
};

const FooterMenu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className="footer-menu">
      <div className="section">
        <h4 className="section-title">BRAND</h4>
        {['Apple', 'Dell', 'Hp', 'Lenovo'].map((brand, index) => (
          <div 
          onClick={() => navigate("/shop/"+brand)}
          >
<HoverableText key={index} text={brand} 
          
          />
          </div>
        ))}
      </div>
      <div className="section">
        <h4 className="section-title">CATEGORIES</h4>
        {[
          {name:'Servers', link:'category/server'}, 
          {name:'Touch Models', link: 'category/touch model'},
          {name: 'Other Models',link: 'category/other model'},
          {name: 'Graphics and Gaming', link:'category/Graphics'}, 
          {name: 'Desktop Computers', link: 'category/desktop'}].map((brand, index) => (
          <div onClick={() => navigate("/shop/"+brand.link)}>
            <HoverableText key={index} text={brand.name} />
          </div>
        ))}
        
      </div>
      <div className="section">
        <h4 className="section-title">SUPPORT</h4>
        {[
          {name:'About Us', link:'shipping_policy'}, 
          {name:'FaQs', link: 'privacy_policy'},
          {name: 'Terms & Conditions',link: 'terms_and_conditions'},
          {name: 'Contact Us', link:'contact_us'}, 
          ].map((brand, index) => (
          <div onClick={() => navigate(brand.link)}>
            <HoverableText key={index} text={brand.name} />
          </div>
        ))}
     
      </div>
      <div className="section">
        <h4 className="section-title">ACCOUNT</h4>

        {[
          {name:'My Account', link:'profile'}, 
          {name:'Order History', link: 'view_orders'},
          {name: 'Wish List',link: 'cart'},
          {name: 'Newsletter', link:'contact_us'}, 
          ].map((brand, index) => (
          <div onClick={() => navigate(brand.link)}>
            <HoverableText key={index} text={brand.name} />
          </div>
        ))}

      </div>
    </div>
  );
};

const HoverableText = ({text}:{ text:string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <p
      className={`hoverable-text ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </p>
  );
};

const socialLinks = [
  { name: 'instagram', url: 'https://www.instagram.com' },
  { name: 'whatsapp', url: 'https://www.whatsapp.com' },
  { name: 'linkedin', url: 'https://www.linkedin.com' },
  { name: 'youtube', url: 'https://www.youtube.com' },
];

const paymentIcons = [
  'cc-mastercard',
  'cc-visa',
  'cc-paypal',
  'cc-amex',
  'cc-discover',
];

export default Footer;
