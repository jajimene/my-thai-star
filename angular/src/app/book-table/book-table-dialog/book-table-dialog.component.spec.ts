import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { BackendModule } from '../../backend/backend.module';
import { BookTableModule } from '../book-table.module';

import { SnackBarService } from '../../core/snackService/snackService.service';
import { BookTableService } from '../shared/book-table.service';
import { BookTableDialogComponent } from './book-table-dialog.component';
import { MatDialog } from '@angular/material';

describe('BookTableDialogComponent', () => {
  let component: BookTableDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarService, BookTableService, HttpClient],
      imports: [
        BrowserAnimationsModule,
        BookTableModule,
        HttpClientModule,
        CoreModule,
        BackendModule.forRoot({ environmentType: 0, restServiceRoot: 'v1' }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    component = dialog.open(BookTableDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
