import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-almuerzo',
  templateUrl: './modal-almuerzo.component.html',
  styleUrls: ['./modal-almuerzo.component.scss']
})
export class ModalAlmuerzoComponent implements OnInit {
  modalContenAlmuerzo;
   constructor( @Inject(MAT_DIALOG_DATA) public data:any) { 
    this.modalContenAlmuerzo= data;}
  ngOnInit(): void {
  }

}
