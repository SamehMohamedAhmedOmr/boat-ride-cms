import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {BlogService} from '../../../../../../core/services/Marketing-Module/blog.service';
import {BlogModel} from '../../../../../../core/models/Marketing-Module/blogs.model';


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

	constructor(private fb: FormBuilder,
				private service: BlogService,
				private formErrorService: FormErrorService,
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
		this.page_name = this.translateService.instant('Components.BLOGS.name');
		this.content_name = this.translateService.instant('Components.BLOGS.single');
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

			seo_description_en: ['', Validators.required] ,
			seo_description_ar: ['', Validators.required] ,

			label_en: ['', Validators.required] ,
			label_ar: ['', Validators.required] ,

			author: ['', Validators.required] ,

			is_active: ['0', Validators.required] ,
			image: ['', Validators.required] ,
		});
	}



	clearForm() {
		this.form.reset();
	}

	submitForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}

		const model = new BlogModel(null);

		model.name.en = controls['name_en'].value;
		model.name.ar = controls['name_ar'].value;

		model.label.en = controls['label_en'].value;
		model.label.ar = controls['label_ar'].value;

		model.description.en = controls['description_en'].value;
		model.description.ar = controls['description_ar'].value;

		model.is_active = controls['is_active'].value;
		model.author = controls['author'].value;

		model.seo.title = model.name;
		model.seo.description.en = controls['seo_description_en'].value;
		model.seo.description.ar = controls['seo_description_ar'].value;

		model.image = controls['image'].value;

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


	handleSelectedImage($event: []) {
		this.selected_images = $event;
	}
}
