import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });

  it('Debe tener un enlace a la página de /medicos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    // console.log(elementos);

    let existe = false;

    for (const elem of elementos) {
      // console.log(elem.attributes.routerLink);
      // if (elem.attributes.routerLink === '/medicos') existe = true;
      if (elem.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }


    }
    expect(existe).toBeTruthy();
  });

});
