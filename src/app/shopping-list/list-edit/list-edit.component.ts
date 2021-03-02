import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
})
export class ListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmt = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmt)
    this.ingredientAdded.emit(newIngredient)
  }
}
