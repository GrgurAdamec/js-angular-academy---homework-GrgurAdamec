import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-upload',
	templateUrl: './upload.component.html',
	styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
	@Output() fileChange: EventEmitter<File | null> = new EventEmitter();

	public onFileInputChange(event: any) {
		this.emitFIle(((event.target as HTMLInputElement).files as FileList)[0] || null);
	}

	public onDrop(event: DragEvent) {
		event.preventDefault();
		this.emitFIle(event.dataTransfer?.files?.[0] || null);
	}

	public onDragOver(event: DragEvent) {
		event.preventDefault();
	}

	private emitFIle(file: File | null) {
		this.fileChange.emit(file);
	}
}
