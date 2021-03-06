import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { NovoalunoComponent } from '../dialog/novoaluno/novoaluno.component';
import {PanelService} from "./panel.service";

interface Aluno {
  id: number;
  nome: string;
  dataHoraCadastro: string;
  nascimento: any;
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
      data: { nome: '', matricula: '', nascimento: '' },
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log(res);
      }
    })
  }

  alunoData: Aluno[] = [
    {id: 1, nome: 'Hiago Coelho', dataHoraCadastro: '23/11/2021 18:00', nascimento: '00/00/1999', matricula: '123456'},
    {id: 2, nome: 'João Batista', dataHoraCadastro: '23/11/2021 19:00', nascimento: '01/01/1999', matricula: '234567'},
    {id: 3, nome: 'Patrick Motta', dataHoraCadastro: '23/11/2021 20:00', nascimento: '02/02/1999', matricula: '345678'}
  ]

  displayedColumns: string[] = ['id', 'nome', 'dataHoraCadastro', 'nascimento', 'matricula', 'remover']
  dataSource = [...this.alunoData]

  @ViewChild(MatTable) table!: MatTable<Aluno>;

  carregarAlunos(){
    this.panelServices.listarAlunos().subscribe(async value => {
      const alunos: any = [];
      await value.forEach((aluno: Aluno) => {
        aluno.nascimento = new Date(aluno.nascimento + (3600 * 1000 * 24));
        alunos.push({
          id: aluno.id,
          nome: aluno.nome,
          matricula: aluno.matricula,
          nascimento: `${new Date(aluno.nascimento)
            .getDate()}/${new Date(aluno.nascimento)
              .getMonth()+1}/${new Date(aluno.nascimento)
                .getFullYear()}`,
          dataHoraCadastro: `${new Date(aluno.dataHoraCadastro)
            .getDate()}/${new Date(aluno.dataHoraCadastro)
              .getMonth()+1}/${new Date(aluno.dataHoraCadastro)
                .getFullYear()}
          ${new Date(aluno.dataHoraCadastro)
            .getHours()}:${new Date(aluno.dataHoraCadastro)
              .getMinutes()}`
        })
      })
      this.dataSource = alunos;
      this.table.renderRows();
    })
  }

  removeData(id: number) {
    try {
      this.panelServices.deletarAluno(id).subscribe(value => {
        console.log(value)
        alert('Aluno removido com sucesso!');
        this.carregarAlunos();
      })
    } catch (error) {

    }
  }

  ngOnInit(): void {
    this.carregarAlunos()
  }

}
