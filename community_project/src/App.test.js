import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

test('renders learn react link', () => {
  const { getByText } = render(<PageHeader />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
