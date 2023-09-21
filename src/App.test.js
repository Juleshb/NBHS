import { render, screen } from '@testing-library/react';
import Login from './components/Login/login';

test('renders Sigin text', () => {
  render(<Login/>);
  const textElement = screen.getByText(/Sign in with/i);
  expect(textElement).toBeInTheDocument();
});
