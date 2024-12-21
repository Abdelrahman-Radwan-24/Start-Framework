import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  titleContact: string = 'conatct section';
  colorContact: string = '#2A3C4D';
  userName: string = '';
  userAge!: number;
  userEmail: string = '';
  userPassword: string = '';
}
