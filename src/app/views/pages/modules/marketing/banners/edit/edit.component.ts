import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {BannersService} from '../../../../../../core/services/Marketing-Module/banners.service';
import {BannersModel} from '../../../../../../core/models/Marketing-Module/banners.model';
import {BannersTypesModel} from '../../../../../../core/models/Marketing-Module/banners..types.model';
import {BannersManager} from '../../../../../../core/managers/Marketing-Module/banners.manager';

@Component({
	selector: 'kt-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {

	page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError: boolean = false;

	isLoadingResults: any = true;
	form: FormGroup;

	model: BannersModel;

	id = null;
	is_result: boolean;
	banners_types: BannersTypesModel[] = [];

	selected_images: [] = [];
	current_images: [] = [];

	constructor(private formBuilder: FormBuilder,
				private service: BannersService,
				private bannersManager: BannersManager,
				private formErrorService: FormErrorService,
				private route: ActivatedRoute,
				private router: Router,
				private cdr: ChangeDetectorRef,
				private authNoticeService: AuthNoticeService,
				public translateService: TranslateService,
				private helper: HelperService) {
		this.navigationSubscription = this.helper.routingSubscribe(this);
	}

	ngOnInit() {
		this.initialiseComponent();
		this.initializePageName();
	}

	ngDoCheck(): void {
		this.initializePageName();
	}

	initializePageName() {
		this.page_name = this.translateService.instant('Components.BANNERS.name');
		this.content_name = this.translateService.instant('Components.BANNERS.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.getDependencies();
	}

	private getDependencies() {
		this.isLoadingResults = true;
		this.bannersManager.getBannersTypeObservable().subscribe(model => {
			if (model){
				this.banners_types = model;
			}
		});


		this.bannersManager.getAllLoadingObservable().subscribe(model => {
			if (model){
				this.isLoadingResults = !model;
				this.cdr.markForCheck();
				if (!this.is_result){
					this.get();
				}
			}
		});

	}


	private get() {
		this.isLoadingResults = true;
		this.route.params.subscribe((resp) => {
			this.id = resp['id'];
			let current_image:[] = [];
			// call api to get shipping rule
			this.service.get(this.id).subscribe(
				(data) => {
					this.is_result = true;
					this.model = data;
					// @ts-ignore
					current_image.push(this.model.image);
					this.current_images = current_image;
					this.initializeForm();
				}, error => {
					this.authNoticeService.setNotice(this.translateService.instant('COMMON.Item_not_found',
						{name: this.content_name}),
						'danger');
					this.isLoadingResults = false;
					this.isValidationError = true;
					this.cdr.markForCheck();
				}
			);
		});
	}

	/**
	 * Initiate the form
	 *
	 */
	initializeForm() {
		this.form = this.formBuilder.group({

			name_ar: [this.model.names?.ar, Validators.required],
			name_en: [this.model.names?.en, Validators.required],

			type_id: [this.model.type_id, Validators.required],
			link: [this.model.link + '', Validators.required],

			is_active: [this.model.is_active + '', Validators.required],
		});

		this.isLoadingResults = false;
		this.cdr.markForCheck();

	}


	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to validators name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		return this.formErrorService.isControlHasError(this.form, controlName, validationType);
	}

	updateForm() {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}

		const model = new BannersModel(null);
		model.is_active = controls['is_active'].value;

		model.names.ar = controls['name_ar'].value;
		model.names.en = controls['name_en'].value;
		model.type_id = controls['type_id'].value;
		model.link = controls['link'].value;

		model.image = null;
		if (this.selected_images.length){
			// @ts-ignore
			model.image = this.selected_images[0];
		}
		// call service to store shipping rule
		this.isLoadingResults = true;
		this.service.update(this.model.id, model).subscribe(resp => {
			this.isLoadingResults = false;
			this.authNoticeService.setNotice(this.translateService.instant('COMMON.Edited_successfully',
				{name: this.content_name}),
				'success');
			this.cdr.markForCheck();
			this.router.navigate(['../'], {relativeTo: this.route}).then();
		}, handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
			this.isValidationError = true;
			this.cdr.markForCheck();
		});
	}


	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.isLoadingResults = false;

		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}

		if (this.isValidationError) {
			this.authNoticeService.setNotice(null);
		}

	}

	handleSelectedImage($event) {
		this.selected_images = $event;
	}

}
