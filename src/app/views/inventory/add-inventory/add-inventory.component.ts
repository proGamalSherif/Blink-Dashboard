import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { InventoryService } from '../../../../services/inventory.service';  
import Swal from 'sweetalert2';
import { BranchService } from '../../../../services/BranchServices/branch.service';
import { Ibranch } from '../../shared/Interfaces/ibranch';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-inventory',
  imports: [ReactiveFormsModule],
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.scss'
})
export class AddInventoryComponent implements OnInit {
  addInventoryForm: FormGroup;
  //modify 
  branches: { id: number, name: string }[] = []; 
  BranchArr!:Ibranch[];

  constructor(private inventoryService: InventoryService,private branchServ:BranchService,private router:Router) {

    this.addInventoryForm = new FormGroup({
      inventoryName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      inventoryAddress: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{11}$')]),
      branchId: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      long: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {
    // modify
    this.branchServ.getAllBranches().subscribe((res)=>{
      this.BranchArr=res;
    })
    this.branches = [
      { id: 1, name: 'Cairo' },
      { id: 2, name: 'Mansoura' },
    ];
  }
  
  onSubmit() {
    this.addInventory();
  }

  addInventory() {
    if (this.addInventoryForm.valid) {
      this.inventoryService.add(this.addInventoryForm.value).subscribe({
        next: (response) => {
          Swal.fire({
            toast: true,
            position: 'top',
            icon: 'success',
            title: 'Inventory added successfully',
            showConfirmButton: false,
            timer: 2500,
          });
          this.addInventoryForm.reset(); 
          this.router.navigate(['/inventory'])
        },
        error: (error) => {
          console.error('Error adding inventory:', error);
        }
      });}
    
    }

     // Get Latitude And Longitude
     getLatLongFromLink(givinLink:string){
      const regex = /@?(-?\d+\.\d+),(-?\d+\.\d+)/;
      
      const match = givinLink.match(regex);
      if(match){
        this.addInventoryForm.patchValue({
          lat:match[1],
          long:match[2]
        })
      }
    }


   // Getter methods
   get inventoryName() { return this.addInventoryForm.get('inventoryName'); }
   get inventoryAddress() { return this.addInventoryForm.get('inventoryAddress'); }
   get phone() { return this.addInventoryForm.get('phone'); }
   get branchId() { return this.addInventoryForm.get('branchId'); }
   get lat() { return this.addInventoryForm.get('lat'); }
   get long() { return this.addInventoryForm.get('long'); }

}
