import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  peixes= [];
  contador= 0; 
  constructor () {
   for (let i = 0; i < 10; i++) {
     this.inserirPeixe();

   }
    console.log(this.peixes);
  }
  
  inserirPeixe(){
    let peixe = {
      altura: Math.random()*500 + 100 + 'px',
      largura: Math.random()*500 + 'px', 
      pescado:false
    };

    this.peixes.push(peixe);

  }

  tirarPeixe (umPeixe) {
    umPeixe.pescado = true;
    this.contador = this.contador +1;
    console.log(this.contador);

  }
  
}
