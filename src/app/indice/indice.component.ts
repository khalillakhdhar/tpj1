import { Component } from '@angular/core';
import { Personne } from '../classes/personne';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent {
  personne=new Personne();
  imc=0;

}
