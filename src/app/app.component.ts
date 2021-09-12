import { Component } from '@angular/core';

export interface Students{
  name: string;
  position: number;
  age: number;
  semestre: string;
}

const ELEMENT_DATA: Students[] = [
  {position: 1, name: 'Juan', age: 19, semestre: '3'},
  {position: 2, name: 'Luis', age: 17, semestre: '1'},
  {position: 3, name: 'Karen', age: 20, semestre: '4'},
  {position: 4, name: 'Anny', age: 18, semestre: '1'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'lineaI';
  displayedColumns: string[] = ['position', 'name', 'age', 'semestre'];
  dataSource = ELEMENT_DATA;
  columnas =[
    {titulo: "No.", campo: "position"},
    {titulo: "Nombre", campo: "name"},
    {titulo: "Edad", campo: "age"},
    {titulo: "Semestre", campo: "semestre"},
  ]; //todas las columnas en forma de objeto

  public operar(op: string): void{
    
    
    
  }
}


