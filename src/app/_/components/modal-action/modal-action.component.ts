// Copyright 2019 The Inescoin developers.
// - Mounir R'Quiba
// Licensed under the GNU Affero General Public License, version 3.


import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs';

import { ModalActionService } from './modal-action.service';

import { QrCodeScanComponent } from './view/qr-code-scan/qr-code-scan.component';
import { QrCodeViewComponent } from './view/qr-code-view/qr-code-view.component';

import { TransferDetailsComponent } from './view/transfer-details/transfer-details.component';

import { StartConversationComponent } from './form/start-conversation/start-conversation.component';
import { SendCoinComponent } from './form/send-coin/send-coin.component';
import { ContactAddComponent } from './form/contact-add/contact-add.component';
import { ContactEditComponent } from './form/contact-edit/contact-edit.component';
import { ContactRemoveComponent } from './form/contact-remove/contact-remove.component';
import { AccountCreateComponent } from './form/account-create/account-create.component';
import { AccountImportComponent } from './form/account-import/account-import.component';
import { AccountKeysComponent } from './form/account-keys/account-keys.component';
import { AccountRemoveComponent } from './form/account-remove/account-remove.component';
import { AccountRequestComponent } from './form/account-request/account-request.component';
import { AccountResetPasswordComponent } from './form/account-reset-password/account-reset-password.component';
import { DomainCreateComponent } from './form/domain-create/domain-create.component';
import { DomainUpdateComponent } from './form/domain-update/domain-update.component';
import { DomainChangeOwnerComponent } from './form/domain-change-owner/domain-change-owner.component';
import { DomainAddLangueComponent } from './form/domain-add-langue/domain-add-langue.component';
import { DomainRemoveLangueComponent } from './form/domain-remove-langue/domain-remove-langue.component';
import { NodeAddComponent } from './form/node-add/node-add.component';
import { NodeEditComponent } from './form/node-edit/node-edit.component';
import { NodeRemoveComponent } from './form/node-remove/node-remove.component';
import { ProfileExportComponent } from './form/profile-export/profile-export.component';
import { ProfileImportComponent } from './form/profile-import/profile-import.component';
import { ProfileResetComponent } from './form/profile-reset/profile-reset.component';
import { ProductCreateComponent } from './form/product-create/product-create.component';
import { ProductUpdateComponent } from './form/product-update/product-update.component';
import { ProductRemoveComponent } from './form/product-remove/product-remove.component';
import { ProductImportComponent } from './form/product-import/product-import.component';
import { CategoriesCreateComponent } from './form/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from './form/categories-update/categories-update.component';
import { CategoriesRemoveComponent } from './form/categories-remove/categories-remove.component';

@Component({
  selector: 'app-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalActionComponent implements OnInit, OnDestroy {

	currentModal: any;

	@ViewChild('modal', {static: false}) modal: NgbModal;

	currentName: string = '';

  modalOpenSub: Subscription;
  modalCloseSub: Subscription;
	modalDismissSub: Subscription;

  constructor(
  	private modalService: NgbModal,
  	private modalActionService: ModalActionService) { }

  ngOnInit() {
    this.modalOpenSub = this.modalActionService.onOpen.subscribe(data => this._modalToOpen(data));
    this.modalCloseSub = this.modalActionService.onOpen.subscribe(data => this._modalToClose(data));
  	this.modalDismissSub = this.modalActionService.onOpen.subscribe(data => this._modalToDismiss(data));
  }

  _modalToOpen(data) {
    if (!data) return;

    this.currentName = data.name;

    switch (data.name) {
      case "qrCodeScan":
        this.modalService.open(QrCodeScanComponent, data.option || {});
        break;
      case "qrCodeView":
        this.modalService.open(QrCodeViewComponent, data.option || {});
        break;
      case "transferDetails":
        this.modalService.open(TransferDetailsComponent, data.option || {});
        break;
      case "startConversation":
        this.modalService.open(StartConversationComponent, data.option || {});
        break;
      case "domainAdd":
        this.modalService.open(DomainCreateComponent, data.option || {});
        break;
      case "domainUpdate":
        this.modalService.open(DomainUpdateComponent, data.option || {});
        break;
      case "domainChangeOwner":
        this.modalService.open(DomainChangeOwnerComponent, data.option || {});
        break;
      case "domainAddLangue":
        this.modalService.open(DomainAddLangueComponent, data.option || {});
        break;
      case "domainRemoveLangue":
        this.modalService.open(DomainRemoveLangueComponent, data.option || {});
        break;
      case "accountCreate":
        this.modalService.open(AccountCreateComponent, data.option || {});
        break;
      case "accountImport":
        this.modalService.open(AccountImportComponent, data.option || {});
        break;
      case "accountKeys":
        this.modalService.open(AccountKeysComponent, data.option || {});
        break;
      case "accountRequest":
        this.modalService.open(AccountRequestComponent, data.option || {});
        break;
      case "accountRemove":
        this.modalService.open(AccountRemoveComponent, data.option || {});
        break;
      case "accountResetPassword":
        this.modalService.open(AccountResetPasswordComponent, data.option || {});
        break;
      case "productCreate":
        this.modalService.open(ProductCreateComponent, data.option || {});
        break;
      case "productUpdate":
        this.modalService.open(ProductUpdateComponent, data.option || {});
        break;
      case "productRemove":
        this.modalService.open(ProductRemoveComponent, data.option || {});
        break;
      case "productImport":
        this.modalService.open(ProductImportComponent, data.option || {});
        break;
      case "categoriesCreate":
        this.modalService.open(CategoriesCreateComponent, data.option || {});
        break;
      case "categoriesUpdate":
        this.modalService.open(CategoriesUpdateComponent, data.option || {});
        break;
      case "categoriesRemove":
        this.modalService.open(CategoriesRemoveComponent, data.option || {});
        break;
      case "contactAdd":
        this.modalService.open(ContactAddComponent, data.option || {});
        break;
      case "contactEdit":
        this.modalService.open(ContactEditComponent, data.option || {});
        break;
      case "contactRemove":
        this.modalService.open(ContactRemoveComponent, data.option || {});
        break;
      case "sendCoin":
        this.modalService.open(SendCoinComponent, data.option || {});
        break;
      case "nodeAdd":
        this.modalService.open(NodeAddComponent, data.option || {});
        break;
      case "nodeEdit":
        this.modalService.open(NodeEditComponent, data.option || {});
        break;
      case "nodeRemove":
        this.modalService.open(NodeRemoveComponent, data.option || {});
        break;
      case "profileExport":
        this.modalService.open(ProfileExportComponent, data.option || {});
        break;
      case "profileImport":
        this.modalService.open(ProfileImportComponent, data.option || {});
        break;
      case "profileReset":
        this.modalService.open(ProfileResetComponent, data.option || {});
        break;
    }
  }

  _modalToClose(data) {
  }

  _modalToDismiss(data) {
  }

  ngOnDestroy() {
    this.modalOpenSub.unsubscribe();
    this.modalCloseSub.unsubscribe();
    this.modalDismissSub.unsubscribe();
  }
}
