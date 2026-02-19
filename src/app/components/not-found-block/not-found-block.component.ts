import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found-block',
  standalone: true,
  imports: [],
  templateUrl: './not-found-block.component.html',
  styleUrl: './not-found-block.component.scss',
})
export class NotFoundBlockComponent {
  @Input() text: string = '';
}
