# Tour geral

## Árvore de arquivos

Fiz 2 pastas centrais, uma chamada res e outra chamada src. A pasta "res" é aonde coloquei todos os arquivos de estilo (html e CSS) e arquivos 
que seriam usados para decoração da página. Já a pasta src, foi aonde coloquei o que seria código lógico, se fosse usado algum outro tipo
de linguagem, seria mostrado nessa pasta. Tentei adicionar uma pasta com arquivos .json, porém não deu certo e decidi remover, por esse motivo
há uma pasta especificando o uso de JavaScript.

## Uso do HTML

### Paginas com Doctype html5

Como foi pedido nas instruções da atividade, deixei todos os arquivos html com o Doctype "html5".

### Micro Páginas

Para a apresentação das páginas fiz várias sub páginas html, e como esses arquivos funcionariam como um "fragmento" da página no todo,
decidi chamá-las de "Micro página", pois são pequenos pedaços dentro da página raíz.

### Listas dinâmicas

Decidi fazer as listas dinâmicas porque não me pareceu correto fazer tudo na mão, eu cheguei a fazer, porém senti que estava fazendo um esforço
que não cabia no desenvolvimento. Dediquei algumas horas procurando como poderia fazer uma lista dinâmica usando JavaScript + HTML, e a solução
que encontrei foi "concatenar" código HTML usando forEach.

## Uso do CSS

### Ideia Inicial

A minha ideia inicial era ter um arquivo CSS para cada página, mas notei que tinha muito estilo que seria "reescrito", logo decidi que isso
não fazia sentido na aplicação e deixei apenas arquivos relevantes e não redundantes.

### Estilo geral

O arquivo "general_micropage.css" foi criado para ser o tema raíz do projeto, nele tentei inserir o que era mais genérico e poderia acabar
sendo redundante reescrever em outros arquivos.

## Uso do JavaScript

### Uso geral

Para cada página que era necessário o uso de alguma lógico, criei um arquivo JavaScript próprio. Os momentos que decidi usar o JavaScript era
em sua maioria para manipulação do DOM.

### Listas Dinâmicas com JavaScript

Basicamente para as listas dinâmicas usei o forEach junto com o DOM para inserir novas divs, usando dados que separei em constantes,
simulando um arquivo .json que seria carregado de um navegador.