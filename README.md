# Marco3D — Landing page

Landing page da **Marco3D**, startup em **Olinda, Pernambuco**. HTML, CSS e JavaScript separados, sem frameworks ou build.

## Estrutura

```text
marco3d-site/
├── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── assets/
│   └── images/
│       ├── favicon.svg
│       └── projetos/
│           ├── projeto-01-casarao/
│           │   ├── antes.jpg
│           │   └── depois.jpg
│           └── projeto-02-galpao/
│               ├── antes.jpg
│               └── depois.jpg
├── .gitignore
└── README.md
```

## Como executar

Abra a pasta `marco3d-site` no VS Code e execute `index.html` no navegador. Também pode usar **Open with Live Server**. As fontes do Google Fonts requerem conexão à internet.

## Onde editar

- **`index.html`**: conteúdo e estrutura da página.
- **`src/css/style.css`**: todo o design. Cores e fontes originais estão centralizadas no `:root` para facilitar ajustes futuros. Nenhum valor visual foi alterado.
- **`src/js/main.js`**: interação do viewport Antes/Depois e fallback para imagens futuras indisponíveis.
- **`assets/images/projetos/`**: arquivos de reserva para fotos e renders.

**Importante:** os quatro arquivos `antes.jpg` e `depois.jpg` são **provisórios**, não são fotos nem renders reais. Como o HTML existente mantém os placeholders `[adicionar foto]` e `[adicionar render 3D]`, esses JPGs **não são usados pela página** e não mudam o layout. Substitua os JPGs pelas imagens reais quando estiverem disponíveis e depois vincule-os à página.

Os contatos da página também continuam como texto provisório, sem alterações.
