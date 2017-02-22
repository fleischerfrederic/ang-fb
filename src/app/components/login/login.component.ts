import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../services/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[ConnexionService]
})
export class LoginComponent implements OnInit {

  constructor(
private connexionService: ConnexionService
  ) { }

  userInfos = {
    login:'',
    password:''
  }

  formSubmit(infos){
    this.connexionService.userLogin(infos);
  }

  ngOnInit() {
  }

}
