import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input('parentData') public name;
  //refering it as name

 @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent1(){
    this.childEvent.emit('hey how are you')
  }
  btnalert() {
    const msgService = new MessageService();
    msgService.messageAlert()
  }

}
