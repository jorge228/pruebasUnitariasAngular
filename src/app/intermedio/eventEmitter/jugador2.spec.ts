import { Jugador2 } from './jugador2';


describe('Jugador2 Emit', () => {

    let jugador = new Jugador2();

    beforeEach(() => jugador = new Jugador2());

    it('Debe de emitir un evento cuando recibe daño', () => {
        let nuevoHP = 0;

        // aunque sea asíncrono, se espera a terminar antes de que 
        // llegue a jugador.recibeDanio(1000);
        jugador.hpCambia.subscribe(hp => {
            nuevoHP = hp;
        });

        // esto provoca el event emit 
        jugador.recibeDanio(1000);

        expect(nuevoHP).toBe(0);
    });

    it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {
        let nuevoHP = 0;
        jugador.hpCambia.subscribe(hp => {
            nuevoHP = hp;
        });

        // esto provoca el event emit 
        jugador.recibeDanio(50);

        expect(nuevoHP).toBe(50);
    });

});