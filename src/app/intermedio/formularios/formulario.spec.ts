import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';



describe('Formularios', () => {

    let componente: FormularioRegister;

    beforeEach(() => {
        componente = new FormularioRegister(new FormBuilder());
    });

    it('Debe de crear un formulario con dos campos (email y password) ', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    // aquí la da como buena porque dice que sea falso
    it('El email debe de ser obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El email debe de ser un correo válido', () => {
        const control = componente.form.get('email');
        control.setValue('jorge@mail.com');
        expect(control.valid).toBeTruthy();
    });

});