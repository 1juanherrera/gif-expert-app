import GifGrid from "../../src/components/GifGrid"
import { render, screen } from '@testing-library/react'
import UseFetchGifs from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('prueba <GifGrid />', () => {

    const category = 'Dragon ball';
    
    test('debe de mostrar el loading inicialmente', () => {

        UseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Cargando...') );
        expect(screen.getByText(category));
    })

    test('debe ede mostrar items cuando se cargan las imágenes useFetchGifs', () =>{

        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/naruto.jpg'
            }
        ]

        UseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2)

    })
})