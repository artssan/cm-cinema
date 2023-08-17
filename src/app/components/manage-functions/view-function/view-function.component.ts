import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-view-function',
  templateUrl: './view-function.component.html',
  styleUrls: ['./view-function.component.scss']
})
export class ViewFunctionComponent {
  functionId: any;
  functionDetail: any = [];

  constructor(public functionsService: FunctionsService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.functionId = this.route.snapshot.params['functionId'];
    this.getFunctionById();
  }

  getFunctionById() {       
    this.functionsService.getFunctionById(this.functionId).subscribe((data) => {      
      if (data != null) {
        this.functionDetail = data;
      }
    }); 
  }
}
