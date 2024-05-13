import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName = 'Joaquim';
  show = false;

  userData = {
    email: 'Joaquim@email.com',
    role: 'Admin'
  };

  title = 'atividadePratica2';

  showMessage(): void{
    this.show = !this.show;
  }
}
