import React from 'react';
import '../../css/style.css'
function Projects(){
  return(
    <div>
      <div class="header" id="myHeader">
      <h2>Projetos Front-End</h2>
      </div>

      <div className='container'>

      <div className='card'>
      <p className='card-text'>Foi desenvolvido um jogo de perguntas e respostas baseado
         no jogo Trivia (tipo um show do milhão americano) utilizando
         React e Redux, na qual suas funcionalidades foram desenvolvidas
         em grupo de acordo com as demanas definidas em um quadro Kanban.   
      </p>     
      
      <a href ='https://project-trivia.netlify.app/ ' 
      target="_blank"
      rel="noreferrer"
      className='mybutton' > Site do Projeto</a>

      <a href ='https://project-trivia.netlify.app/ ' 
      target="_blank"
      rel="noreferrer"
      className='mybutton' >Repositório GitHub</a>
      
       
      </div>
    
      <div className='card'>
      <p className='card-text'>Projeto que simula uma pokédex. Testes feito com a React Testing Library.</p>
      
      <a href ='https://pokedex-react-rtl.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a>

      <a href ='https://pokedex-react-rtl.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>
     
      
      </div>
      <div className='card'>
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

      <a href ='https://frontend-online-store.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>
      
      
      </div>
      <div className='card'>
      <p className='card-text'>Projeto que simula uma pokédex. Testes feito com a React Testing Library.</p>
     
      <a href ='https://pokedex-react-rtl.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer"> Site do Projeto</a> 

       <a href ='https://pokedex-react-rtl.netlify.app/' 
      className='mybutton'
      target="_blank"
      rel="noreferrer">Repositório GitHub</a>      
      </div>
      

    </div>
    </div>
    
  )
}

export default Projects;
