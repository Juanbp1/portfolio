import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, test } from 'vitest';

describe('App Component', () => {
  test('renders the app correctly', () => {
    render(<App />);
    expect(screen.getByText(/Hola mundo/i)).toBeInTheDocument();
  });
});