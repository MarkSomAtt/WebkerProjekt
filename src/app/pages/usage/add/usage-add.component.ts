import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usage-add',
  templateUrl: './usage-add.component.html',
  styleUrls: ['./usage-add.component.scss']
})
export class UsageAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl('1'),
    description: new FormControl(''),
    status: new FormControl(''),
    usageDate: new FormControl(''),
    usageType: new FormControl('')
  });
  
  constructor(public dialogRef: MatDialogRef<UsageAddComponent>) { }

  ngOnInit(): void {
  }

}
