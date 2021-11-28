import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Aluno {
  id?: number;
  nome: string;
  dataHoraCadastro?: string;
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
    public dialogRef: MatDialogRef<NovoalunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aluno,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addAluno(data: Aluno): void {
    console.log(data);
  }

  ngOnInit(): void {
  }

}
