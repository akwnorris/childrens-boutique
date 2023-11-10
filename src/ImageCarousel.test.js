import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

describe('ImageCarousel', () => {
  test('renders ImageCarousel component', () => {
    render(<ImageCarousel />);
    expect(screen.getByAltText('lkjfalksdjflas')).toBeInTheDocument();
    //expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    //expect(screen.getByAltText('Image 3')).toBeInTheDocument();
  });
});