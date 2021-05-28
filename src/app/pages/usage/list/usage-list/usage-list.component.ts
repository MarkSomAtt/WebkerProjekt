import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Usage } from 'src/app/models/Usage';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { UsageAddComponent } from '../../add/usage-add.component';

@Component({
  selector: 'app-usage-list',
  templateUrl: './usage-list.component.html',
  styleUrls: ['./usage-list.component.scss']
})
export class UsageListComponent implements OnInit {
  title = 'Billed';
  list: Observable<Usage[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | null = null;

  
  constructor(private service: FbBaseService<Usage>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      );
  }

  get(): void {
    this.list = this.service.get('usages');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UsageAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((usage: Usage) => {
      console.log(usage);
      if (usage?.description) {
        this.service.add('usages', usage);
      }
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  

}

