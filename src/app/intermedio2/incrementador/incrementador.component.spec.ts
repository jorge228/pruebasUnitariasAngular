import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });


    it('Debe de mostrar la leyenda en el <h3>', () => {

        component.leyenda = 'Progreso de carga';
        // dispara detección de cambios para que se modifica la leyenda
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Progreso de carga');

    });

    it('Debe mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        // como el fixture puede tardar un poco
        // si lo quito, da error porque está en null
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
            // console.log(elem);
            expect(elem.value).toBe('55');
        });

    });

    it('Debe de +/- 5 con click en el botón', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        // console.log(botones);
        botones[0].triggerEventHandler('click',null);
        expect(component.progreso).toBe(45);
        botones[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(50);
    });

    it('El título del componente debe mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click',null);
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('45');
        // expect(component.progreso).toBe(45);
        // botones[1].triggerEventHandler('click',null);
        // expect(component.progreso).toBe(50);
    });

});
