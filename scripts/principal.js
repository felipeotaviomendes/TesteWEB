function efeito(nome_div){

		var dados_Pessoais = document.getElementById('dadospessoais');
		var dados_academicos = document.getElementById('dadosacademicos');
		var historico_profissional = document.getElementById('historicoprofissional');
		var atividades_praticas = document.getElementById('atividadespraticas');
                var contato = document.getElementById('contato');

        switch(nome_div){
        	case "dadospessoais":
        		dados_academicos.style.display = 'none';
        		historico_profissional.style.display = 'none';
        		atividades_praticas.style.display = 'none';
                        contato.style.display = 'none';
        		dados_Pessoais.style.display = 'block';       		
        		break;

        	case "dadosacademicos":
        		dados_Pessoais.style.display = 'none';
        		dados_academicos.style.display = 'block';
        		historico_profissional.style.display = 'none';
        		atividades_praticas.style.display = 'none';
                        contato.style.display = 'none';
        		break;

        	case "historicoprofissional":
        	
        		historico_profissional.style.display = 'block';
        		dados_Pessoais.style.display = 'none';
        		dados_academicos.style.display = 'none';
        		atividades_praticas.style.display = 'none';
                        contato.style.display = 'none';
        		break;

        	case "atividadespraticas":
        		atividades_praticas.style.display = 'block';
        		dados_Pessoais.style.display = 'none';
        		dados_academicos.style.display = 'none';
        		historico_profissional.style.display = 'none';
                        contato.style.display = 'none';
        		break;

                case "contato":
                        contato.style.display = 'block';
                        atividades_praticas.style.display = 'none';
                        dados_Pessoais.style.display = 'none';
                        dados_academicos.style.display = 'none';
                        historico_profissional.style.display = 'none';
                        break;
        }

        
}