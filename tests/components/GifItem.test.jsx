import { render,screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba Componente GifItem', () => {
    const title = 'Saitama';
    const url = 'http://direccion/mock';

    test('should match with spanshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show image with url and requested alt', () => {
        render(<GifItem title={title} url={url} />);
        
        const {src , alt}=screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

     test('should show title', () => {
         render(<GifItem title={title} url={url} />);

         expect(screen.getByText( title)).toBeTruthy();

        //  expect(screen.getByTestId('p-title'))
        //  .toMatch({ title });
        //  .toContainEqual({ title });
         
     });
});
