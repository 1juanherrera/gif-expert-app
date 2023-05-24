import { renderHook, waitFor } from "@testing-library/react"
import UseFetchGifs from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => {

    test('debe de retornar un arreglo de imagenes e isLoading en false', async() => {
        
       const { result } = renderHook( () => UseFetchGifs('Dragon ball') );

       await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
       );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});