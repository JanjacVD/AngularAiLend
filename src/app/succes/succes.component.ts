import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.scss']
})
export class SuccesComponent{
  @Input()
  status: boolean = false;
}
