import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.enums.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
import {YachtsTimeSlotsService} from '../../../../../../core/services/Yacht-Module/reservations/yachts.time.slots.service';
import {YachtsTimeSlotsModel} from '../../../../../../core/models/Yacht-Module/yachts.time.slots.model';

@Component({
	selector: 'kt-trip-information-form',
	templateUrl: './trip-information-form.component.html',
	styleUrls: ['./trip-information-form.component.scss']
})
export class TripInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsTripEnumsModel;
	@Input() yachts: YachtsModel[];
	@Input() start_timeSlots: TimeSlotsModel[];
	@Input() end_timeSlots: TimeSlotsModel[];

	start_date: string;
	end_date: string;

	constructor(private yachtsTimeSlotsService: YachtsTimeSlotsService,
				private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.form.get('yacht_id').valueChanges.subscribe(x => {
			this.getTimeSlots();
		});

		this.form.get('start_date').valueChanges.subscribe(x => {
			this.getTimeSlots();
		});

		this.form.get('end_date').valueChanges.subscribe(x => {
			this.getTimeSlots();
		});
	}


	getTimeSlots() {
		let yacht_id = this.form.controls['yacht_id'].value;
		this.start_date = this.form.controls['start_date'].value;
		this.end_date = this.form.controls['end_date'].value;

		console.log(yacht_id);
		console.log(this.start_date);
		console.log(this.end_date);

		if (yacht_id) {
			if (this.start_date) {
				let model = new YachtsTimeSlotsModel(null);
				model.yacht_id = yacht_id;
				model.date = this.start_date;
				this.yachtsTimeSlotsService.list(model).subscribe(
					(resp) => {
						this.start_timeSlots = resp;
						this.cdr.markForCheck();
					}, error => {
					});
			}
			if (this.end_date) {
				let model = new YachtsTimeSlotsModel(null);
				model.yacht_id = yacht_id;
				model.date = this.end_date;
				this.yachtsTimeSlotsService.list(model).subscribe(
					(resp) => {
						this.end_timeSlots = resp;
						this.cdr.markForCheck();
					}, error => {
					});
			}
		}


	}

}
