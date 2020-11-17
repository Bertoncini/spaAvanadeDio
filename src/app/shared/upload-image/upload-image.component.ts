import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'diospa-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  @Input() imageUrl: string = '../assets/images/imageBlank.png';
  @Input() imageIsCircle: boolean = false;
  @Output() imageUrlChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.imageUrl || this.imageUrl === '') {
      this.imageUrl = '../assets/images/imageBlank.png';
    }
    console.log(this.imageIsCircle)
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrl = e.target.result;
          this.imageUrlChange.emit(this.imageUrl);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
}
