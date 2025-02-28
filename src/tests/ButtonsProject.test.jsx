import { render, screen, fireEvent } from '@testing-library/react';
import ButtonsProject from '../components/molecules/ButtonsProject';
import { describe, expect, it, vi } from 'vitest';

describe('Verificar que funciona el componente ButtonsProject', () => {
  const mockLiveUrl = 'https://example.com/live';
  const mockCaseStudyUrl = 'https://example.com/case-study';

  it('Debe representar el componente ButtonsProject', () => {
    render(<ButtonsProject liveUrl={mockLiveUrl} caseStudyUrl={mockCaseStudyUrl} />);

    // Verifica si ambos botones están renderizados
    expect(screen.getByText('Ver en vivo')).toBeInTheDocument();
    expect(screen.getByText('Caso de estudio')).toBeInTheDocument();
  });

  it('Debe llamar a handleRedirect con la URL correcta cuando se hace clic en el botón "Ver en vivo"', () => {
    const openMock = vi.fn(); // Mock para window.open
    window.open = openMock;

    render(<ButtonsProject liveUrl={mockLiveUrl} caseStudyUrl={mockCaseStudyUrl} />);

    // Simula un clic en el botón "Ver en vivo"
    fireEvent.click(screen.getByText('Ver en vivo'));

    // Verifica que window.open se haya llamado con la URL correcta
    expect(openMock).toHaveBeenCalledWith(mockLiveUrl, '_blank');
  });

  it('Debe llamar a handleRedirect con la URL correcta cuando se hace clic en el botón "Caso de estudio"', () => {
    const openMock = vi.fn(); // Mock para window.open
    window.open = openMock;

    render(<ButtonsProject liveUrl={mockLiveUrl} caseStudyUrl={mockCaseStudyUrl} />);

    // Simula un clic en el botón "Caso de estudio"
    fireEvent.click(screen.getByText('Caso de estudio'));

    // Verifica que window.open se haya llamado con la URL correcta
    expect(openMock).toHaveBeenCalledWith(mockCaseStudyUrl, '_blank');
  });

  it('Debería registrar un error si se proporciona una URL no válida', () => {
    const consoleErrorMock = vi.fn();
    console.error = consoleErrorMock;

    render(<ButtonsProject liveUrl="" caseStudyUrl={mockCaseStudyUrl} />);

    // Simula un clic en el botón "Ver en vivo" con URL vacía
    fireEvent.click(screen.getByText('Ver en vivo'));

    // Verifica que se haya llamado console.error debido a la URL no válida
    expect(consoleErrorMock).toHaveBeenCalledWith('URL no válida');
  });
});
