import { Jugador } from './clase';


describe('pruebas de Clase', () => {

    const jugador = new Jugador();

    beforeAll(() => {
        // console.log('beforeAll');
    });
    beforeEach(() => {
        // console.log('beforeEach');
        jugador.hp = 100;
    });
    afterAll(() => {
        // console.log('afterAll');
    });
    afterEach(() => {
        // console.log('afterEach');
        // jugador.hp = 100;
    });

    it('Debe devolsver 80 de hp si recibe 20 de daño', () => {
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });

    it('Debe devolver 50 de hp si recibe 50 de daño', () => {
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });

    it('Debe devolver 0 de hp si recibe 100 de daño o más', () => {
        const resp = jugador.recibeDanio(105);
        expect(resp).toBe(0);
    });

});