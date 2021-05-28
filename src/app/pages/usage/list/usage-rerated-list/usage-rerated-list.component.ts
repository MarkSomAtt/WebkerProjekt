import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Usage } from 'src/app/models/Usage';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { UsageAddComponent } from '../../add/usage-add.component';

@Component({
  selector: 'app-usage-rerated-list',
  templateUrl: './usage-rerated-list.component.html',
  styleUrls: ['./usage-rerated-list.component.scss']
})
export class UsageReratedListComponent implements OnInit {
  title = 'Rerated';
  list: Observable<Usage[]> | null = null;

  
  constructor(private service: FbBaseService<Usage>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
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

  

}

