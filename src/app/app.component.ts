import { Component, ViewChild } from '@angular/core';
import { NguiMessagePopupComponent, NguiPopupComponent} from '@ngui/popup';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testowanie popup-ów !';
  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  messageAlert: string = 'Nie wywołano Popup Alert';
  messageConfirm: string = 'Nie wywołano Popup Confirm';

  constructor(){
  }

  clickAlert(){
    alert('Zwykły alert.');
  }

  clickPopupAlert(){
    this.popup.open(NguiMessagePopupComponent, {
      classNames: 'small',
      title: 'Popup Alert',
      message: '',
      buttons: {
        OK: () => {
          this.messageAlert = "'OK' button is pressed";
          this.popup.close();
        }
      },
      closeButton: false,
    });
  }

  clickPopupConfirm(){
    this.popup.open(NguiMessagePopupComponent, {
      classNames: 'small',
      title: 'Popup Confirm',
      // message: 'Confirm',
      buttons: {
        OK: () => {
          this.messageConfirm = "'OK' button is pressed";
          this.popup.close();
        },
        CANCEL: () => {
          this.messageConfirm = "'CANCEL' button is pressed";
          this.popup.close();
        }
      },
      closeButton: false,
    });
  }

}
