// ContentSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContentCard from './ContentCard';
import './style2/ContentSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContentSection = ({ id, title, items, type }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate section on scroll
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "top center",
      },
      opacity: 1,
      y: 0,
      duration: 1
    });
  }, []);

  return (
    <section className="section" id={id} ref={sectionRef}>
      <h2 className="section-title">{title}</h2>
      <div className="content-grid">
        {items.map((item, index) => (
          <ContentCard key={index} item={item} type={type} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;