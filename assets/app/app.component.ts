import { Component } from '@angular/core';
import { Message } from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
      new Message('Some message', 'Bobby'),
      new Message('Something else', 'Bobby'),
      new Message('Another message', 'Somebody else')
    ];
}
