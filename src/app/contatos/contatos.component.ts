import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
formContato = this.fb.group({
  nome: ["",[
    Validators.minLength(4),
    Validators.required
  ]],
  assunto: ["",[
    Validators.minLength(10),
    Validators.required
  ]],
  telefone: ["",[
    Validators.minLength(11),
    Validators.required
  ]],
  email: ["",[
    Validators.email,
    Validators.required
  ]],
  mensagem: ["",[
    Validators.minLength(20),
    Validators.required
  ]]
})

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("A Mensagem foi enviada!")
    this.formContato.reset();
  }

}
