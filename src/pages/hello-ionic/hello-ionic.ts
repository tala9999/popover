import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import {ListPage} from '../list/list';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ListPage);
    popover.present({
      ev: myEvent
    });
  }


}
