<div align=center>

# Dogs

<img src="https://img.shields.io/badge/-REACT-cyan?style=for-the-badge&logo=react">
<img src="https://img.shields.io/badge/-TYPESCRIPT-darkblue?style=for-the-badge&logo=typescript">
<img src="https://img.shields.io/badge/-styled-gray?style=for-the-badge&logo=styled-components">

👇 Clique na imagem para ser direcionado para o site 👇

[![dogs](https://user-images.githubusercontent.com/80923539/179384633-6d6f5082-b492-422b-987f-9b414a918ecc.jpg)](https://dogs-six-drab.vercel.app/)

Projeto Desenvolvido a partir da plataforma Origamid, no curso de React Completo.

O projeto original é desenvolvido sem o uso do Typescript e com CSS modules, então, para diferenciar um pouco, decidi desenvolver com o Typescript para deixar o projeto mais robusto e com Styled-Components.

Se trata de uma rede social para cachorros, onde você pode se cadastrar, fazer login, postar foto do seu dog, comentar nas suas fotos e nas de outros usuários caso esteja logado, deletar somente suas fotos caso queira, ver o feed de outros usuários e ver as estatísticas de suas fotos (quantidade de visualizações totais e de cada foto).

Nesse projeto, reforcei de forma extensiva meu conhecimento em requisições, gerenciamento de estado global, componentização, custom hooks, rotas (aprendi nested routes pela primeira vez) e manipulação de inputs e formulários em geral. Também aprendi muitas coisas novas, como alguns hooks que não tinha visto anteriormente (useRef, useCallback e useMemo), vi na prática como utilizar o lazy e suspense, aprendi a usar a biblioteca Victory para lidar com os gráficos das estatísticas, a manipular svgs criando componentes e muito mais.

As fotos e comentários postados ficam disponíveis por 10 minutos para visualização. Escolhi deixar uma escolha de senha simples só para não dificultar o seu cadastro (senha de no mínimo 3 caracteres, só isso). Você pode cadastrar com seu email mesmo se quiser testar a funcionalidade de recuperação de senha em caso de perda, uma mensagem com um link será enviada para o seu endereço de email para prosseguir com a redefinição de senha (esta mensagem demora um bocado pra chegar).

</div>

## Como usar

- Faça o seu cadastro
- Caso seu cadastro seja validado, você será enviado automaticamente para sua página de usuário.
- Para postar uma foto, no menu de navegação da sua conta, clicar no que tem o ícone "+", definir nome, peso, idade e a foto do seu dog fazendo o upload do arquivo de imagem no seu pc. Clique em postar e você será enviado para a página inicial do seu feed onde poderá ver todas as suas fotos postadas.
- Agora com sua(s) foto(s) postada(s), você pode visualizar também as estatísticas dela(s) indo no menu e clicando no ícone onde tem um gráfico.
- Caso deseje deletar alguma foto sua, clicar nela e, no modal, procurar na seção onde ficam as infos da foto e os comentários o botão "deletar". Irá aparecer um confirm no navegador perguntando se você deseja mesmo deletar a foto. Aperte o "ok" e pronto.
- Para comentar, digite o coment na textarea e clique no ícone animado do dog ao lado da mesma. Lembrando que você precisa estar logado para aparecer a opção de comentar.

## Para instalar

- `npm install`

## Para Rodar

- `npm run dev`
