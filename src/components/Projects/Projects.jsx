import React from 'react';
import '../../css/style.css'
function Projects(){
  return(
    <div>
      <div class="header" id="myHeader">
      <h2>Front-End</h2>
      </div>

      <div className='container'>

      <div className='card'>
      <h3>project-trivia-react-redux</h3>
      <p className='card-text'>Foi desenvolvido um jogo de perguntas e respostas baseado
         no jogo Trivia (tipo um show do milhão americano) utilizando
         React e Redux, na qual suas funcionalidades foram desenvolvidas
         em grupo de acordo com as demanas definidas em um quadro Kanban.   
      </p>     
      
      <a href ='https://project-trivia.netlify.app/ ' 
      target="_blank"
      rel="noreferrer"
      className='mybutton' > Site do Projeto</a>

      <a href ='https://github.com/ericvini/project-trivia-react-redux-trybe' 
      target="_blank"
      rel="noreferrer"
      className='mybutton' >Repositório GitHub</a>
      
       
      </div>
    
      <div className='card'>
      <h3>project-react-testing-library</h3>
      <p className='card-text'>Projeto que simula uma pokédex. Testes feito com a React Testing Library.</p>
      
      <a href ='https://pokedex-react-rtl.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a>

      <a href ='https://github.com/ericvini/project-react-testing-library-trybe' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>
     
      
      </div>
      <div className='card'>
      <h3>project-frontend-online-store</h3>
      <p className='card-text'>
     
      Nesse projeto foi criado uma versão simplificada, 
      sem persistência no banco de dados, de uma loja online, 
      as suas funcionalidades foram desenvolvidas em grupo de 
      acordo com demandas definidas em um quadro Kanban, em um 
      cenário mais próximo ao do mercado de trabalho. Os usuários 
      podem Buscar produtos, por termos, e categorias a partir da API 
      do Mercado Livre.
      </p>
      
      <a href ='https://frontend-online-store.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a>

      <a href ='https://github.com/ericvini/project-frontend-online-store-trybe' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>
      
      
      </div>
      <div className='card'>
      <h3>Reddit-React-Redux</h3>
      <p className='card-text'> Aplicação que permite
       a quem usá-la ver posts referentes a 2 subreddits :
        reactjs frontend.No momento que selecionar o subreddit , 
        uma requisição precisa ser feita no reddit para buscar 
        os posts referentes ao subreddit escolhido. O estado da aplicação
        está sendo gerenciado com Redux.</p>
     
      <a href ='https://reddit-react-redux.netlify.app' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a> 

       <a href ='https://github.com/ericvini/exercise-reddit-react-redux-trybe' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>      
      </div>
      <div className='card'>
      <h3>Project-Movie-Card-Library-Crud</h3>
      <p className='card-text'> Aplicação que permite
       a quem usá-la Adicionar um novo filme à lista,
       Listar todos os filmes cadastrados, com uma página
        de informações resumidas sobre cada filme e uma página 
        de informações detalhadas de um filme selecionado, Editar 
        um filme da lista, E apagar um filme da lista.</p>
     
      <a href ='https://movie-card-crud.netlify.app' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a> 

       <a href ='https://github.com/ericvini/project-movie-card-library-crud-trybe' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>      
      </div>
      <div className='card'>
      <h3>Game-Arcade</h3>
      <p className='card-text'> Jogo feito com JavaScript, HTML e CSS.
      O jogo consiste em levar o personagem ate o rio sem colidir com os inimigos.</p>
     
      <a href ='https://game-acarde.netlify.app' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a> 

       <a href ='https://github.com/ericvini/project-game-arcade-udacity' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>      
      </div>
      

    </div>
    </div>
    
  )
}

export default Projects;
