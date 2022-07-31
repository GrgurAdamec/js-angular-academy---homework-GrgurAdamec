import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'app/services/show-services/file-upload.service';
import { ReviewService } from 'app/services/show-services/review.service';
import { map } from 'rxjs';

@Component({
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
	private file: File | null | undefined;
	public imgUrl: string;

	constructor(public readonly reviewService: ReviewService, public readonly fileUploadService: FileUploadService) {
		this.imgUrl = sessionStorage.getItem('userImageUrl') || '';
	}

	public onFileChange(file: File | null) {
		this.file = file;
	}

	public onButtonClick() {
		if (this.file) {
			this.fileUploadService.uploadFile(this.file).subscribe((response) => {
				console.log(response.user.image_url);
			});
		}
	}

	public isSet(): boolean {
		if (sessionStorage.getItem('userImageUrl') !== null) {
			return true;
		} else {
			return false;
		}
	}

	public remove() {
		this.imgUrl = '';
	}
}
