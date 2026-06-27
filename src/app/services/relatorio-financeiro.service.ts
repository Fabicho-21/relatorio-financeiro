import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../enviroments/environment';
import { RelatoriofinanceiroModel } from '../models/relatorio-financeiro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelatorioFinanceiroService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/relatorios-financeiros`;

  listar() : Observable<RelatoriofinanceiroModel[]> {
    const url = this.baseUrl;

    //fazer requisição para carregar a lista de tarefas
    return this.http.get<RelatoriofinanceiroModel[]>(url);
  }

  cadastrar(relatorio: RelatoriofinanceiroModel): Observable<RelatoriofinanceiroModel> {
    const url = this.baseUrl;

    return this.http.post<RelatoriofinanceiroModel>(url, relatorio)
  }

  apagar(id: string | number): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    //aqui é o void porque o status code da request é 204 no Content
    //(back-end não retorna dados quando é 204)
    return this.http.delete<void>(url);
  }
  
  obterPorId(id: string | number): Observable<RelatoriofinanceiroModel>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<RelatoriofinanceiroModel>(url);
  }

  editar(id: string | number, relatorio: RelatoriofinanceiroModel): Observable<void>{
    const url =`${this.baseUrl}/${id}`
    return this.http.put<void>(url, relatorio); 
  }

}
