import React, { useState } from "react";
import "./App.css";
import IMGVLTN from "../src/assets/images/Group.png";
import IMGSTAR from "../src/assets/images/star.svg";
import IMGLAMPADA from "../src/assets/images/lampada.svg";
import IMGLINHA from "../src/assets/images/grafico-linha.svg";
import IMGBARRA from "../src/assets/images/grafico-barra.svg";
import IMGENG from "../src/assets/images/engrenagem.svg";
import IMGSETA from "../src/assets/images/seta.svg";
import IMGAULA from "../src/assets/images/aula.svg";
import IMGBACK from "../src/assets/images/back.svg";
import IMGFORWARD from "../src/assets/images/forward.svg";
import IMGLOGO from "../src/assets/images/logo.svg";
import Menu from "./components/Menu";
import { User } from "./model/User";
import axios from "axios";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

const App: React.FC = () => {
  const [msg, setMessage] = useState<string>();
  const { register, handleSubmit, control, setValue } = useForm<User>();

  const handleAddUser = async (data: User) => {
    let response = await axios.post("http://localhost:3001/usuario", data);
    
    if (response.status == 200 || response.status == 201) {
      setMessage("Parabéns você entrou na lista");
      setValue("nome", "")
      setValue("email", "")
      setValue("telefone", "")
    }
        
  };

  return (
    <div className="App ">
      <div className="background-full">
        <Menu />

        <div className="mt-0 camada-img-valuation">
          <div className="group-img">
            <img className="valuation-img" src={IMGVLTN} />
          </div>
        </div>
        <div className="camada-title-1 ">
          <h1 className="title-1">
            Domine o método mais usado no mundo para encontrar ações baratas.
          </h1>
          <p className="subtitle-1">
            Bancos, fundos, investidores. Todos eles usam o Valuation pra fechar
            bons negócios.{" "}
          </p>
        </div>

        <div className="form-inscricao">
          <form className="form-group" onSubmit={handleSubmit(handleAddUser)}>
            <span className="title-form text-white">
              Entre na lista para ser avisado no lançamento do curso
            </span>
            <input
              {...register("nome")}
              id="nome"
              name="nome"
              className="form-control mb-3 mt-3"
              placeholder="Nome"
            />
            <input
              {...register("email")}
              id="email"
              name="email"
              className="form-control mb-3"
              placeholder="E-mail"
            />
            <InputMask
              mask="(99)99999-9999"
              {...register("telefone")}
              id="telefone"
              name="telefone"
              className="form-control mb-3"
              placeholder="Whatsapp (opcional)"
            />
            {msg && (
              <div className="text-message">
                <span className="text-white">{msg}</span>
              </div>
            )}
            <button
              type="submit"
              className="btn btn-lg btn-block botao-entrar text-white"
            >
              Entrar na lista
            </button>
          </form>
        </div>

        <div className="camada-avaliacao">
          <span className="text-white">Avaliação média do curso</span>
          <ul className="list-star mb-0">
            <li className="list-star-img">
              <img src={IMGSTAR} />
            </li>
            <li className="list-star-img">
              <img src={IMGSTAR} />
            </li>
            <li className="list-star-img">
              <img src={IMGSTAR} />
            </li>
            <li className="list-star-img">
              <img src={IMGSTAR} />
            </li>
            <li className="list-star-img">
              <img src={IMGSTAR} />
            </li>
          </ul>
          <span className="text-white " style={{ fontSize: 10 }}>
            NPS: 83.6
          </span>
        </div>
        <div className="camada-preparado">
          <h1 className="title-preparado">Você, preparado para</h1>
          <h1 className="title-preparado-dois">qualquer situação.</h1>
        </div>

        <div className="camada-tipo-1 ">
          <img className="img-tipo" src={IMGLAMPADA} />
          <p className="texto-tipo text-white">
            Startups(Valuation por Múltiplos)
          </p>
        </div>
        <div className="camada-tipo-2 ">
          <img className="img-tipo" src={IMGLINHA} />
          <p className="texto-tipo text-center text-white">
            Empresas em Crescimento e maturação (Fluxo de Caixa Descontado)
          </p>
        </div>
        <div className="camada-tipo-3 ">
          <img className="img-tipo" src={IMGBARRA} />
          <p className="texto-tipo text-white">
            Empresas maduras (Modelo de Dividendo Descontado)
          </p>
        </div>
        <div className="camada-tipo-4 ">
          <img className="img-tipo" src={IMGENG} />
          <p className="texto-tipo text-center text-white">
            Empresas em Reestruturação (turn-around)
          </p>
        </div>
        <div className="camada-titulo-modulos">
          <h1 className="titulo-modulos text-center text-white">
            Todos os Módulos
          </h1>
        </div>
        <div className="camada-image-modulos">
          <img className="imagem-seta" src={IMGSETA} />
        </div>
        <div className="camada-grupo-modulo">
          <div className="camada-numero-pagina">
            <span className="modulo-numero-pagina">01</span>
          </div>
          <div className="camada-modulo-titulo-pagina">
            <h1 className="modulo-titulo-pagina text-white">
              Bem Vindo ao Curso
            </h1>
            <p className="modulo-subtitulo-pagina text-white">
              Tudo que você precisa saber sobre a metodologia, agenda e
              comunidade, assim como nossos canais de contato.
            </p>
          </div>
          <div className="camada-modulo-quantidade-aula">
            <img src={IMGAULA} className="modulo-quantidade-img" />
            <span className="modulo-quantidade-titulo-1">04 aulas</span>
            <span className="modulo-quantidade-titulo-2">- 06 min</span>
          </div>
          <div className="camada-modulo-lista-aula">
            <ul className="modulo-lista-aula">
              <li>
                <span className="modulo-numero-lista-aula">01</span>
                <span className="modulo-titulo-lista-aula text-white">
                  O que você precisa saber antes de começar
                </span>
              </li>
              <li>
                <span className="modulo-numero-lista-aula">02</span>
                <span className="modulo-titulo-lista-aula text-white">
                  Agenda do Curso
                </span>
              </li>
              <li>
                <span className="modulo-numero-lista-aula">03</span>
                <span className="modulo-titulo-lista-aula text-white">
                  Informações e Grupo
                </span>
              </li>
              <li>
                <span className="modulo-numero-lista-aula">04</span>
                <span className="modulo-titulo-lista-aula text-white">
                  Canais de suporte e contato
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="camada-seta">
          <img className="img-forward" src={IMGFORWARD} />
          2
          <img className="img-back" src={IMGBACK} />
        </div>

        <div className="camada-logo-footer">
          <img src={IMGLOGO} />
        </div>
      </div>
    </div>
  );
};

export default App;
