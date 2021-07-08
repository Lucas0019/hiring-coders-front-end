## SPA

De maneira geral, em uma aplicação SPA, o carregamento dos recursos (como CSS, JavaScript e HTML das páginas) ocorre apenas uma única vez: na primeira vez em que o usuário acessa a aplicação. Nesse primeiro acesso, todo o conteúdo HTML, CSS e JavaScript já é transferido para o cliente. A partir deste momento, quando o usuário transitar pelas páginas da aplicação, não será necessário mais fazer requisições para o servidor para a carga dessas novas páginas: o conteúdo relacionado a elas já foi baixado no primeiro acesso. O que acontece nesse momento é que o conteúdo da página é carregado via JavaScript, código este que é justamente gerado com base nos frameworks SPA, como Angular, React e Vue.js. Por isso, dizemos que o processamento do carregamento das páginas e seus respectivos recursos passa para o cliente, já que JavaScript é uma linguagem majoritariamente client side (existem algumas exceções, como quando trabalhamos com Node.js)

---

## PWA

é uma aplicação web com tecnologias que permitem termos a experiência de uso muito próxima da oferecida pelos mobile apps. As funcionalidades que estas tecnologias nos permitem são:

  - Push Notification
  - Ícone na tela home do smartphone
  - Splash screen
  - Processos rodando em background
  - Suporte a funcionamento em modo Offline
  - Acesso à camera e galeria
  - Acesso à geolocalização
  - Acesso à os contatos

---

## Web Components

Web Components é uma suíte de diferentes tecnologias que permite a criação de elementos customizados reutilizáveis — com a funcionalidade separada do resto do seu código — e que podem ser utilizados em suas aplicações web.

Como desenvolvedores, sabemos que é uma boa ideia reutilizar o código o máximo que pudermos. Tradicionalmente, isso não tem sido fácil quando o assunto são estruturas de marcação customizadas — pense no complexo HTML (e estilo e script associados) que, às vezes, deve ser escrito para renderizar controles UI customizados e em como utilizá-los repetidas vezes pode tornar sua página uma bagunça se você não tomar cuidado.

Web Components buscam resolver esses problemas 
 — são formados por três tecnologias principais, que podem ser usadas em conjunto para criar elementos customizados versáteis, com funcionalidade encapsulada, que podem ser reutilizados onde você quiser sem preocupação com conflito de código.

- **Elementos customizados:** Um conjunto de APIs JavaScript que permite definir elementos customizados e seus respectivos comportamentos, podendo ser utilizados de diferentes formas na interface da aplicação.
- **Shadow DOM:**  Um conjunto de APIs JavaScript para incorporar uma árvore DOM "fantasma" encapsulada a um elemento — que é renderizada separadamente do DOM do documento principal — e controlar a funcionalidade associada. Nesse caso, você pode manter os recursos de um elemento privados, fazendo com que seu comportamento e estilo possam ser escritos sem medo de causar conflito com outras partes do documento.
- **Templates HTML:** Os elementos <template> e <slot> (en-US) permitem que você escreva templates de marcação que não são exibidas na página. Elas podem então ser reutilizadas várias vezes como modelo de estrutura de um elemento customizado.
