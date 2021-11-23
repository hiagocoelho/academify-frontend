import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

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

  constructor() { }

  alunoData: Aluno[] = [
    {id: 1, nome: 'Hiago Coelho', dataHoraCadastro: '23/11/2021 18:00', nascimento: '00/00/1999', matricula: '123456'},
    {id: 2, nome: 'João Batista', dataHoraCadastro: '23/11/2021 19:00', nascimento: '01/01/1999', matricula: '234567'},
    {id: 3, nome: 'Patrick Motta', dataHoraCadastro: '23/11/2021 20:00', nascimento: '02/02/1999', matricula: '345678'}
  ]

  displayedColumns: string[] = ['id', 'nome', 'dataHoraCadastro', 'nascimento', 'matricula', 'remover']
  dataSource = [...this.alunoData]

  @ViewChild(MatTable) table!: MatTable<Aluno>;


  addData () {
    this.dataSource.push(
      {
        id: this.dataSource.length  + 1,
        nome: 'John Doe',
        dataHoraCadastro: '23/11/2021 00:00',
        nascimento: '00/00/1999',
        matricula: '000000'
      }
    );
    this.table.renderRows();
    alert('Aluno adicionado com sucesso!');
  }

  removeData(id: number) {
    const index = this.dataSource.findIndex((aluno: Aluno) => { return aluno.id === id });
    if (index !== -1) this.dataSource.splice(index, 1);
    this.table.renderRows();
    alert('Aluno removido com sucesso!');
  }

  ngOnInit(): void {
  }

}
