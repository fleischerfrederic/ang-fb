import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ConnexionService {

  constructor(
    private router:Router
  ) {}

    userLogin(infos){
      console.log('user try to login',infos) 

      if (infos.login=='fred' && infos.password=='fleche'){
        console.log('vous etes connecté(e)')

        this.router.navigateByUrl('/connected')
      }
      else{
        console.log('acces refusé')
      }
    }
   }


