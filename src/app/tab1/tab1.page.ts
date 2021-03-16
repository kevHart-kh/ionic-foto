import { Component } from '@angular/core';
import { PhotoService } from '../service/photo.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoService:PhotoService) {}

  async ngOnInit(){
    await this.photoService.loadFoto();
  }

  tambahFoto (){
    this.photoService.tambahFoto();
  }

}
