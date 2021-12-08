import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoalunoComponent } from './novoaluno.component';

describe('NovoalunoComponent', () => {
  let component: NovoalunoComponent;
  let fixture: ComponentFixture<NovoalunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoalunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
