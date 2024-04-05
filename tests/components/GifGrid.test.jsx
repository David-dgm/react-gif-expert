import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/UseFetchGifs';

jest.mock('../../src/hooks/UseFetchGifs');

describe('Test gifGrid component', () => {
    const categoryExpected = 'OnePunch';

    test('should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={categoryExpected} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categoryExpected));
    });

    test('should show items when arrive item', () => {
        const gifs = [
            {
                id: 1,
                title: 'Kratos',
                url: 'https://kratos-home',
            },
            {
                id: 2,
                title: 'Goku',
                url: 'https://goku-home',
            },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });
        render(<GifGrid category={categoryExpected} />);

        expect(screen.getAllByRole('img')).toHaveLength(2);
    });
});
