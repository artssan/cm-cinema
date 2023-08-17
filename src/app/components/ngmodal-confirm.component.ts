import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'ng-modal-confirm',
    template: `
    <div class="modal-header">
      <h5 class="modal-title" id="modal-title" style="color: #212529">Delete Confirmation</h5>
      <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
      <p style="color: #212529">Are you sure you want to delete?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
      <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
    </div>
    `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}