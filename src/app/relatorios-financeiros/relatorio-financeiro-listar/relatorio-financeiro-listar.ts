import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RelatoriofinanceiroModel } from '../../models/relatorio-financeiro.model';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';

@Component({
  selector: 'app-relatorio-financeiro-listar',
  imports: [RouterLink],
  templateUrl: './relatorio-financeiro-listar.html',
  styleUrl: './relatorio-financeiro-listar.scss',
})
export class RelatorioFinanceiroListar {

  private readonly relatorioFinancService = inject(RelatorioFinanceiroService);

  relatoriosfinanceiros = signal<RelatoriofinanceiroModel[]>([]);

  ngOnInit() {
    this.carregarRelatorios();
  }

  readonly totalRelatorios = computed(() => this.relatoriosfinanceiros().length);

  carregarRelatorios(): void {
    this.relatorioFinancService.listar().subscribe({
      next: relatorio => {
        const relatoriosOrdenados = relatorio.sort((a, b) => a.titulo.localeCompare(b.titulo));
        this.relatoriosfinanceiros.set(relatoriosOrdenados);
      },
      error: erro => {
        console.error('Erro ao carregar relatórios financeiros:', erro);
        alert('Não foi possível carregar os relatórios financeiros.');
      }
    });
  }

  apagar(id: string): void {
    this.relatorioFinancService.apagar(id).subscribe({
      next: () => {
        alert('Relatório apagado com sucesso');
        this.carregarRelatorios();
      },
      error: erro => {
        console.error('Erro ao apagar relatório financeiro:', erro);
        alert('Não foi possível apagar o relatório.');
      }
    });
  }
}
