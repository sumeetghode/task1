import { AfterViewInit, Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'task1';
  public name ="sumeet";
  public message = ""

  constructor() { }
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.nameElementRef.nativeElement.focus();
  }

}


