import { usuarioIngresado } from './booleanos';

describe('Pruebas de Booleanos', () => {

    it('Debe devolver TRUE', () => {
        const res = usuarioIngresado();
        // expect(res).toBe(true);
        // expect(res).not.toBeTruthy();
        expect(res).toBeTruthy();
    });

});