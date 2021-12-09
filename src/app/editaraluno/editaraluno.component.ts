import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import {PanelService} from "../panel/panel.service";
import { MatTable } from '@angular/material/table';

interface Aluno {
  id?: number;
  nome: string;
  dataHoraCadastro?: Date;
  nascimento: string;
  matricula: string;
}


@Component({
  selector: 'app-editaraluno',
  templateUrl: './editaraluno.component.html',
  styleUrls: ['./editaraluno.component.css']
})
export class EditaralunoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditaralunoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Aluno, 
    @Inject(MAT_DIALOG_DATA) public emptyNome: boolean,
    @Inject(MAT_DIALOG_DATA) public emptyNascimento: boolean,
    @Inject(MAT_DIALOG_DATA) public emptyMatricula: boolean,
    private  panelServices: PanelService
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editAluno(data: Aluno, id: any, dataHoraCadastro: any): any {
    if (data.nome === '') {
      return this.emptyNome = true;
    } else {
      this.emptyNome = false;
    }
    if (data.nascimento === '') {
      return this.emptyNascimento = true;
    } else {
      this.emptyNascimento = false;
    }
    if (data.matricula === '') {
      return this.emptyMatricula = true;
    } else {
      this.emptyMatricula = false;
    }
    try {
      this.panelServices.editarAluno({...data, id, dataHoraCadastro}).subscribe((response) => {
        console.log(response);
        this.dialogRef.close();
        alert('Aluno Editado com sucesso.');
      })
      // console.log({...data, id, dataHoraCadastro: dataHoraCadastro.replace(/\s+/g, "'T'")});
    } catch (error) {
      alert('Não foi possível editar o aluno pois todos os campos devem ser preenchidos. Por Favor tente novamente.');
    }
  }
  ngOnInit(): void {
  }

}