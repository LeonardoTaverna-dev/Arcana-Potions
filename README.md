# Arcana Potions

Projeto escolar fictício, feito com HTML, CSS e JavaScript puro.

## Abrir
Abra index.html no navegador. Para desenvolvimento, prefira um servidor local como o Live Server do editor. Não há instalação nem etapa de compilação.

## Organização
- index.html: página inicial.
- pages/: catálogo, ficha da poção, bolsa, princípios, grimório e apresentação.
- css/style.css: identidade visual, componentes e adaptação para telas menores.
- js/data.js: dados das quatro poções usados pelas fichas e pela bolsa.
- js/theme.js: restauração antecipada do tema.
- js/script.js: temas, filtros, fichas e bolsa.

O catálogo e a página inicial possuem cartões em HTML para aparecerem mesmo sem JavaScript. Ao alterar nomes ou descrições em data.js, atualize também esses cartões e o grimório.

## Funcionalidades
Filtros por poder; tema Noturno/Eclipse; detalhes por identificador na URL; bolsa com quantidades, remoção e total; conclusão de simulação sem pagamento ou envio de dados. O armazenamento local é opcional: se estiver bloqueado, a página continua funcionando durante a sessão atual.

Os frascos são desenhados com CSS. As fontes são locais do sistema, sem downloads ou bibliotecas externas. Não há ingredientes reais, comércio ou recomendações de consumo.
