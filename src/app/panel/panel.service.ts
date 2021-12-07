import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<any>{
    return this.http.get("http://localhost:8080/api/aluno/listar");
  }
  //   excluirAluno(idLivro:number): Observable<any>{
  //     return this.http.post(`http://localhost:8080/api/aluno/remover/${idLivro}`);
  //
  // }

  
  deletarAluno(id:any): Observable<any>{
    return this.http.post("http://localhost:8080/api/aluno/remover", {"id": id});
  }

  editarAluno(data: any): Observable<any>{
    return this.http.put("http://localhost:8080/api/aluno/editar", data);
  }

}
