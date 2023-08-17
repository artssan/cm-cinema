import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Function } from 'src/app/models/function.model';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.scss']
})
export class EditFunctionComponent {
  editFunctionForm: Function = {
    functionId: 0,
    movieId: 0,
    price: 0,
    seatsNumber: 0,
    functionDate: ''
  };

  @ViewChild("functionForm")
  functionForm!: NgForm;

  isSubmitted: boolean = false;
  functionId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private functionsService: FunctionsService) { }

  dateToString(date: any): string {
    if (date.month.toString().length == 1) {
      date.month = `0${date.month}`
    }

    if (date.day.toString().length == 1) {
      date.day = `0${date.day}`
    }
      
    return `${date.year}-${date.month}-${date.day}`;
  }

  stringToDateObject(date: string): any {
    return { year: Number(date.substring(0, 4)), month: Number(date.substring(5, 7)), day: Number(date.substring(8, 10)) };
  }

  ngOnInit(): void {
    this.functionId = this.route.snapshot.params['functionId'];
    this.getFunctionById();
  }

  getFunctionById() {
    this.functionsService.getFunctionById(this.functionId).subscribe((data) => {
      if (data != null) {
        this.editFunctionForm = data;
        this.editFunctionForm.functionDate = this.stringToDateObject(this.editFunctionForm.functionDate);
      }
    });
  }

  editFunction(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.editFunctionForm.functionDate = this.dateToString(this.editFunctionForm.functionDate);
      this.functionsService.updateFunction(this.editFunctionForm).subscribe(async data => {
        if (data != null) {
          if (data.isSuccessful) {
            this.toastr.success(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-functions']);
            }, 500);
          } else {
            this.toastr.error(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-functions']);
            }, 500);
          }
        }
      });
    }
  }
}
