import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboatPage } from './aboat-page';

describe('AboatPage', () => {
  let component: AboatPage;
  let fixture: ComponentFixture<AboatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboatPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
