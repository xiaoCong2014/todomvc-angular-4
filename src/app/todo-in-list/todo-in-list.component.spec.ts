import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInListComponent } from './todo-in-list.component';

describe('TodoInListComponent', () => {
  let component: TodoInListComponent;
  let fixture: ComponentFixture<TodoInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
