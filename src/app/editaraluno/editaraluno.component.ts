import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import {PanelService} from "../panel/panel.service";
import { MatTable } from '@angular/material/table';

interface Aluno {
  id?: number;
  nome: string;
  dataHoraCadastro?: string;
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
    private  panelServices: PanelService
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

@ViewChild(MatTable) table!: MatTable<Aluno>;

  editAluno(data: Aluno) {
    this.panelServices.editarAluno(data).subscribe(value => {
      console.log(value)
    })
    this.table.renderRows();
    alert('Aluno editado com sucesso!');
  }


  ngOnInit(): void {
  }

}
