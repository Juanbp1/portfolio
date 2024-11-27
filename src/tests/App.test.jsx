import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it, test } from 'vitest';

describe('App Component', () => {

  it('debería renderizar main, header y home correctamente', () => {
    render(<App />);
    
    // Verificar que los componentes principales se renderizan
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});