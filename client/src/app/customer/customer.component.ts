import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  listOfComplaints=[];
  updateComplaint = [];
  complaintId: string;

  listOfUserComplaints=[];

  ngOnInit() {
    const userId = localStorage.getItem('userID');
    this.http.get('http://localhost:8000/complaint/'+userId).subscribe(res => {
      this.listOfUserComplaints = res.complaint;
    })
  }

  onEditComplaint(complaintDetails){
    this.updateComplaint = complaintDetails;
    this.complaintId = complaintDetails._id;
    console.log(complaintDetails);
  }

  onComplaintEdit(form: NgForm){
    const newComment = form.value.addComments;
    this.http.post('http://localhost:8000/complaint/comment/'+this.complaintId, {
      commentText: newComment,
      author: localStorage.getItem('userID')
    }).subscribe(res => {
      console.log(res);
    });
  }

  }

}
