import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashBoardRoutes } from '../../routers/DashBoardRoutes';

describe('Pruebas en <DashBoardRoutes />', () => {
    const constexValue = {
        user: {
            logged: true,
            name: 'KAt'
        }
    };
    test( 'Debe de mostrarse correctament - todos los heroes', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ constexValue }>
                <MemoryRouter initialEntries={ ['/'] } >
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( 'KAt' );
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Todos los Héroes' )
    });
    test( 'Debe de mostrarse correctament - DC', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ constexValue }>
                <MemoryRouter initialEntries={ ['/dc'] } >
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Dc Héroes' )
    });
    test( 'Debe de mostrarse correctament - Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ constexValue }>
                <MemoryRouter initialEntries={ ['/marvel'] } >
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Marvel Héroes' )
    });
});