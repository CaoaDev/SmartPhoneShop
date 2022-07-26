import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    ...jest.requireActual( 'react-router-dom' ),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <SearchScreen />', () => {
    test('Debe mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount( 
            <MemoryRouter  initialEntries={ [ '/search' ] }>
                <SearchScreen /> 
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.alert-info' ).text().trim() ).toBe( 'Buascar un heroe...' );
    });

    test('Debe de mostrar a Batman y el input con el valor de queryString', () => {
        const wrapper = mount( 
            <MemoryRouter  initialEntries={ [ '/search?q=Batman' ] }>
                <SearchScreen /> 
            </MemoryRouter>
        );
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 'Batman' );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar un error si no se encuentra el heroe', () => {
        const wrapper = mount( 
            <MemoryRouter  initialEntries={ [ '/search?q=1234' ] }>
                <SearchScreen /> 
            </MemoryRouter>
        );
        expect( wrapper.find( '.alert-danger' ).text().trim() ).toBe( 'No hay resultados... 1234' );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe llamar navigate a la nueva pantalla', () => {
        const wrapper = mount( 
            <MemoryRouter  initialEntries={ [ '/search?q=1234' ] }>
                <SearchScreen /> 
            </MemoryRouter>
        );
        wrapper.find( 'input' ).simulate( 'change', {
            target: {
                name: 'searchText',
                value: 'superman'
            }
        } );
        wrapper.find( 'form' ).prop( 'onSubmit' )( {
            preventDefault(){}
            // preventDefault: () => {} es lo mismo q arriba solo q alargado
        } );
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith('?q=superman');
    });
        
});