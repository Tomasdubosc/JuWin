import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Root from '../components/Root';

test('renders Root component', () => {
  render(
    <MemoryRouter>
      <Root />
    </MemoryRouter>
  );
/*MemoryRouter provided by react-router-dom in testing, a lightweight router implementation that you can use for testing purposes. It behaves similarly to the regular <Router> but doesn't rely on a browser's URL or history. 
Instead, it uses a memory-based history object.*/
  const headerElement = screen.getByRole('banner');
  const mainElement = screen.getByRole('main');
  expect(headerElement).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();

  const gamesNavLink = screen.getByText('Games');
  const matchesNavLink = screen.getByText('Matches');
  expect(gamesNavLink).toBeInTheDocument();
  expect(matchesNavLink).toBeInTheDocument();
});