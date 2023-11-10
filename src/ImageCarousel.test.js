import React from 'react';
import { render } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

test('renders images in the carousel', () => {
  const { queryAllByAltText } = render(<ImageCarousel />);

  const babyClothesImages = queryAllByAltText('Baby Clothes Image');
  const toysImages = queryAllByAltText('Toys Image');
  const christmasImages = queryAllByAltText('Christmas Image');

  expect(
    babyClothesImages.length > 0 || toysImages.length > 0 || christmasImages.length > 0
  ).toBe(true);
});
