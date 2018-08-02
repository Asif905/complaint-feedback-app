import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-complaint',
  templateUrl: './new-complaint.component.html',
  styleUrls: ['./new-complaint.component.css']
})
export class NewComplaintComponent {

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private http: HttpClient) { }

  onComplaintSubmit(form: NgForm) {
    const heading = form.value.heading;
    const description = form.value.description;
    const userId = localStorage.getItem('userID');
    this.http.post('http://localhost:8000/complaint/' + userId, {
      headText: heading,
      descriptionText: description,
      user: userId
    }).subscribe(res => {
      console.log(res);
    })
    form.reset();
    this.fileInput.nativeElement.click();
    window.location.reload();
  }

}
