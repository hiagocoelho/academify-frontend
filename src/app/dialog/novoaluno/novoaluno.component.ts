import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PanelService } from 'src/app/panel/panel.service';

interface Aluno {
  id?: number;
  nome: string;
  dataHoraCadastro?: Date;
  nascimento: string;
  matricula: string;
}

@Component({
  selector: 'app-novoaluno',
  templateUrl: './novoaluno.component.html',
  styleUrls: ['./novoaluno.component.css']
})
export class NovoalunoComponent implements OnInit {

  constructor(
    private panelServices: PanelService,
    public dialogRef: MatDialogRef<NovoalunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aluno,
    @Inject(MAT_DIALOG_DATA) public emptyNome: boolean,
    @Inject(MAT_DIALOG_DATA) public emptyNascimento: boolean,
    @Inject(MAT_DIALOG_DATA) public emptyMatricula: boolean

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addAluno(data: Aluno): any {
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
      this.data.dataHoraCadastro = new Date();
      this.panelServices.adicionarAluno(data).subscribe((response) => {
        console.log(response);
        this.dialogRef.close();
        alert('Aluno adicionado com sucesso. Por favor, recarregue a página.');
      })
    } catch (error) {
      alert('Não foi possível adicionar o aluno. Por favor, tente novamente.');
    }
  }

  ngOnInit(): void {
  }

}
