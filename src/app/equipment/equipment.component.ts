import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
/*    noSpace: boolean = false;
   isActive: boolean = true; */
   closeShave: boolean = false;

   constructor() { }

   ngOnInit() { }

   //Attempt to disable buttons
/*    checkForSpace (item: object): boolean {
    if (this.cargoHold.length === this.maxItems) {
      this.noSpace = true;
      this.isActive = false;
    } else if (this.maximumAllowedMass <= this.cargoMass + item['mass']) {
      this.noSpace = true;
      this.isActive = false;
    } else {
      this.noSpace = false;
      this.isActive = true;
    }
    return this.noSpace;
   } */

   // Code your addItem function here:
   addItem (item: object): boolean {
    this.cargoHold.push(item);
    this.cargoMass = this.cargoMass + item['mass'];
    this.closeShave =  (this.maximumAllowedMass - this.cargoMass) <= 200 ;
    return (this.closeShave);
   }

   //clear the hold!
   clearHold() {
    this.cargoMass = 0;
    this.cargoHold =[];
    this.closeShave = false;
   }
}
