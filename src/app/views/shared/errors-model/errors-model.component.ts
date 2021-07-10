import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
	selector: 'kt-errors-model',
	templateUrl: './errors-model.component.html',
	styleUrls: ['./errors-model.component.scss']
})
export class ErrorsModelComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<ErrorsModelComponent>,
		@Inject(MAT_DIALOG_DATA)
		public data: any
	) {
	}

	ngOnInit() {
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
