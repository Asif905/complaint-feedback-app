import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  listOfComplaints=[];
  updateComplaint = [];
  complaintId: string;

  ngOnInit() {
    this.http.get('http://localhost:8000/complaint/').subscribe(res => {
      this.listOfComplaints = res.complaint;
    })
  }

  onEditComplaint(complaintDetails){
    this.updateComplaint = complaintDetails;
    this.complaintId = complaintDetails._id;
    console.log(complaintDetails);
  }

  onComplaintEdit(form: NgForm){
    const status = form.value.complaintStatus;
    const comment = form.value.addComments;
    this.http.put('http://localhost:8000/complaint/agent/'+this.complaintId,{
      status: status
    }).subscribe(res => {
      console.log(res);
    })
  }

}
