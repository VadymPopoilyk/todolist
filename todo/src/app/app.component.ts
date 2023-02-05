import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  items = [ 
    { id: "id1", value: "do", checked: false },
    { id: "id1", value: "do2", checked: false },
    { id: "id1", value: "do3", checked: false },
    { id: "id1", value: "do4", checked: false },
  ];

  newItem = {
    id: "",
    value: "",
    checked: false
  }

  onClick(item:any) : void{
    item.checked = !item.checked;
    
  }

  Del(item:any) : void{
    item.checked = !item.checked;
    setTimeout(() => {this.items.splice(this.items.indexOf(item), 1)}, 1);
  }

  ClearAll(item:any) : void{
    this.items == null;
  }


  addNewItem() {
    if( !this.newItem.value) {
     return false;
    }

    const id = `id ${this.items.length} `;
    this.newItem.id = id;
    this.items.push({...this.newItem});
    this.newItem.value = "";

    return;
  }
}