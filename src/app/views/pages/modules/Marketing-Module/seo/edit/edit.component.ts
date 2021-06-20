import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {SeoModel} from '../../../../../../core/models/SEO-Module/seo.model';
import {SeoService} from '../../../../../../core/services/Marketing-Module/seo.service';

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

	model: SeoModel;

	id = null;
	is_result: boolean;

	selected_images: [] = [];

	keywords_arabic: [] = [];
	keywords_english: [] = [];

	constructor(private formBuilder: FormBuilder,
				private service: SeoService,
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
		this.page_name = this.translateService.instant('Components.SEO.name');
		this.content_name = this.translateService.instant('Components.SEO.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.get();
	}



	private get() {
		this.isLoadingResults = true;
		this.route.params.subscribe((resp) => {
			this.id = resp['id'];
			// call api to get shipping rule
			this.service.get(this.id).subscribe(
				(data) => {
					this.model = data;
					this.isLoadingResults = false;
					this.is_result = true;
					this.cdr.markForCheck();
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
			name_en: [this.model.title?.en, Validators.required],
			name_ar: [this.model.title?.ar, Validators.required],

			description_en: [this.model.description?.en, Validators.required],
			description_ar: [this.model.description?.ar, Validators.required],

			url: [this.model.url, Validators.required],
		});

		this.keywords_arabic = this.model?.keywords?.ar ? this.model?.keywords?.ar : [];
		this.keywords_english = this.model?.keywords?.en ? this.model?.keywords?.en : [];

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

		this.model.createObjects();

		this.model.title.en = controls['name_en'].value;
		this.model.title.ar = controls['name_ar'].value;

		this.model.description.en = controls['description_en'].value;
		this.model.description.ar = controls['description_ar'].value;
		this.model.url = controls['url'].value;

		this.model.keywords.ar = this.keywords_arabic;
		this.model.keywords.en = this.keywords_english;

		// call service to store shipping rule
		this.isLoadingResults = true;
		this.service.update(this.id, this.model).subscribe(resp => {
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

	keywordsArabicEvent($event: []) {
		this.keywords_arabic = $event;
	}

	keywordsEnglishEvent($event: []) {
		this.keywords_english = $event;
	}
}
