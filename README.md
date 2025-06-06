<div align="center">
    <img 
        src="./src/Assets/Image/logo.png"
        width="50%"
    />
</div>

---

<h1 align="center"> Propósito da Aplicação</h1> 
<p>O <strong>O Projeto Pokédex React</strong> é uma aplicação web desenvolvida para navegar e exibir informações detalhadas sobre Pokémon, Fazendo a utilização da API pública PokeAPI. Onde o usuário tem total acesso a uma lista de Pokémon, pesquisar por o tipo, nome, visualizar informações detalhadas do mesmo.</p>

---

<h1 align="center"> Funcionalidades</h1>

<ul>
    <li><strong>Lista de Pokémon:</strong> Exibindo na tela inicial uma lista contendo 10 Pokémon com imagem, nome e tipo </li>
    <li><strong>Carregar mais:</strong> Botão com funcionalidade de carregar mais Pokémon dinamicamente.</li>
    <li><strong>Pesquisa:</strong> Campo de busca para encontrar Pokémon especifico.</li>
    <li><strong>Voltar ao topo</strong> Botão com funcionalidade para redirecionar ao topo da página.</li>
    <li><strong>Filtragem por Tipo:</strong> Filtra Pokémon pelo tipo(ex: "ghost", "fire").</li>
    <li><strong>Tela de Informações:</strong> Exibe informações detalhadas do Pokémon selecionado, Nome, Tipo, movimento, habilidades juntamente com especificações.</li>
    <li><strong>Troca de Tema:</strong>Alternância entre temas claro e escuro com toggle</li>
    <li><strong>Responsividade</strong> Design adaptável para diferentes tamanhos de tela (mobile, desktop, tablet)</li>

</ul>

---

<h1 align="center"> Ferramentas Utilizadas</h1>

<ul>
    <li><strong>React:</strong> Biblioteca utilizada para a construção de interfaces dinâmicas e reutilizáveis, escolhida por sua eficiência.</li>
    <li><strong>Styled-Componentes:</strong> Utilizado para estilização com CSS-in-JS, oferecendo escopo local, suporte a temas e facilidade de manutenção.</li>
    <li><strong>PokeApi:</strong> API gratuita e rica em dados sobre Pokémon, ideal para o propósito da aplicacão.</li>
    <li><strong>React Router:</strong> Gerencia rotas para suportar navegação entre a Pokédex e Informações.</li>
    <li><strong>Vitest, React Testing Library e Jest DOM:</strong> Ferramentas de teste para garantir a funcionalidade dos componentes e hooks.</li>
    <li><strong>Vite:</strong> Ferramenta de build escolhida por sua velocidade e suporte moderno a ES Modules, otimizando o desenvolvimento e o deploy.</li>
</ul>

---

<h1 align="center"> Decisões Adotadas</h1>

<h3>1. Carregamento incremental</h3>
<ol>
    <li>Pokémon sao carregados em lotes de (10 por vez) e exibidos na página</li>
    <li>Justificativa: Carregar apenas o necessario e melhorar na economia de cados em conexões lentas.</li>
</ol>

<h3>2. Design Responsivo</h3>
<ol>
    <li>Uso de media queries e grid layout para adaptar a interface.</li>
    <li>Justificativa: Garante usabilidade em dispositivos variados, como smartphones e desktops.</li>
</ol>

<h3>3. Temas Claro/Escuro:</h3>
<ol>
    <li>Implementação com ThemeProvider e styled-components.</li>
    <li>Justificativa: Melhora a acessibilidade e preferência do usuário</li>
</ol>

---

<h1 align="center">Passo a Passo para Rodar o Projeto</h1>

<h3>Pré-requisitos</h3>
<ul>
    <li><strong>Node.js:</strong> Versao 18 ou superior.</li>
    <li><strong>NPM:</strong> Incluído com o Node.js (ou use yarn, se  preferir).</li>
    <li><strong>Git:</strong> Para clonar o repositório.</li>
</ul>

<h3>Clone o Repositório</h3>

```bash
git clone https://github.com/ClismanFreitas/Pokedex.git
cd Pokedex


