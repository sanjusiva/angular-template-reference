import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-reference';
  firstExample:string="Example one";
  secondExample:string="Example two";
  
  getValue(item:any){
    console.warn(item);
  }
  
}
