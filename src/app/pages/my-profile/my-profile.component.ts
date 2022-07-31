import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'app/services/show-services/file-upload.service';
import { ReviewService } from 'app/services/show-services/review.service';
import { map } from 'rxjs';

@Component({
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
	private file: File | null | undefined;
	public imgUrl: string;

	ngOnInit() {
		this.imgUrl = sessionStorage.getItem('userImageUrl') || '';
	}

	constructor(public readonly reviewService: ReviewService, public readonly fileUploadService: FileUploadService) {
		this.imgUrl = sessionStorage.getItem('userImageUrl') || '';
	}

	public onFileChange(file: File | null) {
		this.file = file;
	}

	public fileIsSet(): boolean {
		if (this.file) {
			return true;
		} else {
			return false;
		}
	}

	public onButtonClick() {
		if (this.file) {
			this.fileUploadService.uploadFile(this.file).subscribe((response) => {
				sessionStorage.setItem('userImageUrl', response.user.image_url);
			});

			setTimeout(() => {
				window.location.reload();
			}, 1000);
		}
	}

	public isSet(): boolean {
		if (this.imgUrl !== '' && this.imgUrl !== 'null') {
			return true;
		} else {
			return false;
		}
	}

	public remove() {
		this.imgUrl = '';
	}
}
