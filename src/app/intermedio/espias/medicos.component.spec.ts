import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

import { from, empty } from 'rxjs';
// import 'rxjs/add/observable/of';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    // pide http, pero para pruebas no lo usamos
    const servicio = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });

    // siempre return observables por el subscribe de las
    // funciones agregarMedico y ngOnInit

    it('Init: Debe de cargar los médicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];
        // espía al servicio y cuando alguien llame a getMedicos
        // vas a llamar y ejecutar
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        });
        // spyOn(servicio, 'getMedicos').and.returnValue(from([medicos]));

        // no lo hace de forma automática
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar al servidor para agrear un nuevo médico', () => {
        // no me interesa la resp, solo que se llame a agregarMedico
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(resp => {
            return empty();
        });
        componente.agregarMedico();
        // comprueba que ha sido llamado
        expect(espia).toHaveBeenCalled();

    });

    it('Debe de agrear un nuevo médico al array de médicos', () => {

        const medico = { id: 1, nombre: 'Jorge' };

        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();
        // como no hay médicos, al agregar este ya hay 1
        // expect(componente.medicos.length).toBe(1);
        // el médico jorge que agrego al array compruebo que este
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });


});
