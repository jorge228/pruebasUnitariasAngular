import { mensaje } from './string';


describe('Pruebas de Strings', () => {

    it('Debe devolver un string', () => {
        const resp = mensaje('Jorge');
        expect(typeof resp).toBe('string');
    });

    it('Debe devolver un saludo con el nombre enviado', () => {
        const nombre = 'Jorge';
        const resp = mensaje(nombre);
        // expect(resp).toBe('Saludos ' + nombre);
        expect(resp).toContain('Saludos ' + nombre);

    });
});