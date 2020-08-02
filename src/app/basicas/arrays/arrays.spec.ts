import { obtenerRobots } from './arrays';


describe('Pruebas de Arrays', () => {

    it('Debe devolver al menos 3 robots', () => {
        const res = obtenerRobots();
        // expect(res).toBe(true);
        // expect(res).not.toBeTruthy();
        // expect(res.length).toBe(3);
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir MegaMan y Ultrón', () => {
        const res = obtenerRobots();
        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultrón');
    });

});