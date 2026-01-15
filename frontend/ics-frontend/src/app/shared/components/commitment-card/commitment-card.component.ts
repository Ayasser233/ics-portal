import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commitment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commitment-card.component.html',
  styleUrl: './commitment-card.component.scss'
})
export class CommitmentCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
