export interface RelatoriofinanceiroModel {
    id: number;
    titulo: string;
    tipo: string;
    valorTotal: number | null;
    dataEmissao: string;
    responsavel: string;
}
