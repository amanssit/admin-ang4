import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ConfirmComponent} from '../common/dialog/confirm/confirm.component'
import {MessageComponent} from '../common/dialog/message/message.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 selectedOption: string;
  constructor(public dialog: MdDialog) { }
  openConfirmDialog() {
    let dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
  openMessageDialog()
  {
      let dialogRef = this.dialog.open(MessageComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
  ngOnInit() {
  }

}
