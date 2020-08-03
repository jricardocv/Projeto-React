import React, {useState} from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';

function  CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao:'',
    cor:'',
  }

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([])

  function setValue(chave, valor) {
     setValues({
       ...values,
       [chave] : valor,  // nome : 'valor'
     })
 
   } 

  function handleChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
   }
  
  return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form  onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais)
        }}>

        <FormField 
            label="Nome da Categoria"
            type="text"
            name="nome" 
            value={values.nome}
            onChange={handleChange}
        />

      <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>
       </div> 

      {/* <FormField 
            label="Descrição"
            type="????"
            name="descrição"       
            value={values.descrição}
            onChange={handleChange}
      /> */}

        <FormField 
            label="Cor"
            type="color"
            name="cor"       
            value={values.cor}
            onChange={handleChange}
        /> 

        {/*<div>
        <label>
          Cor:
          <input
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
            return (
              <li key={'${categoria}${indice}'}>
                {categoria.nome}
              </li>
            )
        })}
      </ul>
       
        <Link to="/">
          Ir para a home 
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;