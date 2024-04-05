import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test AddCategory', () => {
    const expectedValue = 'Saitama';
    test('should change input box value', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: expectedValue } });

        expect(input.value).toBe(expectedValue);
    });

    test('should call on_new_category_when submit input value greatter than 1', () => {
        const onNewCategoryMock = jest.fn();

        render(<AddCategory onNewCategory={onNewCategoryMock} />);

        const input = screen.getByRole('textbox');
        const formulario = screen.getByRole('form');

        fireEvent.input(input, { target: { value: expectedValue } });
        fireEvent.submit(formulario);

        // Comprobando que el input se seta a vacio cuando se hace el submit.
        expect(input.value).toBe('');
        expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMock).toHaveBeenCalledWith(expectedValue);
      
    });

    test('should not call on_new_ctegory when input size is equal to zero', () => { 
        
         const onNewCategoryMock = jest.fn();

         render(<AddCategory onNewCategory={onNewCategoryMock} />);

         const input = screen.getByRole('textbox');
         const formulario = screen.getByRole('form');

         fireEvent.input(input, { target: { value: '' } });
         fireEvent.submit(formulario);

         // Comprobando que el input se seta a vacio cuando se hace el submit.
         expect(input.value).toBe('');
         expect(onNewCategoryMock).not.toHaveBeenCalled();
         
     })
});
