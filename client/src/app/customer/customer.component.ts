import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  listOfComplaints = [];
  updateComplaint = [];
  complaintId: string;
  @ViewChild('closeModal') elRef: ElementRef;
  listOfUserComplaints = [];

  ngOnInit() {
    const userId = localStorage.getItem('userID');
    this.http.get('http://localhost:8000/complaint/' + userId).subscribe(res => {
      this.listOfUserComplaints = res.complaint;
    })
  }

  onEditComplaint(complaintDetails) {
    this.updateComplaint = complaintDetails;
    this.complaintId = complaintDetails._id;
  }

  onComplaintEdit(form: NgForm) {
    const newComment = "[By Customer]  " + form.value.addComments;
    if (newComment != "") {
      this.http.post('http://localhost:8000/complaint/comment/' + this.complaintId, {
        commentText: newComment,
        author: localStorage.getItem('userID')
      }).subscribe(res => {
        console.log(res);
      });
      window.location.reload();
    }
    else {
      this.elRef.nativeElement.click();
    }
  }

}


