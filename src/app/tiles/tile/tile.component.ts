import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  imagePath:string = "assets/images/";
  @Input() xtile;
  constructor() { }

  ngOnInit() {
  }

  updateRatingToDb(message){
    console.log("data from the child compoent is " +message );
  }
 

}
