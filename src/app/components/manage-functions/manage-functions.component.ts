import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FunctionsService } from 'src/app/services/functions.service';
import { NgModalConfirm } from '../ngmodal-confirm.component';

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};
@Component({
  selector: 'app-manage-functions',
  templateUrl: './manage-functions.component.html',
  styleUrls: ['./manage-functions.component.scss']
})
export class ManageFunctionsComponent implements OnInit{
  closeResult = '';
  functionList: any = [];

  constructor(private router: Router, private modalService: NgbModal,
    private toastr: ToastrService, private functionsService : FunctionsService) { }

  ngOnInit(): void {
    this.getAllFunctions();
  }

  async getAllFunctions() {
    this.functionsService.getFunctions().subscribe((functions) => {
      if (functions != null) {
        this.functionList = functions;
      }
    });
  }

  addFunction() {
    this.router.navigate(['add-function']);
  }

  deleteFunctionConfirmation(func: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteFunction(func);
      },
      (reason) => {});
  }

  deleteFunction(func: any) {
    this.functionsService.deleteFunctionById(func.functionId).subscribe((data) => {
      if (data != null) {
        if (data.isSuccessful) {
          this.toastr.success(data.message);
          setTimeout(() => {
            this.router.navigate(['/manage-functions']);
            window.location.reload();
          }, 500);
        } else {
          this.toastr.error(data.message);
          setTimeout(() => {
            this.router.navigate(['/manage-functions']);
            window.location.reload();
          }, 500);
        }
      }
    });
  }
}
