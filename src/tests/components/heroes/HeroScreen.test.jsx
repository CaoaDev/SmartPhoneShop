import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { mount } from 'enzyme';
import { types } from '../../../types/types';
import { HeroeScreen } from '../../../components/heroes/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Pruebas en <HeroeScreen />', () => {
    test('No debe mostrar la pantalla de HeroeScreen si no tiene un heroe en el url', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={ [ '/hero' ] } >
                <Routes >
                    <Route path='/hero' element={ <HeroeScreen /> } />
                    <Route path='/' element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'No Hero Page');
    });

    test('Debe mostrar la pantalla de HeroeScreen con el heroe si el heroe existe', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={ [ '/hero/marvel-spider' ] } >
                <Routes >
                    <Route path='/hero/:heroeId' element={ <HeroeScreen /> } />
                    <Route path='/' element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrapper.find( '.row' ).exists() ).toBe( true );
    });

    test('Debe de regrar a la pantalla anterior', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={ [ '/hero/marvel-spider' ] } >
                <Routes >
                    <Route path='/hero/:heroeId' element={ <HeroeScreen /> } />
                </Routes>
            </MemoryRouter>
        );
        wrapper.find( 'button' ).prop( 'onClick' )();
        expect( mockNavigate ).toHaveBeenCalledWith( -1 );
    });

    test('Debe de mostrar el No Hero Page si no tenemos a un heroe', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={ [ '/hero/marvel-spider123123' ] } >
                <Routes >
                    <Route path='/hero/:heroeId' element={ <HeroeScreen /> } />
                    <Route path='/' element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );
        
        expect( wrapper.text() ).toBe( 'No Hero Page' );
    });
});