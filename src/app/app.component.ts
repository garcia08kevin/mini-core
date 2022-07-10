import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'angular-mini-core';
  listaUsuarios:any=[];
  tipoPases:any=[];
  mapeoPases:Map<number, string> = new Map();

  ngOnInit(): void {
    this.tipoPases= [
      { tipo: "Mensual", cupo: 25.00, pases: 96 },
      { tipo: "Semestral", cupo: 50.00, pases: 576 },
      { tipo: "Anual", cupo: 80.00, pases: 1052 },
    ];
    this.listaUsuarios = [
      { id: 1, nombres:"Pedro Villacis", tipo_pase: "Mensual", fecha_compra: new Date('2021/07/03'), fecha_expira: new Date('2022/07/11'), pases: 1 },
      { id: 2, nombres:"Yania Peña", tipo_pase: "Semestral", fecha_compra: new Date('2022/03/18'), fecha_expira: new Date('2023/03/18'), pases: 25 },
      { id: 3, nombres:"Micaela Obando", tipo_pase: "Anual", fecha_compra: new Date('2022/02/18'), fecha_expira: new Date('2023/02/18'), pases: 30 },
    ];
  }

  usarPase(item:any){
    const day = new Date();
      let contarDias = (item.fecha_expira.getTime() - day.getTime())/(1000 * 3600 * 24);
      window.alert(`A ${item.nombres} solo le quedan ${Math.trunc(contarDias)} dias para ocupar sus pases antes que expiren`)
      if(item.tipo_pase === "Mensual"){ 
        let numeroPases = this.tipoPases[0].pases - item.pases
        if(confirm(`${item.nombres} ha gastado ${numeroPases} pases de su plan y cuenta actualmente con ${item.pases} pases ¿desea continuar?`)){
          if(item.pases >= 1){
            item.pases = item.pases -1;
          }else{
            window.alert("No tiene la cantidad necesaria de pases para continuar");
            location. reload();
          }
        }    
      }    
      if(item.tipo_pase === "Semestral"){ 
        let numeroPases = this.tipoPases[1].pases - item.pases
        if(confirm(`${item.nombres} ha gastado ${numeroPases} pases de su plan y cuenta actualmente con ${item.pases} pases ¿desea continuar?`)){
          if(item.pases >= 1){
            item.pases = item.pases -1;
          }else{
            window.alert("No tiene la cantidad necesaria de pases para continuar");
            location. reload();
          }
        }    
      } 
      if(item.tipo_pase === "Anual"){ 
        let numeroPases = this.tipoPases[2].pases - item.pases
        if(confirm(`${item.nombres} ha gastado ${numeroPases} pases de su plan y cuenta actualmente con ${item.pases} pases ¿desea continuar?`)){
          if(item.pases >= 1){
            item.pases = item.pases -1;
          }else{
            window.alert("No tiene la cantidad necesaria de pases para continuar");
            location. reload();
          }
        }    
      }   
  }
}

