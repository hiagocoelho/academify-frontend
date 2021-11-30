import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { NovoalunoComponent } from '../dialog/novoaluno/novoaluno.component';
import {PanelService} from "./panel.service";

interface Aluno {
  id: number;
  nome: string;
  dataHoraCadastro: string;
  nascimento: string;
  matricula: string;
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public dialog: MatDialog, private  panelServices: PanelService) { }

  openNovoAlunoDialog(): void {
    const dialogRef = this.dialog.open(NovoalunoComponent, {
      data: { nome: '', matricula: '', nascimento: '' }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log(res);
      }
    })
  }

  // alunoData = [];
  alunoData: Aluno[] = [
    {id: 1, nome: 'Hiago Coelho', dataHoraCadastro: '23/11/2021 18:00', nascimento: '00/00/1999', matricula: '123456'},
    {id: 2, nome: 'João Batista', dataHoraCadastro: '23/11/2021 19:00', nascimento: '01/01/1999', matricula: '234567'},
    {id: 3, nome: 'Patrick Motta', dataHoraCadastro: '23/11/2021 20:00', nascimento: '02/02/1999', matricula: '345678'}
  ]

  displayedColumns: string[] = ['id', 'nome', 'dataHoraCadastro', 'nascimento', 'matricula', 'remover']
  dataSource = [...this.alunoData]

  @ViewChild(MatTable) table!: MatTable<Aluno>;

  carregarAlunos(){
    this.panelServices.listarAlunos().subscribe(value => {

      // this.alunoData = value

      console.log(value)
    })

  }
  // addData () {
  //   this.dataSource.push(
  //     {
  //       id: this.dataSource.length  + 1,
  //       nome: 'John Doe',
  //       dataHoraCadastro: '23/11/2021 00:00',
  //       nascimento: '00/00/1999',
  //       matricula: '000000'
  //     }
  //   );
  //   this.table.renderRows();
  //   alert('Aluno adicionado com sucesso!');
  // }

  removeData(id: number) {
    this.panelServices.deletarAluno(id).subscribe(value => {
      console.log(value)
    })
    this.table.renderRows();
    alert('Aluno removido com sucesso!');
  }

  ngOnInit(): void {
    this.carregarAlunos()
  }

}
