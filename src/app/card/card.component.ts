import { Component, OnInit } from '@angular/core';
import gallerydata from '../alljsonfiles/gallery.json'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public imagelist: {image:string, name:string, description:string}[] = gallerydata;
}