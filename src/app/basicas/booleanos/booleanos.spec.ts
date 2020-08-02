import { usuarioIngresado } from './booleanos';

xdescribe('Pruebas de Booleanos', () => {

    it('Debe devolver TRUE', () => {
        const res = usuarioIngresado();
        // expect(res).toBe(true);
        // expect(res).not.toBeTruthy();
        expect(res).toBeTruthy();
    });

});