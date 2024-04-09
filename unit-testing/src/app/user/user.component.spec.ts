import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [ UserService, DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user from userService', () => {
    expect(userService.user).toEqual(component.user);
  });

  it('should set the title to "User not logged in" if #user is not set', () => {
    const template = fixture.nativeElement;

    expect(template.querySelector('h3').textContent).toContain('User not logged in');
  });

  it('should set the paragraph to "Please log in first" if #user is not set', () => {
    const template = fixture.nativeElement;

    expect(template.querySelector('p').textContent).toContain('Please log in first');
  });

  it('should set the title to "User logged in" if #user is set', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const template = fixture.nativeElement;

    expect(template.querySelector('h3').textContent).toContain('User logged in');
  });

  it('should set the paragraph to "User is:" if #user is set', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const template = fixture.nativeElement;

    expect(template.querySelector('p').textContent).toContain('User is:');
  });

  // it('should set #data through the dataService', async(() => {
  //   spyOn(dataService, 'getDetails').and.resolveTo('Data');
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(dataService.getDetails).toHaveBeenCalled();
  //   });
  // }));
});
