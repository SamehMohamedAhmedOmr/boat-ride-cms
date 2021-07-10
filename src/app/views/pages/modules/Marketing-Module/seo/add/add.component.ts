import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {SeoService} from '../../../../../../core/services/Marketing-Module/seo.service';
import {SeoModel} from '../../../../../../core/models/SEO-Module/seo.model';
import {ErrorMsgHelperService} from '../../../../../../core/services/Helpers/error.msg.helper.service';


@Component({
	selector: 'kt-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {

	page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError: boolean = false;

	isLoadingResults: any = true;
	form: FormGroup;
	is_result:boolean;

	selected_images: [] = [];

	keywords_arabic: [] = [];
	keywords_english: [] = [];

	constructor(private fb: FormBuilder,
				private service: SeoService,
				private formErrorService: FormErrorService,
				private errorMsgHelperService: ErrorMsgHelperService,
				private cdr: ChangeDetectorRef,
				private route: ActivatedRoute,
				private router: Router,
				public translateService: TranslateService,
				private authNoticeService: AuthNoticeService,
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

	initializePageName(){
		this.page_name = this.translateService.instant('Components.SEO.name');
		this.content_name = this.translateService.instant('Components.SEO.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = true;
		this.cdr.markForCheck();
		this.initForm();
	}

	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.form = this.fb.group({
			name_en: ['', Validators.required] ,
			name_ar: ['', Validators.required] ,

			description_en: ['', Validators.required] ,
			description_ar: ['', Validators.required] ,

			url: ['', Validators.required] ,
		});
	}



	clearForm() {
		this.form.reset();
	}

	submitForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			let invalid_controls = this.formErrorService.markAsTouched(controls);
			// @ts-ignore
			this.errorMsgHelperService.handleErrors(invalid_controls);
			return;
		}

		const model = new SeoModel(null);

		model.title.en = controls['name_en'].value;
		model.title.ar = controls['name_ar'].value;

		model.description.en = controls['description_en'].value;
		model.description.ar = controls['description_ar'].value;

		model.keywords.ar = this.keywords_arabic;
		model.keywords.en = this.keywords_english;

		model.url = controls['url'].value;

		// call service to store Banner
		this.isLoadingResults = true;
		this.service.create(model).subscribe(resp => {
			this.form.reset();
			this.isLoadingResults = false;
			this.authNoticeService.setNotice(this.translateService.instant('COMMON.Added_successfully',
				{name : this.content_name}),
				'success');
			this.router.navigate(['../'], { relativeTo: this.route }).then();
		} , handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
			this.isValidationError = true;
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

		if (this.isValidationError){
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
