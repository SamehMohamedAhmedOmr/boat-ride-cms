import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.enums.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';

@Component({
	selector: 'kt-trip-information-form',
	templateUrl: './trip-information-form.component.html',
	styleUrls: ['./trip-information-form.component.scss']
})
export class TripInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsTripEnumsModel;
	@Input() yachts: YachtsModel[];
	@Input() timeSlots: TimeSlotsModel[];

	constructor() {
	}

	ngOnInit() {
	}

}
