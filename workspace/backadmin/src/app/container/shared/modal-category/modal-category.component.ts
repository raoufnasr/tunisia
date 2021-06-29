import { Component, ElementRef, Input, OnInit, Output, TemplateRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss']
})
export class ModalCategoryComponent implements OnInit {
@Input() openModalCategory:boolean;
@Output() closeModalCategory=new EventEmitter();
@Input() title:string;
@Input() button:string;
categoryForm:FormGroup;
isSubmitted:boolean=false;

  constructor(private CategoryService:CategoryService,
    private fb:FormBuilder,) { }

  ngOnInit() {
    this.initCategoryForm();
    
  }

  Annuler(){
    this.openModalCategory=false;
    this.closeModalCategory.emit(this.openModalCategory);

  }

  initCategoryForm(){
    this.categoryForm=this.fb.group({
      nom:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
  }
  
  create(){
    console.log('****')
    this.isSubmitted=true;
    if(this.categoryForm.invalid){
      return
    }
    const body=this.categoryForm.value;
    
    this.CategoryService.createCategory(body).subscribe(res=>{console.log(res)},
    err=>console.log(err))

  }

  submit() {
    switch (this.button) {
      case 'Créer':
        this.create();
        break;
      case 'Mettre à jour':
    

        break;
      case 'Supprimer':
        /* this.deleteFileSubmit(); */

        break;
    }
  }
  

}
