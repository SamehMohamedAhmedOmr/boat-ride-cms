import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
import {TimeSlotsHelperService} from '../../../../../../core/services/Helpers/time.slots.helper.service';
import {WaterSportsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.model';
import {WaterSportTripEnumsModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.trip.enums.model';
import {WaterSportTimeSlotsService} from '../../../../../../core/services/Water-Sport-Module/reservations/water.sport.time.slots.service';
import {WaterSportTimeSlotsModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.time.slots.model';

@Component({
	selector: 'kt-trip-information-form',
	templateUrl: './trip-information-form.component.html',
	styleUrls: ['./trip-information-form.component.scss']
})

export class TripInformationFormComponent implements OnInit, OnChanges {

	@Input() form: FormGroup;
	@Input() enumsModel: WaterSportTripEnumsModel;
	@Input() water_sports: WaterSportsModel[];
	@Input() start_timeSlots: TimeSlotsModel[] = [];
	@Input() end_timeSlots: TimeSlotsModel[] = [];

	@Input() water_sport_start_timeSlots: TimeSlotsModel[] = [];
	@Input() water_sport_next_day_timeSlots: TimeSlotsModel[] = [];

	@Input() from_edit: boolean = false;

	start_date: string;
	end_date: string;
	next_start_date: string;

	constructor(private waterSportTimeSlotsService: WaterSportTimeSlotsService,
				private timeSlotsHelperService: TimeSlotsHelperService,
				private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		if (this.from_edit){
			this.getTimeSlots();
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.listenOnYachtDateChanges();
	}

	listenOnYachtDateChanges(){
		this.form.get('water_sport_id').valueChanges.subscribe(x => {
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
		let water_sport_id = this.form.controls['water_sport_id'].value;
		this.start_date = this.form.controls['start_date'].value;
		this.end_date = this.form.controls['end_date'].value;

		if (water_sport_id) {
			if (this.start_date) {
				let model = new WaterSportTimeSlotsModel(null);
				model.water_sport_id = water_sport_id;
				model.date = this.start_date;
				this.waterSportTimeSlotsService.list(model).subscribe(
					(resp) => {
						this.start_timeSlots = resp;
						this.water_sport_start_timeSlots = resp;
						this.cdr.markForCheck();
					}, error => {
					});

				let next = new Date(this.start_date);
				next.setDate(next.getDate()+1);

				this.next_start_date = this.timeSlotsHelperService.transformDate(next);

				let next_day = new WaterSportTimeSlotsModel(null);
				next_day.water_sport_id = water_sport_id;
				next_day.date = this.next_start_date;
				this.waterSportTimeSlotsService.list(next_day).subscribe(
					(resp) => {
						this.water_sport_next_day_timeSlots = resp;
						this.cdr.markForCheck();
					}, error => {
					});
			}

			if (this.end_date){
				let model = new WaterSportTimeSlotsModel(null);
				model.water_sport_id = water_sport_id;
				model.date = this.end_date;
				this.waterSportTimeSlotsService.list(model).subscribe(
					(resp) => {
						this.end_timeSlots = resp;
						this.cdr.markForCheck();
					}, error => {
					});
			}
		}


	}

}
