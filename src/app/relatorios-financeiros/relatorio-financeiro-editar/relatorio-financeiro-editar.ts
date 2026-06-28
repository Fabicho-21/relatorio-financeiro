import { Component, inject, signal } from '@angular/core';
import { RelatoriofinanceiroModel } from '../../models/relatorio-financeiro.model';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio-financeiro-editar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-editar.html',
  styleUrl: './relatorio-financeiro-editar.scss',
})
export class RelatorioFinanceiroEditar {
  relatorio = signal<RelatoriofinanceiroModel> ({
    id: "",
    titulo: "", 
    tipo: "",
    valorTotal: null,
    dataEmissao: "",
    responsavel: ""
  })

    RelatorioFinanceiroService = inject(RelatorioFinanceiroService);

  constructor(private activeRoute: ActivatedRoute, private router: Router) {

    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    if(idParaEditar === null){
      alert("Id não encontrado")
      this.router.navigate(["/relatoriosfinanceiros"]);
      return
    }

    this.relatorio.update(relatorio => ({
      ...relatorio,
      id: idParaEditar
    }));
    this.consultarRelatorio();
  }
  consultarRelatorio() : void{
    this.RelatorioFinanceiroService.obterPorId(this.relatorio().id).subscribe({
      next: relatorio => {
        this.relatorio.update(() => ({
          id: relatorio.id,
          titulo: relatorio.titulo, 
          tipo: relatorio.tipo,
          valorTotal: relatorio.valorTotal,
          dataEmissao: relatorio.dataEmissao,
          responsavel: relatorio.responsavel
        }))
      },
      error: erro => {
        console.error("Não foi possivel consultar o relatorio:", erro);
        alert("Não foi possivel consultar o relató]rio");
      }
    })
  }
  salvar(): void {
      this.RelatorioFinanceiroService.editar(this.relatorio().id, this.relatorio()).subscribe({
      next: () => {
        alert("Relatorio alterado com sucesso");
        this.router.navigate(["/listar"]);
      },
      error: erro => {
        console.error("Não foi possivel alterar o relatorio", erro)
        alert("Erro ao alterar o relatorio");
      }
    })
  }
}
