(self.webpackChunkida_admin_web_app=self.webpackChunkida_admin_web_app||[]).push([[366],{8366:(t,e,n)=>{"use strict";n.r(e),n.d(e,{TicketsModule:()=>et});var o=n(1116),a=n(1041),i=n(649),r=n(9883),c=n(4629),l=n(5366),s=n(2170);let p=(()=>{class t{constructor(t){this.ticketsService=t}resolve(){return this.ticketsService.get()}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(s.g))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})();var d=n(6304),g=n(9996),m=n(8198),u=n(7780),f=n(4053),h=n(3242);function C(t,e){if(1&t&&(l.TgZ(0,"div",20),l.TgZ(1,"div",21),l.TgZ(2,"label",22),l._uU(3),l.ALo(4,"translate"),l.qZA(),l._UZ(5,"input",23),l.ALo(6,"translate"),l.qZA(),l.qZA()),2&t){const t=e.$implicit;l.xp6(3),l.Oqu(l.lcZ(4,2,t[0].toUpperCase())),l.xp6(2),l.s9C("value",l.lcZ(6,4,t[1]))}}function _(t,e){if(1&t&&(l.TgZ(0,"div",24),l.TgZ(1,"div",25),l.TgZ(2,"div",26),l.TgZ(3,"div",27),l._uU(4),l.qZA(),l.TgZ(5,"div",28),l.TgZ(6,"span",4),l._uU(7),l.ALo(8,"titlecase"),l.ALo(9,"translate"),l.qZA(),l.qZA(),l.TgZ(10,"div",29),l._uU(11),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t){const t=e.$implicit,n=l.oxw(2);l.xp6(4),l.hij(" ",n.formatDate(t.initialDate)," "),l.xp6(3),l.hij(" ",l.lcZ(8,3,l.lcZ(9,5,t.state))," "),l.xp6(4),l.hij(" ",t.description," ")}}function b(t,e){if(1&t&&(l.TgZ(0,"option",48),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t){const t=e.$implicit;l.Q6J("ngValue",t.state),l.xp6(1),l.Oqu(l.lcZ(2,2,t.state))}}function O(t,e){1&t&&(l.TgZ(0,"span"),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.Oqu(l.lcZ(2,1,"SAVE")))}function M(t,e){1&t&&(l.TgZ(0,"div",49),l._UZ(1,"span",50),l.qZA())}const P=function(t){return{"is-invalid":t}};function x(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"form",30),l.TgZ(1,"div",31),l.TgZ(2,"div",32),l.TgZ(3,"label",33),l._uU(4),l.ALo(5,"translate"),l.qZA(),l._UZ(6,"textarea",34),l.qZA(),l.qZA(),l.TgZ(7,"div",35),l.TgZ(8,"div",36),l.TgZ(9,"select",37),l.TgZ(10,"option",38),l._uU(11),l.ALo(12,"translate"),l.qZA(),l.YNc(13,b,3,4,"option",39),l.qZA(),l.qZA(),l.TgZ(14,"div",40),l.TgZ(15,"div",41),l._UZ(16,"input",42),l.TgZ(17,"p"),l._uU(18),l.ALo(19,"translate"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",43),l.TgZ(21,"button",44),l.NdJ("click",function(){return l.CHM(t),l.oxw(2).createNewStatus()}),l.YNc(22,O,3,3,"span",45),l.YNc(23,M,2,0,"ng-template",46,47,l.W1O),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=l.MAs(24),e=l.oxw(2);let n;l.Q6J("formGroup",e.newTicketStatusForm),l.xp6(4),l.hij(" ",l.lcZ(5,8,"SAVE_REQUEST_INFORMATION"),""),l.xp6(5),l.Q6J("ngClass",l.VKq(14,P,(null==(n=e.newTicketStatusForm.get("state"))?null:n.invalid)&&(null==(n=e.newTicketStatusForm.get("state"))?null:n.touched))),l.xp6(2),l.Oqu(l.lcZ(12,10,"STATUS")),l.xp6(2),l.Q6J("ngForOf",e.ticketStatesConstant),l.xp6(5),l.hij(" ",l.lcZ(19,12,"SEND_NOTIFICATION"),""),l.xp6(4),l.Q6J("ngIf",!e.spinnerLoader)("ngIfElse",t)}}function Z(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div"),l.TgZ(1,"div",2),l.TgZ(2,"div",3),l.TgZ(3,"div",4),l._uU(4),l.ALo(5,"titlecase"),l.ALo(6,"translate"),l.qZA(),l.TgZ(7,"div",5),l._uU(8),l.ALo(9,"translate"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(10,"div",6),l.TgZ(11,"div",7),l.YNc(12,C,7,6,"div",8),l.qZA(),l.TgZ(13,"div",9),l.TgZ(14,"div",10),l.TgZ(15,"div",11),l.TgZ(16,"span",12),l._uU(17),l.ALo(18,"translate"),l.qZA(),l.qZA(),l.TgZ(19,"div",13),l.TgZ(20,"nav"),l.TgZ(21,"ul",14),l.TgZ(22,"li",15),l.NdJ("click",function(){return l.CHM(t),l.oxw().updatePaginator(-1)}),l.TgZ(23,"span",16),l._uU(24,"\xab"),l.qZA(),l.qZA(),l.TgZ(25,"li",15),l.NdJ("click",function(){return l.CHM(t),l.oxw().updatePaginator(1)}),l.TgZ(26,"a",16),l._uU(27,"\xbb"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(28,"hr",17),l.qZA(),l.TgZ(29,"div"),l.YNc(30,_,12,7,"div",18),l.qZA(),l.YNc(31,x,25,16,"form",19),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=l.oxw();l.xp6(4),l.hij(" ",l.lcZ(5,7,l.lcZ(6,9,t.ticketCurrentStatus.state))," "),l.xp6(4),l.AsE(" ",l.lcZ(9,11,"REQUEST")," # ",t.ticketCurrentStatus.uuid," "),l.xp6(4),l.Q6J("ngForOf",t.detailsList),l.xp6(5),l.hij(" ",l.lcZ(18,13,"ACTIONS_MADE"),""),l.xp6(13),l.Q6J("ngForOf",t.paginatedStates),l.xp6(1),l.Q6J("ngIf",t.showAdminPanel())}}let w=(()=>{class t{constructor(t,e,n,o,a,i){this.activatedRoute=t,this.router=e,this.localizePipe=n,this.formBuilder=o,this.ticketService=a,this.notification=i,this.title="",this.ticketStatesConstant=m.Yh,this.ticketDetails={},this.ticketStates=[],this.states=[],this.spinnerLoader=!1,this.paginatorIndex=0}ngOnInit(){this.state$=this.activatedRoute.paramMap.pipe((0,g.U)(()=>{var t;return null===(t=window.history)||void 0===t?void 0:t.state})),this.state$.subscribe(t=>{t.states?(this.ticketStates=this.setStates(t.states||[]),this.ticketCurrentStatus=null==t?void 0:t.detail.currentStatus,this.ticketCurrentStatus.id=null==t?void 0:t.detail.id,this.ticketCurrentStatus.uuid=null==t?void 0:t.detail.uuid,this.states=this.ticketStates,this.setPaginatedStates(),this.ticketDetails={client:(null==t?void 0:t.detail.name)+" "+(null==t?void 0:t.detail.lastname),phoneNumber:null==t?void 0:t.detail.phoneNumber,email:null==t?void 0:t.detail.client,type:null==t?void 0:t.detail.type,agent:null==t?void 0:t.detail.agent}):this.router.navigate(["/account/tickets"]),this.buildForm()}),this.buildUser()}buildUser(){this.activatedRoute.data.subscribe(t=>{this.user=t.user})}buildForm(){this.detailsList=Object.entries(this.ticketDetails),this.newTicketStatusForm=this.formBuilder.group({claim_id:[this.ticketCurrentStatus.id],state:["",a.kI.compose([a.kI.required])],send_notification:[!0],description:[""]})}showAdminPanel(){return this.ticketDetails.agent==this.user.email}resetForm(t){t.forEach(t=>{var e;null===(e=this.newTicketStatusForm.get(t))||void 0===e||e.reset("")})}createNewStatus(){var t=this;if(this.newTicketStatusForm.markAllAsTouched(),this.newTicketStatusForm.valid){this.spinnerLoader=!0;const e=this.newTicketStatusForm.value.claim_id;this.ticketService.createStatus(this.newTicketStatusForm.value,e).toPromise().then((0,d.Z)(function*(){const n=yield t.ticketService.getById(e).toPromise();t.states=t.setStates(n.states||[]),t.setPaginatedStates(),t.resetForm(["state","description"]),t.spinnerLoader=!1,t.notification.showSuccessToast("CLAIM_STATE_CREATED")})).catch(()=>{this.spinnerLoader=!1,this.notification.showErrorToast("GENERIC_ERROR")})}}setStates(t){return this.sortListByDate(t.map(t=>({description:t.description,initialDate:t.initialDate,state:t.stateName}))||[])}sortListByDate(t){return t.sort((t,e)=>new Date(e.initialDate)-new Date(t.initialDate))}formatDate(t){return this.localizePipe.transform(new Date(t||""),"MMM d, y, h:mm a")}updatePaginator(t){let e=!1;(-1==t&&this.paginatorIndex>0||1==t&&4*this.paginatorIndex+4<this.states.length)&&(e=!0),e&&(this.paginatorIndex=this.paginatorIndex+t,this.setPaginatedStates())}setPaginatedStates(){this.paginatedStates=this.states.slice(4*this.paginatorIndex,4*this.paginatorIndex+4)}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(r.gz),l.Y36(r.F0),l.Y36(u.g),l.Y36(a.qu),l.Y36(s.g),l.Y36(f.T))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-ticket-details"]],decls:2,vars:2,consts:[[3,"title"],[4,"ngIf"],[1,"row","ticket-header"],[1,"col-md-4","col-12","d-flex","py-2","ticket-header-container"],[1,"secondary-badge","status-tag"],[1,"mx-3","request-id"],[1,"row","ticket-wrapper","mb-3","mt-1"],[1,"col-md-4","col-12","ticket-details-wrapper","mr-2","pb-3"],["class","row",4,"ngFor","ngForOf"],[1,"col-md-8","col-12","ticket-status-wrapper","bg-body","pb-3"],[1,"row","mx-2","mt-3","align-items-center"],[1,"col","px-0"],[1,"status-title","px-0"],[1,"col-2","nav-wrapper","px-0"],[1,"pagination","pagination-sm"],[1,"page-item",3,"click"],[1,"page-link"],[1,"mt-2"],["class","row status-wrapper-container mt-2",4,"ngFor","ngForOf"],["class","needs-validation status-container-wrapper","novalidate","",3,"formGroup",4,"ngIf"],[1,"row"],[1,"col","mb-3"],[1,"form-label"],["type","text","readonly","",1,"form-control","detail-form",3,"value"],[1,"row","status-wrapper-container","mt-2"],[1,"col"],[1,"row","status-wrapper","mx-2"],[1,"col-md-3","col-12","status-item","text-center"],[1,"col-md-3","col-12"],[1,"col-md-6","col-12","status-item"],["novalidate","",1,"needs-validation","status-container-wrapper",3,"formGroup"],[1,"row","mx-2","align-items-end"],[1,"col-12","px-0"],["for","exampleFormControlTextarea1",1,"form-label","mt-2"],["formControlName","description","id","exampleFormControlTextarea1","rows","3",1,"form-control"],[1,"row","mx-2","update-status-container"],[1,"col-md-3","col-5","px-0"],["formControlName","state","aria-label","Default select example",1,"form-select","form-control",3,"ngClass"],["value","","disabled",""],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-md-6","col-7","px-0","switch-wrapper"],[1,"form-switch"],["type","checkbox","id","flexSwitchCheckDefault","formControlName","send_notification","checked","",1,"form-check-input"],[1,"col-md-3","col-12","px-0",2,"margin-left","auto"],[1,"btn","secondary-btn","btn-sm",3,"click"],[4,"ngIf","ngIfElse"],["class","text-center"],["loading",""],[3,"ngValue"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"sr-only"]],template:function(t,e){1&t&&(l.TgZ(0,"app-page-wrapper",0),l.YNc(1,Z,32,15,"div",1),l.qZA()),2&t&&(l.Q6J("title",e.title),l.xp6(1),l.Q6J("ngIf",e.ticketStates&&e.ticketCurrentStatus))},directives:[h.t,o.O5,o.sg,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.EJ,o.mk,a.YN,a.Kr,a.Wl],pipes:[o.rS,i.X$],styles:["body[_ngcontent-%COMP%]{font-family:Poppins,Arial!important;color:#000;background:#e5e5e5}.thin-font[_ngcontent-%COMP%]{font-weight:100}.light-font[_ngcontent-%COMP%]{font-weight:300}.bold-font[_ngcontent-%COMP%]{font-weight:700}.primary-btn[_ngcontent-%COMP%]{width:100%;color:#e5e5e5!important;background:#182249!important;font-size:14px!important}.primary-btn[_ngcontent-%COMP%]:hover, .secondary-btn[_ngcontent-%COMP%]{color:#fff!important}.secondary-btn[_ngcontent-%COMP%]{width:100%;background:#63709f!important;font-size:14px!important}.secondary-btn[_ngcontent-%COMP%]:hover{background:#182249!important;color:#fff!important}.light-btn[_ngcontent-%COMP%]{width:100%;color:#63709f;border:1px solid #63709f;background:#fff0;font-size:14px}.light-btn[_ngcontent-%COMP%]:hover{background:#63709f;color:#fff!important}.invalid-feedback[_ngcontent-%COMP%]{position:fixed;font-size:12px}.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-top-left-radius:0;cursor:pointer;-webkit-user-select:none;user-select:none}.primary-badge[_ngcontent-%COMP%]{background-color:#182249!important}.secondary-badge[_ngcontent-%COMP%]{background-color:#63709f!important}.info-badge[_ngcontent-%COMP%]{background-color:#f2d873!important}.base-form[_ngcontent-%COMP%], .basic-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .mat-dialog-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .ticket-wrapper[_ngcontent-%COMP%]   .detail-form[_ngcontent-%COMP%], .ticket-wrapper[_ngcontent-%COMP%]   .status-wrapper[_ngcontent-%COMP%]{background-color:#fff0!important;color:#182249!important;font-size:.8rem!important;border:1px solid #63709f;font-weight:400!important}.basic-form[_ngcontent-%COMP%], .mat-dialog-container[_ngcontent-%COMP%]{background-color:#ebf1fa!important}.form-label[_ngcontent-%COMP%]{text-transform:uppercase;font-size:.75rem;color:#63709f;margin-bottom:0!important}.form-control[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:invalid:focus, .toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{box-shadow:none!important}.toast-message[_ngcontent-%COMP%]{font-size:13px!important}.table[_ngcontent-%COMP%]{margin-bottom:0!important;font-family:Poppins,Arial}.mat-table[_ngcontent-%COMP%]{box-shadow:0 1px 3px 1px #b5b5b58f}mat-header-row[_ngcontent-%COMP%]{background-color:#fff}.table-header[_ngcontent-%COMP%]{border-top-left-radius:9px;border-top-right-radius:9px;background-color:#f6f7f9;box-shadow:0 1px 3px 1px #b5b5b58f}mat-cell[_ngcontent-%COMP%]{color:#182249!important;font-weight:400}.mat-header-cell[_ngcontent-%COMP%]{color:#182249!important;font-size:14px}.mat-row[_ngcontent-%COMP%]{min-height:60px!important}.mat-cell[_ngcontent-%COMP%]{padding:10px;font-size:13px}.table-row-item[_ngcontent-%COMP%]{background-color:#ebf1fa}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:#182249b5!important}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#182249!important}@media screen and (max-width:960px){.small-searcher[_ngcontent-%COMP%]{width:100%!important}}@media (min-width:760px) and (min-height:600px){.mat-dialog-content[_ngcontent-%COMP%]{display:contents!important}}@media (max-width:600px){td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type{padding-right:10px!important}td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:10px!important}td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{overflow-wrap:anywhere;font-size:12px}}.mat-sort-header-container[_ngcontent-%COMP%]{justify-content:center}.mat-row[_ngcontent-%COMP%]{text-align:center}ang-music-player[_ngcontent-%COMP%]{font-family:Poppins,Arial!important;color:#182249!important}ang-music-player[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:#c8d4eb!important;border:1px solid #182249!important;border-radius:7px!important;height:100px!important}ang-music-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:15px!important;margin:0!important;fill:#182249!important}ang-music-player[_ngcontent-%COMP%]   .slidecontainer[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%], ang-music-player[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]{color:#182249!important}ang-music-player[_ngcontent-%COMP%]   .slidecontainer[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%], ang-music-player[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{background:#182249!important}ang-music-player[_ngcontent-%COMP%]   .slidecontainer[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb, ang-music-player[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{background:#63709f}ang-music-player[_ngcontent-%COMP%]   .slidecontainer[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-ms-thumb, ang-music-player[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-ms-thumb{background:#63709f}ang-music-player[_ngcontent-%COMP%]   .slidecontainer[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-moz-range-thumb, ang-music-player[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{background:#63709f}ang-music-player[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{font-size:13px!important;margin:0!important}ang-music-player[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%], ang-music-player[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}ang-music-player[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:40px!important}ang-music-player[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]{left:-38px!important}.ticket-header[_ngcontent-%COMP%]{background-color:#fff!important;box-shadow:0 .125rem .25rem #00000014!important}.ticket-header[_ngcontent-%COMP%], .ticket-header[_ngcontent-%COMP%]   .ticket-header-container[_ngcontent-%COMP%]{align-items:center}.ticket-header[_ngcontent-%COMP%]   .status-tag[_ngcontent-%COMP%]{color:#fff;font-weight:400;text-align:center;padding:.2rem .75rem;font-size:1rem;border-radius:.25rem}.ticket-header[_ngcontent-%COMP%]   .request-id[_ngcontent-%COMP%]{color:#182249}.ticket-wrapper[_ngcontent-%COMP%]{min-height:70vh}.ticket-wrapper[_ngcontent-%COMP%]   .ticket-details-wrapper[_ngcontent-%COMP%]{background-color:#ebf1fa!important;border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important;padding-top:3rem;box-shadow:0 .125rem .25rem #00000014!important}.ticket-wrapper[_ngcontent-%COMP%]   .ticket-status-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fafafd;border-top-right-radius:.25rem!important;box-shadow:0 .125rem .25rem #00000014!important}.ticket-wrapper[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]{line-height:5!important}.ticket-wrapper[_ngcontent-%COMP%]   .status-wrapper[_ngcontent-%COMP%]{background-color:#ebf1fa!important;border-radius:100px;min-height:50px;border-radius:.25rem;align-content:center;align-items:center}.ticket-wrapper[_ngcontent-%COMP%]   .status-tag[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-weight:400;line-height:1;text-align:center;padding:.375rem .75rem;font-size:.85rem;border-radius:.25rem;min-width:100%}.ticket-wrapper[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]{padding:.375rem .75rem;font-weight:300!important}.ticket-wrapper[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:.85rem;color:#63709f;padding:0!important}.ticket-wrapper[_ngcontent-%COMP%]   .update-status-container[_ngcontent-%COMP%]{border-bottom:1px solid #63709f;border-radius:.25rem}.ticket-wrapper[_ngcontent-%COMP%]   .update-status-container[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{border-bottom:0!important;border-top-left-radius:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important;text-transform:uppercase}.ticket-wrapper[_ngcontent-%COMP%]   .update-status-container[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]{padding:.375rem 2.25rem .2rem .75rem!important;line-height:1.5;border-top-left-radius:0!important;border-top-right-radius:0!important;border-bottom-left-radius:0!important;text-transform:uppercase}.ticket-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-top:1px solid #63709f;border-left:1px solid #63709f;border-right:1px solid #63709f;font-size:13px}.ticket-wrapper[_ngcontent-%COMP%]   .status-container-wrapper[_ngcontent-%COMP%]{margin-top:auto}.form-switch[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:1rem}.form-switch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:12px;margin-left:.5rem}.switch-wrapper[_ngcontent-%COMP%]{display:flex;border-right:1px solid #63709f}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#63709f;border-color:#63709f}.pagination[_ngcontent-%COMP%]{padding-left:none!important;-webkit-user-select:none;user-select:none}.nav-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.page-link[_ngcontent-%COMP%]{color:#63709f!important;cursor:pointer}.page-link[_ngcontent-%COMP%]:hover{background-color:#63709f!important;color:#fff!important}dl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin-bottom:0!important}"]}),t})();var k=n(8378),v=n(2951),A=n(9241),T=n(9199),y=n(5291),q=n(416),S=n(1608);function U(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div",34),l.TgZ(1,"div",35),l.TgZ(2,"div",36),l.TgZ(3,"div",37),l.TgZ(4,"input",38),l.NdJ("click",function(){return l.CHM(t),l.oxw().filterAgentRequests("MY_REQUESTS")}),l.qZA(),l.TgZ(5,"label",39),l._uU(6),l.ALo(7,"translate"),l.qZA(),l.TgZ(8,"input",40),l.NdJ("click",function(){return l.CHM(t),l.oxw().filterAgentRequests("")}),l.qZA(),l.TgZ(9,"label",41),l._uU(10),l.ALo(11,"translate"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()}2&t&&(l.xp6(6),l.Oqu(l.lcZ(7,2,"MY_REQUESTS")),l.xp6(4),l.Oqu(l.lcZ(11,4,"ALL")))}function N(t,e){if(1&t&&(l.TgZ(0,"option"),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t," ")}}function F(t,e){if(1&t&&(l.TgZ(0,"option"),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.state," ")}}function D(t,e){1&t&&(l.TgZ(0,"mat-header-cell",42),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.hij(" ",l.lcZ(2,1,"ID")," "))}function E(t,e){if(1&t&&(l.TgZ(0,"mat-cell",43),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.id," ")}}function L(t,e){1&t&&(l.TgZ(0,"mat-header-cell",42),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.hij(" ",l.lcZ(2,1,"TYPE")," "))}function Y(t,e){if(1&t&&(l.TgZ(0,"mat-cell",44),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.type," ")}}function I(t,e){1&t&&(l.TgZ(0,"mat-header-cell",42),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.hij(" ",l.lcZ(2,1,"Agente")," "))}function z(t,e){if(1&t&&(l.TgZ(0,"mat-cell",45),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.agent," ")}}function Q(t,e){1&t&&(l.TgZ(0,"mat-header-cell",42),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.hij(" ",l.lcZ(2,1,"REQUESTER")," "))}function R(t,e){if(1&t&&(l.TgZ(0,"mat-cell",46),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.user," ")}}function J(t,e){1&t&&(l.TgZ(0,"mat-header-cell",42),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.hij(" ",l.lcZ(2,1,"DATE")," "))}function j(t,e){if(1&t&&(l.TgZ(0,"mat-cell",47),l._uU(1),l.ALo(2,"titlecase"),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",l.lcZ(2,1,t.date)," ")}}function B(t,e){1&t&&(l.TgZ(0,"mat-header-cell",42),l._uU(1),l.ALo(2,"translate"),l.qZA()),2&t&&(l.xp6(1),l.hij(" ",l.lcZ(2,1,"STATE")," "))}function $(t,e){if(1&t&&(l.TgZ(0,"mat-cell",48),l.TgZ(1,"span",49),l._uU(2),l.ALo(3,"translate"),l.qZA(),l.qZA()),2&t){const t=e.$implicit,n=l.oxw();l.xp6(1),l.Q6J("ngClass",n.setStateBadgeClass(t.state)),l.xp6(1),l.hij(" ",l.lcZ(3,2,t.state)," ")}}function G(t,e){1&t&&l._UZ(0,"mat-header-row")}function H(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"mat-row",50),l.NdJ("click",function(){const e=l.CHM(t).$implicit;return l.oxw().seeTicket(e)}),l.qZA()}if(2&t){const t=e.index,n=l.oxw();l.Q6J("ngClass",n.setTableRowColor(t))}}const V=function(){return[10,25,100]},X=[{path:"",resolve:{user:c.O},children:[{path:"",redirectTo:"/account/tickets",pathMatch:"full"},{path:"",component:(()=>{class t{constructor(t,e,n,o){this.translateService=t,this.activatedRoute=e,this.localizePipe=n,this.router=o,this.title=(0,q.F)(this.translateService,"ATTENTION_REQUESTS"),this.selection=new k.Ov(!0,[]),this.searchIcon=y.wn1,this.displayedColumns=["id","type","agent","user","date","state"],this.filterAgentClaims=!1}ngOnInit(){this.buildUser(),this.buildSelectorData(),this.buildTable(),this.filterByUser(),this.userIsAdmin()||this.filterAgentRequests("MY_REQUESTS")}ngAfterViewInit(){this.initDataTable()}initDataTable(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}buildSelectorData(){this.ticketStates=m.Yh.map(t=>({state:(0,q.F)(this.translateService,t.state||""),color:t.color})),this.ticketTypes=m.cA.map(t=>(0,q.F)(this.translateService,t||""))}buildTable(){this.activatedRoute.data.subscribe(t=>{const e=null!=t.tickets?t.tickets:[];this.allTickets=e;let n=e.map(t=>{var e,n;const o=this.getCurrentTicketStatus(t);return{id:t.id||0,type:(0,q.F)(this.translateService,t.type||""),user:(null===(e=t.client)||void 0===e?void 0:e.email)||"",date:this.localizePipe.transform(new Date(o.date||""),"MMMM d, y"),state:(0,q.F)(this.translateService,o.state||""),agent:(null===(n=t.employee)||void 0===n?void 0:n.email)||""}});n.sort((t,e)=>e.id-t.id),this.dataSource=new T.by(n)})}buildUser(){this.activatedRoute.data.subscribe(t=>{this.user=t.user})}filterByUser(){this.state$=this.activatedRoute.paramMap.pipe((0,g.U)(()=>{var t;return null===(t=window.history)||void 0===t?void 0:t.state})),this.state$.subscribe(t=>{t.userToFilter&&this.applyFilter({value:t.userToFilter})})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}setStateBadgeClass(t){var e;return((null===(e=this.ticketStates.find(e=>e.state==t))||void 0===e?void 0:e.color)||"")+"-badge"}setTableRowColor(t){let e="";return t%2==0&&(e="table-row-item"),e}applyFilter(t){const e=null===t.value?"":t.value;t=e.trim(),t=e.toLowerCase(),this.dataSource.filterPredicate=this.filterAgentClaims?(t,e)=>{var n;const o=this.defaultFilter(t),a=e.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return-1!=o.indexOf(a)&&t.agent==(null===(n=this.user)||void 0===n?void 0:n.email)}:(t,e)=>{const n=this.defaultFilter(t),o=e.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return-1!=n.indexOf(o)},this.dataSource.filter=e}defaultFilter(t){return Object.keys(t).reduce((e,n)=>e+t[n]+"\u25ec","").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}filterAgentRequests(t){var e;const n="MY_REQUESTS"==t?null===(e=this.user)||void 0===e?void 0:e.email:"";this.filterAgentClaims="MY_REQUESTS"==t,this.applyFilter({value:n})}getCurrentTicketStatus(t){var e,n,o,a;return{state:null===(n=null===(e=t.states)||void 0===e?void 0:e.find(t=>null==t.finalDate||"COMPLETED"==t.stateName))||void 0===n?void 0:n.stateName,date:null===(a=null===(o=t.states)||void 0===o?void 0:o.find(t=>"NEW"==t.stateName))||void 0===a?void 0:a.initialDate}}seeTicket(t){const e=this.allTickets.filter(e=>e.id==t.id)[0],n=this.getCurrentTicketStatus(e);this.router.navigateByUrl("/account/tickets/details",{state:{detail:{id:e.claimId,uuid:e.id,client:e.client.email,lastname:e.client.lastname,name:e.client.name,phoneNumber:e.client.phoneNumber,description:e.description,agent:e.employee.email,type:e.type,currentStatus:n},states:e.states}})}userIsAdmin(){var t;return"ADMIN"==((null===(t=this.user)||void 0===t?void 0:t.role)||"")}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(i.sK),l.Y36(r.gz),l.Y36(u.g),l.Y36(r.F0))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-tickets"]],viewQuery:function(t,e){if(1&t&&(l.Gf(v.NW,5),l.Gf(A.YE,5),l.Gf(T.BZ,5)),2&t){let t;l.iGM(t=l.CRH())&&(e.paginator=t.first),l.iGM(t=l.CRH())&&(e.sort=t.first),l.iGM(t=l.CRH())&&(e.table=t.first)}},decls:53,vars:22,consts:[[3,"title"],["class","page-options container px-0 ",4,"ngIf"],[1,"container","table-container","px-0","mb-5","mt-2"],[1,"row","justify-content-center"],[1,"col"],[1,"table-header","row","pb-5","pt-3","px-4"],[1,"col-12","col-md-3"],[1,"form-label"],[1,"form-select","small-searcher",3,"change"],["selected","","value",""],[4,"ngFor","ngForOf"],[1,"col-12","col-md-6"],[1,"form-label-searcher"],[1,"input-group"],["type","text","placeholder","Buscar",1,"form-control",3,"keyup"],[1,"input-group-text"],[3,"icon"],["matSort","",1,"table",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["data-label","ID",4,"matCellDef"],["matColumnDef","type"],["data-label","Tipo",4,"matCellDef"],["matColumnDef","agent"],["data-label","Agente",4,"matCellDef"],["matColumnDef","user"],["data-label","Solicitante",4,"matCellDef"],["matColumnDef","date"],["data-label","Fecha",4,"matCellDef"],["matColumnDef","state"],["data-label","Estado",4,"matCellDef"],[4,"matHeaderRowDef"],[3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[1,"paginator-table",3,"pageSizeOptions"],[1,"page-options","container","px-0"],[1,"row","justify-content-center","justify-content-md-end"],[1,"col-12","col-md-6","text-end"],["role","group",1,"btn-group"],["type","radio","name","btnradio","id","btnradio1","autocomplete","off","checked","",1,"btn-check",3,"click"],["for","btnradio1",1,"btn","btn-outline-primary"],["type","radio","name","btnradio","id","btnradio2","autocomplete","off",1,"btn-check",3,"click"],["for","btnradio2",1,"btn","btn-outline-primary"],["mat-sort-header",""],["data-label","ID"],["data-label","Tipo"],["data-label","Agente"],["data-label","Solicitante"],["data-label","Fecha"],["data-label","Estado"],[1,"badge",3,"ngClass"],[3,"ngClass","click"]],template:function(t,e){1&t&&(l.TgZ(0,"app-page-wrapper",0),l.YNc(1,U,12,6,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l.TgZ(7,"label",7),l._uU(8),l.ALo(9,"translate"),l.qZA(),l.TgZ(10,"select",8),l.NdJ("change",function(t){return e.applyFilter(t.target)}),l.TgZ(11,"option",9),l._uU(12),l.ALo(13,"translate"),l.qZA(),l.YNc(14,N,2,1,"option",10),l.qZA(),l.qZA(),l.TgZ(15,"div",6),l.TgZ(16,"label",7),l._uU(17),l.ALo(18,"translate"),l.qZA(),l.TgZ(19,"select",8),l.NdJ("change",function(t){return e.applyFilter(t.target)}),l.TgZ(20,"option",9),l._uU(21),l.ALo(22,"translate"),l.qZA(),l.YNc(23,F,2,1,"option",10),l.qZA(),l.qZA(),l.TgZ(24,"div",11),l.TgZ(25,"label",12),l._uU(26,"Buscar"),l.qZA(),l.TgZ(27,"div",13),l.TgZ(28,"input",14),l.NdJ("keyup",function(t){return e.applyFilter(t.target)}),l.qZA(),l.TgZ(29,"span",15),l._UZ(30,"fa-icon",16),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(31,"mat-table",17),l.ynx(32,18),l.YNc(33,D,3,3,"mat-header-cell",19),l.YNc(34,E,2,1,"mat-cell",20),l.BQk(),l.ynx(35,21),l.YNc(36,L,3,3,"mat-header-cell",19),l.YNc(37,Y,2,1,"mat-cell",22),l.BQk(),l.ynx(38,23),l.YNc(39,I,3,3,"mat-header-cell",19),l.YNc(40,z,2,1,"mat-cell",24),l.BQk(),l.ynx(41,25),l.YNc(42,Q,3,3,"mat-header-cell",19),l.YNc(43,R,2,1,"mat-cell",26),l.BQk(),l.ynx(44,27),l.YNc(45,J,3,3,"mat-header-cell",19),l.YNc(46,j,3,3,"mat-cell",28),l.BQk(),l.ynx(47,29),l.YNc(48,B,3,3,"mat-header-cell",19),l.YNc(49,$,4,4,"mat-cell",30),l.BQk(),l.YNc(50,G,1,0,"mat-header-row",31),l.YNc(51,H,1,1,"mat-row",32),l.qZA(),l._UZ(52,"mat-paginator",33),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.Q6J("title",e.title),l.xp6(1),l.Q6J("ngIf",!e.userIsAdmin()),l.xp6(7),l.Oqu(l.lcZ(9,13,"TYPE")),l.xp6(4),l.Oqu(l.lcZ(13,15,"ALL")),l.xp6(2),l.Q6J("ngForOf",e.ticketTypes),l.xp6(3),l.Oqu(l.lcZ(18,17,"STATE")),l.xp6(4),l.Oqu(l.lcZ(22,19,"ALL")),l.xp6(2),l.Q6J("ngForOf",e.ticketStates),l.xp6(7),l.Q6J("icon",e.searchIcon),l.xp6(1),l.Q6J("dataSource",e.dataSource),l.xp6(19),l.Q6J("matHeaderRowDef",e.displayedColumns),l.xp6(1),l.Q6J("matRowDefColumns",e.displayedColumns),l.xp6(1),l.Q6J("pageSizeOptions",l.DdM(21,V)))},directives:[h.t,o.O5,a.YN,a.Kr,o.sg,S.BN,T.BZ,A.YE,T.w1,T.fO,T.Dz,T.as,T.nj,v.NW,T.ge,A.nU,T.ev,o.mk,T.XQ,T.Gk],pipes:[i.X$,o.rS],styles:["@media screen and (max-width:960px){.mat-table[_ngcontent-%COMP%]{border:0;vertical-align:middle}td[_ngcontent-%COMP%]{padding:10px!important}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px 10px!important}.mat-table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{border:10px solid;clip:rect(0 0 0 0);height:1px;margin:-1px;padding:10px;position:absolute;width:1px}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{border-bottom:5px solid #ddd;display:block}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;display:block;font-size:1em;text-align:right;margin-bottom:4%;font-size:.9rem}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:before{content:attr(data-label);float:left}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:last-child{border-bottom:0}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, th.mat-header-cell[_ngcontent-%COMP%]:last-of-type{max-width:none!important}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(caption) > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:0!important}.small-searcher[_ngcontent-%COMP%]{width:100%!important}.page-options[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{min-width:100%!important}.badge[_ngcontent-%COMP%]{min-width:50%!important;line-height:2!important}}.table[_ngcontent-%COMP%]{margin-bottom:0!important;font-family:Poppins,Arial}.mat-table[_ngcontent-%COMP%]{box-shadow:0 1px 3px 1px #b5b5b58f}mat-header-row[_ngcontent-%COMP%]{background-color:#fff}mat-row[_ngcontent-%COMP%]{cursor:pointer}mat-row[_ngcontent-%COMP%]:hover{background-color:#63709fb3}mat-row[_ngcontent-%COMP%]:hover   mat-cell[_ngcontent-%COMP%]{color:#fff!important}.table-header[_ngcontent-%COMP%]{border-top-left-radius:9px;border-top-right-radius:9px;background-color:#f6f7f9;box-shadow:0 1px 3px 1px #b5b5b58f}.row[_ngcontent-%COMP%]{--bs-gutter-x:0rem!important}mat-cell[_ngcontent-%COMP%]{font-weight:400}.mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{color:#182249!important;justify-content:center}.mat-header-cell[_ngcontent-%COMP%]{padding-left:30px}.table-row-item[_ngcontent-%COMP%]{background-color:#ebf1fa}td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, th.mat-header-cell[_ngcontent-%COMP%]:last-of-type{padding-right:24px;max-width:5%}mat-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:nth-child(2)   mat-footer-cell[_ngcontent-%COMP%]:first-of-type{max-width:12%}mat-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-child{max-width:10%}mat-cell[_ngcontent-%COMP%]:nth-of-type(2), mat-footer-cell[_ngcontent-%COMP%]:nth-of-type(2), mat-header-cell[_ngcontent-%COMP%]:nth-child(2){max-width:16%}mat-cell[_ngcontent-%COMP%]:nth-of-type(3), mat-cell[_ngcontent-%COMP%]:nth-of-type(4), mat-cell[_ngcontent-%COMP%]:nth-of-type(5), mat-footer-cell[_ngcontent-%COMP%]:nth-of-type(3), mat-footer-cell[_ngcontent-%COMP%]:nth-of-type(4), mat-footer-cell[_ngcontent-%COMP%]:nth-of-type(5), mat-header-cell[_ngcontent-%COMP%]:nth-child(3), mat-header-cell[_ngcontent-%COMP%]:nth-child(4), mat-header-cell[_ngcontent-%COMP%]:nth-child(5){min-width:12%}td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{border-bottom-style:none}.paginator-table[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;overflow:hidden!important;box-shadow:0 1px 3px 1px #b5b5b58f}.small-searcher[_ngcontent-%COMP%]{width:90%}.form-control[_ngcontent-%COMP%]{font-size:.8rem!important;font-weight:400!important;color:#182249!important;background-color:#fff0!important;border:1px solid #63709f!important;border-right:0!important}.form-label-searcher[_ngcontent-%COMP%]{color:#fff0}.input-group-text[_ngcontent-%COMP%]{font-size:.85rem;color:#182249!important;text-align:center;white-space:nowrap;background-color:#fff0;border:1px solid #63709f!important;border-left:0!important}.page-options[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{min-width:75%;margin-bottom:3rem}.btn-check[_ngcontent-%COMP%]:active + .btn-outline-primary[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:checked + .btn-outline-primary[_ngcontent-%COMP%], .btn-outline-primary.active[_ngcontent-%COMP%], .btn-outline-primary.dropdown-toggle.show[_ngcontent-%COMP%], .btn-outline-primary[_ngcontent-%COMP%]:active, .btn-outline-primary[_ngcontent-%COMP%]:hover{color:#fff;background-color:#63709f!important;border-color:#63709f!important}.btn-outline-primary[_ngcontent-%COMP%]{color:#63709f;border-color:#63709f}.badge[_ngcontent-%COMP%]{min-width:80%}"]}),t})(),resolve:{tickets:p}},{path:"details",component:w}]}];let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[r.Bz.forChild(X)],r.Bz]}),t})();var K=n(5061),tt=n(1882);let et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[p,c.O,u.g,o.uU,o.rS,tt.t],imports:[[o.ez,W,K.m,a.UX,i.aw,a.u5]]}),t})()}}]);