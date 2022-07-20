import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquis',
  templateUrl: './barra-pesquis.component.html',
  styleUrls: ['./barra-pesquis.component.css']
})
export class BarraPesquisComponent implements OnInit {
descricao = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}})
    
    return;
      

    }
    this.router.navigate(["produtos"])
    
  }
}
