import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageAlert(){
    alert("Good morning")
  }
  constructor() { }
}
