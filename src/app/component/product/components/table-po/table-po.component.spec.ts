import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePoComponent } from './table-po.component';

describe('TablePoComponent', () => {
  let component: TablePoComponent;
  let fixture: ComponentFixture<TablePoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
