import { render, screen } from '@testing-library/react';
import App from './App';

// Der urspruengliche CRA-Test suchte nach "learn react" -> diesen Text gibt es in der App nicht mehr.

test('zeigt den Titel "App Ref. Card 02"', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /app ref\. card 02/i })).toBeInTheDocument();
});

test('zeigt die Statusmeldung "up and running"', () => {
  render(<App />);
  expect(screen.getByText(/up and running/i)).toBeInTheDocument();
});

test('der Titel ist die einzige H1-Ueberschrift', () => {
  render(<App />);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('App Ref. Card 02');
});
