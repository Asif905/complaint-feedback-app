import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  @ViewChild('closeModal') elRef: ElementRef;

  constructor(private http: HttpClient) { }

  listOfComplaints = [];
  updateComplaint = [];
  complaintId: string;
  complaintStatus: boolean;

  ngOnInit() {
    this.http.get('http://localhost:8000/complaint/').subscribe(res => {
      this.listOfComplaints = res.complaint;
    })
  }

  onEditComplaint(complaintDetails) {
    this.updateComplaint = complaintDetails;
    this.complaintId = complaintDetails._id;
    this.complaintStatus = complaintDetails.status;
    document.getElementById("complaintStatus").value = this.complaintStatus; 
  }

  onComplaintEdit(form: NgForm) {
    const status = document.getElementById("complaintStatus").value;
    const comment = "[By Agent]  " + form.value.addComments;
    console.log(comment);
    this.http.put('http://localhost:8000/complaint/agent/' + this.complaintId, {
      status: status
    }).subscribe(res => {
      console.log(res);
    })
    this.http.post('http://localhost:8000/complaint/comment/' + this.complaintId, {
      commentText: comment,
      author: localStorage.getItem('userID')
    }).subscribe(res => {
      console.log(res);
    });
    form.reset();
    this.elRef.nativeElement.click();
    window.location.reload();
  }

}
