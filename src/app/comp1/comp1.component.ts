import { Component, HostListener, OnInit,ElementRef,ViewChild } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  message = "sumeet"



  ngOnInit(): void {
  }
   btnalert() {
    const msgService = new MessageService();
    msgService.messageAlert()
  }
  @HostListener ("click") myclick()
  {
    alert("done it works")
  }
  @HostListener ("mouseover") mymouseover()
  {
    // alert("done mouseover")
  }

}
