import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Médico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;


    beforeEach(() => {
        // para que compile
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        // para trabajar con el html
        fixture = TestBed.createComponent(MedicoComponent);
        // componente compilado
        component = fixture.componentInstance;

    });

    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe devolver un saludo al médico enviado', () => {
        let nombre = 'Jorge';
        let res = component.saludarMedico(nombre);
        expect(res).toContain('Hola ' + nombre);
    });
    
});