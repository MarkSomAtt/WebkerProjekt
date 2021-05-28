import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usage-edit',
  templateUrl: './usage-edit.component.html',
  styleUrls: ['./usage-edit.component.scss']
})
export class UsageEditComponent implements OnInit {
  form:FormGroup= new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    usageDate: new FormControl(''),
    usageType: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<UsageEditComponent>,@Inject(MAT_DIALOG_DATA) public kusage: any) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    console.log(this.kusage.id)
    this.form?.controls.id.setValue(this.kusage.dataKey.id);
    this.form?.controls.description.setValue(this.kusage.dataKey.description);
    this.form?.controls.status.setValue(this.kusage.dataKey.status);
    this.form?.controls.usageDate.setValue(this.kusage.dataKey.usageDate);
    this.form?.controls.usageType.setValue(this.kusage.dataKey.usageType);
  }


}
