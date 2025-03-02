import { useEffect, useState } from "react";
import "./App.css";
import { ArrowLeftIcon, LockIcon, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const handleImageClick = () => {
    navigate("/cadastro");
  };

  const handleLoginClick = (event) => {
    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }
    event.preventDefault();
    const person = JSON.parse(localStorage.getItem("person")) || [];
    const personFound = person.find(
      (person) => person.email === email && person.senha === senha
    );
    if (personFound) {
      alert("Login realizado com sucesso!");
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Email ou senha incorretos");
    }
  };

  return (
    <>
      <div className="w-160 h-lvh to bg-purple-400 inline-flex justify-center">
        <div className="w-130 h-120 flex flex-col text-center relative top-35 ">
          <h1 className=" text-white font-bold text-5xl mb-15 relative top-20">
            Olá, Seja Bem Vindo!
          </h1>
          <p className="text-white relative top-13">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatum asperiores exercitationem similique mollitia eius.
          </p>
          <p className="text-white relative top-18 "> Não tem uma conta?</p>
          <button
            className=" text-white w-50 py-3 rounded-md relative top-25 left-40 font-bold hover:bg-gray-100 border-2 border-orange-50 hover:text-gray-700"
            onClick={handleImageClick}
          >
            Cadastrar
          </button>
        </div>
      </div>
      <div className="w-218 h-0 inline-flex content-center text-center">
        <div className="w-180 h-120 top-20 relative left-22 flex-col space-y-10  ">
          <h2 className="font-extrabold arial text-4xl">Login</h2>
          <form>
            <div
              className="space-y-25 p-4 rounded-md shadow border-slate-400 flex flex-col mb-20 relative top-10 "
              for="email"
            >
              <input
                type="text"
                required
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="space-y-25 p-4 rounded-md shadow border-slate-400 flex flex-col active:border-s-transparent">
              <input
                type="password"
                id="senha"
                required
                placeholder="Senha"
                onChange={(event) => setSenha(event.target.value)}
              ></input>
            </div>
            <Mail className="absolute top-34 left-5"></Mail>
            <LockIcon className="absolute top-58 left-5"></LockIcon>

            <a href="" className="relative top-8 left-72 hover:underline">
              Esqueceu a senha?
            </a>
            <div className="p-2  w-60 relative right-18">
              <input type="checkbox" id="lembrar"></input>
              <label for="lembrar" className="relative -top-1 left-2">
                Lembrar senha
              </label>
            </div>

            <button
              type="submit"
              onClick={handleLoginClick}
              className="to bg-purple-400 text-white px-70 py-3 rounded-md relative top-16 font-bold hover:bg-gray-400"
            >
              Login
            </button>
            <p className="relative top-25 ">
              Ou entre com suas plataformas sociais
            </p>
            <div className=" inline-flex  p-6 relative top-22">
              <img
                className="rounded full w-16 h-16 cursor-pointer mr-5"
                src="./src/assets/R.png"
                alt="R"
                onClick={handleImageClick}
              />
              <img
                className="rounded full w-12 h-12 cursor-pointer mr-5 relative top-2"
                src="./src/assets/face.png"
                alt="Logo-Twitter"
                onClick={handleImageClick}
              />
              <img
                className="rounded full w-13 h-13 cursor-pointer relative top-1"
                src="./src/assets/fa.png"
                alt="Logo-Facebook"
                onClick={handleImageClick}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
