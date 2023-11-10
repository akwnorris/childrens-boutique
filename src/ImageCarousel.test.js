import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageCarousel from './ImageCarousel';

describe('ImageCarousel', () => {
  test('renders ImageCarousel component', () => {
    render(<ImageCarousel />);
    expect(screen.getByAltText('/baby clothes.jpg')).toBeInTheDocument();
    expect(screen.getByAltText('/toys.jpg')).toBeInTheDocument();
    expect(screen.getByAltText('/christmas.jpg')).toBeInTheDocument();
  });
});