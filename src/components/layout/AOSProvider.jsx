'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 50, // Offset (in px) from the original trigger point
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
