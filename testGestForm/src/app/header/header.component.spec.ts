import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title that contains "GestForm"', () => {
    const title = fixture.debugElement.query(By.css('[data-test=title]')).nativeElement;

    expect(title).toBeTruthy();
    expect(title.innerHTML).toContain('GestForm');
  });

  it('should have a menu with a "Functionality" button and an "About" link', () => {
    const menu = fixture.debugElement.query(By.css('[data-test=navigation]'));
    const menuItemLinks = fixture.debugElement.queryAll(By.css('[data-test=menu-item-link]'));

    expect(menu).toBeTruthy();
    expect(menuItemLinks.length).toEqual(2);
    expect(menuItemLinks[0].nativeElement.innerHTML).toContain('Functionality');
    expect(menuItemLinks[1].nativeElement.innerHTML).toContain('About');
  });

});
