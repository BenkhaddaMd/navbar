import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
interface gateway {
  date_modification: any;
  date_creation: any;
  id:  any;
  ip:   any;
  ipLocal:   any;
  Status:   any;
  mqueueKey:   any;
  adresse:   any;
  cp: any;
  ville:   any;
  etage: any;
  lastCommunication: any;
  backDesc:   any;
  userDesc:   any;
  keyFota:   any;
  versionFirmware:  any;
}
@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {

public gw:gateway = {
  
  date_modification: '',
  date_creation: '',
  id:  '',
  ip:   '',
  ipLocal:   '',
  Status:   '',
  mqueueKey:   '',
  adresse:   '',
  cp: '',
  ville:   '',
  etage: '',
  lastCommunication: '',
  backDesc:   '',
  userDesc:   '',
  keyFota:   '',
  versionFirmware:  '',
};
   
onSubmitgateway(){
  this.gw.date_modification = new Date();
  this.gw.date_creation = new Date();
  this.myServ.postGategory(this.gw).subscribe(
    data => console.log(),
    error => console.error(error)
  );
  
}



  constructor(private myServ:HttpServicesService) { }

  ngOnInit(): void {
  }
}
