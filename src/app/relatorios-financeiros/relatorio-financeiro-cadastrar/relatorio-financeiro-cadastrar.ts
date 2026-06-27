import { Component, signal  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RelatoriofinanceiroModel } from '../../models/relatorio-financeiro.model';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';

@Component({
  selector: 'app-relatorio-financeiro-cadastrar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-cadastrar.html',
  styleUrl: './relatorio-financeiro-cadastrar.scss',
})
export class RelatorioFinanceiroCadastrar {
      financeiro = signal<RelatoriofinanceiroModel> ({
        id: 0,
        titulo: "",
        tipo: "",
        valorTotal: null,
        dataEmissao: "",
        responsavel: ""
      })
}
