import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  width: number;
  ngOnInit(){}
  
  constructor(private cdr: ChangeDetectorRef){}
  setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();
  }

}
