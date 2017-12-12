
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentModule } from '../../shared/covalent.module';

import { SidenavService } from '../../sidenav/shared/sidenav.service';
import { BookingInMemoryService } from '../../shared/backend/booking/booking-in-memory.service';
import { BookingDataService } from '../../shared/backend/booking/booking-data-service';
import { DishesDataService } from '../../shared/backend/dishes/dishes-data-service';
import { DishesInMemoryService } from '../../shared/backend/dishes/dishes-in-memory.service';
import { OrderInMemoryService } from '../../shared/backend/order/order-in-memory.service';
import { OrderDataService } from '../../shared/backend/order/order-data-service';
import { MenuService } from '../shared/menu.service';
import { SnackBarService } from '../../shared/snackService/snackService.service';
import { AuthService } from '../../shared/authentication/auth.service';

import { MenuCardComponent } from './menu-card.component';

describe('MenuCardComponent', () => {
  let component: MenuCardComponent;
  let fixture: ComponentFixture<MenuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCardComponent ],
      providers: [
        MenuService,
        SidenavService,
        AuthService,
        SnackBarService,
        { provide: BookingDataService, useClass: BookingInMemoryService},
        { provide: OrderDataService, useClass: OrderInMemoryService},
        { provide: DishesDataService, useClass: DishesInMemoryService}],
      imports: [
        CovalentModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCardComponent);
    component = fixture.componentInstance;
    component.menuInfo = {
      dish: {
        id: 0,
        name: '',
        description: '',
        price: 0,
      },
      image: {content: 'string'},
      extras: [],
      likes: 0,
      isfav: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
