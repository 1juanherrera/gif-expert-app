import { fireEvent, render, screen } from '@testing-library/react'
import AddCategory from "../../src/components/AddCategory"

describe('pruebas en <AddCategory />', () => {

    test('debe cambir el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={() => {}} /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku');
    });

    test('Debe de llamar OnNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Goku';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        //screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('No debe de llamar el OnNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
})