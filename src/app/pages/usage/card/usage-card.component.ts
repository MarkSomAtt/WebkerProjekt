import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Usage } from 'src/app/models/Usage';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { UsageEditComponent } from '../usage-edit/usage-edit.component';

@Component({
  selector: 'app-usage-card',
  templateUrl: './usage-card.component.html',
  styleUrls: ['./usage-card.component.scss']
})
export class UsageCardComponent implements OnInit {
  @Input() usage: Usage = {} as any;
  Sub: Subscription | null = null;


  
  @Input()
  statuss!: string;
  
  constructor(private service: FbBaseService<Usage>,private dialog: MatDialog, ) { }

  delete():void{
    this.service.delete("usages",this.usage.id);
  }

  ngOnInit(): void {
    if(this.usage.usageDate !== undefined){
    // @ts-ignore
    this.usage.usageDate=new Date(this.usage.usageDate.seconds*1000);
    }
  }

  usageSzerkeszt(szusage:Usage):void{
    const dialogRef = this.dialog.open(UsageEditComponent,{data : {dataKey: szusage}});

    this.Sub = dialogRef.afterClosed().subscribe(result => {
      if(result!=false && szusage.id!=null){
        const jelenusage:Usage=result;
        this.service.update('usages',jelenusage.id,jelenusage)
        
      }




    });
  }

}
