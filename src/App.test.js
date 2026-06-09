import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio name', () => {
  render(<App />);
  const name = screen.getByText(/Eswari S/i);
  expect(name).toBeInTheDocument();
});
