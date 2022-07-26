import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { PublickRoute } from '../../routers/PublickRoute';

jest.mock( 'react-router-dom', () => ({
    ...jest.requireActual( 'react-router-dom' ),
    Navigate: () => <h1>Estas fuera perro.</h1>
}));

describe('Pruebas en el <PrivateRoute />  ', () => {
   
    Storage.prototype.setItem=jest.fn(); // storage es mandar a llamar localStorage y ak hacemos un muck para probarla

    test('Debe mostar el componente si esta autentificado y guardar el en localStorage', () => {
        const contextValue= {
            user: {
                logged: true,
                name: 'KAt'
            }
        };
        const wrapper= mount(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={ ['/'] } >
                    <PrivateRoute >
                        <h1>Estas en la zona vip.</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
            // ak montamos el mock y se llama el memoryrouter le pones el valor iniicial y si todo esta bien pasa al privateroute y muestra el contanido
        );
        
        expect( wrapper.text().trim() ).toBe( 'Estas en la zona vip.' );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/');
    });

    test('Debe bloquear el componente si no esta autentificado', () => {
        const contextValue= {
            user: {
                logged: false,
                name: 'KAt'
            }
        };
        const wrapper= mount(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={ ['/'] } >
                    <PrivateRoute >
                        <h1>Estas en la zona vip.</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
            // ak montamos el muck y se llama el memoryrouter le pones el valor iniicial y si todo esta bien pasa al privateroute y muestra el contanido
        );
        
        expect( wrapper.text().trim() ).toBe( 'Estas fuera perro.' );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/' );
    });
});