import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  // en déhors de la méthode on a pas besoin de let ou const
  titre:string="";
  quantite=1;
  prix=0;
calculer()
{
  // dans la méthode on a toujours besoin de let ou const
  let totale=this.prix*this.quantite;
  let taxe=totale/10;
  let somme=totale+taxe;
  alert(`le totale est: ${totale} la taxe: ${taxe} et le montant finale à payer est : ${somme}`); // interpolation typescript
  // `chaine d'interpolation` avec altgr+7
  // alert('message'+variable)
  this.prix=0;
  this.quantite=1;
  this.titre="";

}
}
