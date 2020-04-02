import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'; //ng bootstrap is a library which include NgbModalConfig, NgbModal and provide the service
import profiledata from '../alljsonfiles/profile.json' //include the json files which contain the details


@Component({
  selector: 'app-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.css'], 
  // providers: [NgbModalConfig, NgbModal],
})

export class FixedHeaderComponent{


  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  // read the command on click 
  open(content) {
    this.modalService.open(content);
  }
  // json object will read by this on public var profile
  public profile: {name:string, id:string, address:string}[] = profiledata;
}

