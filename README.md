# Estatística Descritiva: Listas 1, 2 e 3

Material de estudo da disciplina **Estatística Aplicada à Engenharia de Software** (UniCatólica, Prof. Dr. Joelson Delfino): 10 lições curtas com exercícios corrigidos na hora, um formulário e os gabaritos comentados das três listas.

Tudo é HTML estático: não precisa instalar nada nem ter internet (só os links para as fontes externas precisam).

## Começo rápido

Abra o `index.html` no navegador:

```bash
xdg-open index.html        # Linux
open index.html            # macOS
start index.html           # Windows
```

A página inicial lista as lições em ordem, agrupadas por lista, com o link para cada gabarito.

## O que tem em cada pasta

| Caminho | Conteúdo |
|---|---|
| `index.html` | Página inicial: lições em ordem e como estudar |
| `lessons/` | 10 lições (`0001` a `0010`), uma habilidade por lição |
| `reference/formulario.html` | Todas as fórmulas das três listas, em uma página imprimível |
| `reference/gabarito-lista-N.html` | Gabarito comentado de cada lista |
| `assets/` | Estilo e componentes compartilhados (quiz, impressão) |
| `MISSION.md` | O objetivo do estudo; guia o que cada lição ensina |
| `RESOURCES.md` | Fontes usadas e recomendadas (OpenStax, NIST, SBM…) |
| `NOTES.md` | Convenções adotadas e pontos a confirmar com o professor |
| `learning-records/` | Registro do que já foi aprendido ou decidido |
| `LISTA *.pdf` | Os enunciados originais |

## Mapa das lições

| Lição | Assunto | Questões |
|---|---|---|
| 1 | Rol e tabela de frequências | Lista 1: Q1 |
| 2 | Média, mediana e moda (dados soltos) | Lista 1: Q1, Q4 |
| 3 | Média de dados agrupados | Lista 1: Q2, Q3, Q6 |
| 4 | Mediana e moda em classes | Lista 1: Q5, Q6 |
| 5 | Variância e desvio-padrão | Lista 2: Q1, Q5 |
| 6 | Desvio-padrão em classes | Lista 2: Q2, Q3, Q4 |
| 7 | Coeficiente de variação | Lista 2: Q3, Q4, Q5 |
| 8 | Montando classes e histograma | Lista 3: Q4, Q5, Q6, Q9 |
| 9 | Média geométrica | Lista 3: Q5, Q6 |
| 10 | Homogeneidade e assimetria (Pearson) | Lista 3: Q2, Q3, Q7, Q9, Q10 |

As lições se apoiam nas anteriores. A Lista 3, por exemplo, também usa as lições 2 a 7.

## Como estudar

1. **Tente a questão no PDF primeiro**, mesmo que trave.
2. **Faça a lição correspondente.** Cada uma leva uns 10 minutos.
3. **Responda os exercícios de memória**, sem voltar ao texto. O feedback é imediato.
4. **Só então confira no gabarito.** As resoluções ficam fechadas; clique em "Ver resolução".
5. **Revise espaçado:** refaça os exercícios 2 ou 3 dias depois, e de novo na véspera da prova.

### Exercícios

- Nas respostas numéricas, vírgula e ponto funcionam (`12,64`, `12.64`, `1.500`), assim como o sinal de menos (`-1,06` ou `−1,06`). Aperte **Enter** ou **Conferir**.
- Nas de múltipla escolha, cada alternativa mostra por que está certa ou errada.

### Imprimir

O formulário e os gabaritos foram feitos para imprimir (Ctrl+P). Na impressão, as resoluções abrem sozinhas e os exercícios interativos somem.

## Convenções: confirme com o professor

Algumas respostas dependem de escolhas que as listas não especificam. Os gabaritos mostram as duas versões, mas vale confirmar antes de entregar:

- **Desvio-padrão:** amostral (divide por n − 1) como principal; populacional (divide por n) entre parênteses.
- **Assimetria de Pearson:** 3(x̄ − Md)/s como principal; (x̄ − Mo)/s ao lado. Nas Q3 e Q7 da Lista 3 elas levam a conclusões diferentes.
- **Moda em classes:** Czuber, com a moda bruta ao lado.
- **Classes montadas a partir de dados brutos** (Lista 3, Q4 a Q6): regra de Sturges com amplitude redonda. Outra escolha válida muda os valores um pouco; mostre AT, k e h no desenvolvimento.
- **Faixas de classificação:** homogênea se CV ≤ 15%; simétrica se |As| < 0,15.
- **Lista 1, Q3:** a leitura do histograma é ambígua (≈ R$ 727 ou ≈ R$ 632).

Os detalhes estão em `NOTES.md`.

## Listas avaliativas

As Listas 2 e 3 são entregues **à mão**. As lições ensinam o método para você resolver sozinho; os gabaritos servem para conferir as suas contas, não para copiar.

## Dúvidas

Cada lição termina com uma sugestão de pergunta. Para continuar os estudos (mais exercícios, explicar de outro jeito, conferir uma tabela sua), peça ao Claude neste mesmo diretório. Ele lê `MISSION.md`, `NOTES.md` e `learning-records/` para continuar de onde você parou. Para registrar o que você já domina, conte a ele quais exercícios acertou ou errou.
