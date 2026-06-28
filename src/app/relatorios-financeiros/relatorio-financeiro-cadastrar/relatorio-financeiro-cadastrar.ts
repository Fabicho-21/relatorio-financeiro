import { Component, signal, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RelatoriofinanceiroModel } from '../../models/relatorio-financeiro.model';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorio-financeiro-cadastrar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-cadastrar.html',
  styleUrl: './relatorio-financeiro-cadastrar.scss',
})
export class RelatorioFinanceiroCadastrar {
  private readonly relatoriofinanceiroService = inject(RelatorioFinanceiroService);
  private readonly router = inject(Router);

    relatorio = signal<RelatoriofinanceiroModel> ({
      id: crypto.randomUUID(),
      titulo: "",
      tipo: "",
      valorTotal: null,
      dataEmissao: "",
      responsavel: ""
    })

    salvar(): void {
      this.relatoriofinanceiroService.cadastrar(this.relatorio()).subscribe({
        next: () => {
          alert("Relatorio anotada");
          this.router.navigate(["/listar"]);
        },
      error: erro => {
        console.error("Eita bixo, deu ruim, oia o por que:" + erro);
        alert("Neguinho, deu um problema aqui");
      }
    })
  }
}