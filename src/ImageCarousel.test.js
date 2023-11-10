import React from 'react';
import { render } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

test('renders images in the carousel', () => {
  const { queryAllByAltText } = render(<ImageCarousel />);
  const babyClothesImages = queryAllByAltText('Baby Clothes');

  expect(babyClothesImages.length).toBe(1);
  expect(babyClothesImages[0]).toBeInTheDocument();
});
