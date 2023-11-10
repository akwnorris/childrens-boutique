import React from 'react';
import { render } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

test('renders images in the carousel', () => {
  const { queryAllByAltText } = render(<ImageCarousel />);

  const babyClothesImages = queryAllByAltText('Baby Clothes Image');

  expect(babyClothesImages.length).toBe(2);
});
