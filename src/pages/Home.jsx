import React from 'react';
import { Hero } from '../components/Hero';
import { BrandPromise } from '../components/BrandPromise';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { SustainabilityValues } from '../components/SustainabilityValues';
import { CategorySection } from '../components/CategorySection';
import { BrandStory } from '../components/BrandStory';
import { EditorialMosaic } from '../components/EditorialMosaic';
import { Newsletter } from '../components/Newsletter';

export const Home = () => {
  return (
    <main className="earth-home-page" id="main-content">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Promise Section */}
      <BrandPromise />

      {/* 3. Featured Collection Section */}
      <FeaturedCollection />

      {/* 4. Sustainability Values */}
      <SustainabilityValues />

      {/* 5. Shop by Category */}
      <CategorySection />

      {/* 6. Brand Story Editorial Banner */}
      <BrandStory />

      {/* 7. Image Mosaic Gallery */}
      <EditorialMosaic />

      {/* 8. Newsletter */}
      <Newsletter />
    </main>
  );
};
