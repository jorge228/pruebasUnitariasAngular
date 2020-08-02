import { incrementar } from './numeros';


describe('Pruebas de Números', () => {

    it('Debe devolver 100 si el número ingresado mayor a 100', () => {
      const res = incrementar(300);
      expect(res).toBe(100);
    });

    it('Debe devolver el número ingresado +1 si no es mayor a 100', () => {
        const res = incrementar(50);
        expect(res).toBe(51);
      });
});