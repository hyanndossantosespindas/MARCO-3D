# Marco3D — Landing page (revisão do feedback da equipe)

A Marco3D nasceu em **Olinda, Pernambuco**, mas atende a projetos de todo o Brasil. Nossa apresentação não limita o serviço ao patrimônio cultural: também contempla **empresas, lojas e empreendimentos**, quando precisarem mostrar espaços, fachadas, ambientes ou estruturas em 3D.

## O que foi alterado após o feedback

1. **Linguagem para diferentes públicos.** A primeira dobra, serviços, processo, Sobre e contato falam de espaços culturais **e** comerciais/empresariais. A localização não aparece como um limite do serviço.
2. **Pesquisa de campo.** Separada como serviço e presente no processo. Pesquisa histórica entra apenas quando o projeto pede contexto cultural.
3. **Olinda como origem e portfólio.** A startup nasceu em Olinda; os **dois modelos 3D exibidos no portfólio** são de lá (casarão e galpão), sem afirmar que os próximos projetos ficarão na região.
4. **Visual mais próximo da origem, sem estereótipos.** Preservadas a composição, a tipografia e a paleta base; acrescentados pequenos toques de cor de fachada, padronagem discreta de azulejos e uma **ilustração autoral e conceitual** de casario no topo, sem reivindicar ser uma construção específica. A ilustração não foi feita a partir de nenhum dos dois projetos reais.
5. **Texto simples.** O conteúdo público usa “criar modelos 3D”, “gerar modelos 3D” e “apresentação digital”, sem mencionar o termo técnico vetado. A Marco3D não é apresentada como empresa que executa obra ou revitalização.

## Onde alterar

```text
marco3d-site/
├── index.html
├── src/
│   ├── css/style.css
│   └── js/main.js
├── assets/images/
│   ├── favicon.svg
│   └── projetos/
│       ├── projeto-01-casarao/antes.jpg e depois.jpg
│       └── projeto-02-galpao/antes.jpg e depois.jpg
├── .gitignore
└── README.md
```

**HTML**: estrutura e textos; **CSS**: layout e detalhes visuais; **JS**: alternância Referência / Modelo 3D.

## Abrir e testar

Abra esta pasta no VS Code e use **Open with Live Server** no `index.html` (ou abra o HTML diretamente no navegador). As fontes externas necessitam internet.

## Imagens e dados a completar

- A comparação no topo é **apenas ilustrativa**; não representa um projeto real e não indica qualquer reforma ou obra.
- Os arquivos `antes.jpg` e `depois.jpg` permanecem **imagens de exemplo**, não são projetos verificados; a página continua exibindo placeholders até serem inseridas imagens reais e vinculadas ao HTML.
- Os contatos continuam fictícios/placeholders. Substitua por dados confirmados antes da publicação.
- Os nomes “Casarão” e “Galpão” foram mantidos do portfólio anterior; confirme os nomes oficiais se forem outros.
- Recriações do passado somente com documentos e evidências adequados; sem inventar história ou detalhes dos lugares.

## Referências para a direção visual

- [UNESCO — Centro Histórico de Olinda](https://whc.unesco.org/en/list/189): arquitetura, fachadas e paisagem construídas.
- [IPHAN — Patrimônio Mundial em Pernambuco](https://www.gov.br/iphan/pt-br/superintendencias/pernambuco/patrimonio-mundial): arquitetura residencial, sobrados e azulejos.

A referência a Olinda informa as escolhas de design desta versão; **não** define o escopo geográfico do serviço.


## Identidade visual — Olinda (versão nova)

O layout usa uma paleta inspirada nas fachadas históricas (cal, terracota, azul de azulejo e verde), molduras de arco e um padrão geométrico original em `assets/images/padrao-azulejo.svg`. A mudança é visual: o conteúdo, os projetos de Olinda e o código de interação foram mantidos. O padrão é uma criação gráfica da equipe de site, não uma reprodução de um painel histórico específico.
