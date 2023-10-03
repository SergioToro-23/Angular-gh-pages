import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Proy1 Angular';
  
  constructor() { }

  redirigirAPaginaEstatica() {
    const urlExterna = '../assets/Flor/index.html'; // URL externa a la que deseas redirigir
    window.location.href = urlExterna; // Redirige a la URL externa
  }

}
