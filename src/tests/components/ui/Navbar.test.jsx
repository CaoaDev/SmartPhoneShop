import { MemoryRouter, Route, Routes } from "react-router-dom";
import { mount } from "enzyme";
import { Navbar2 } from "../../../components/ui/Navbar";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

 jest.mock('react-router-dom', () => ({
     ...jest.requireActual('react-router-dom'),
     useNavigate: () => mockNavigate,
 }));

describe('Pruebas en <Navbar2 />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro',
            logged: true
        }
    }
        const wrapper = mount( // para hacer el mount de un componente tenemos q poner todos los q engloba
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter ImitialEntries={ [ '/' ] } > // poner el valor initial en este caso la pagina de raiz
                    <Routes >
                        <Route path='/' element={ <Navbar2 /> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        // pedro
        );
    test('Debe de mostrar correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( 'Pedro' );
        // snapshot
        // .text-info = ... pedro
    });

    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {

        wrapper.find('button1').prop('onClick')();
        console.log(wrapper.html());

        expect( contextValue.dispatch ).toHaveBeenCalledWith({'type': types.logout });
        expect( mockNavigate ).toHaveBeenCalledWith('/Login', { replace: true });

    });
})