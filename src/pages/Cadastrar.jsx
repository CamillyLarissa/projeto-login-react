import { ArrowLeftIcon, LockIcon, Mail, User2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Cadastrar() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senhaRep, setSenhaRep] = useState();
  const navigate = useNavigate();

  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("person")) || []
  );

  useEffect(() => {
    localStorage.setItem("person", JSON.stringify(person));
  }, [person]);

  const onRegisterSubmit = (nome, email, senha, senhaRep, event) => {
    if (!nome || !email || !senha || !senhaRep) {
      alert("Preencha todos os campos");
      return;
    }
    if (senha !== senhaRep) {
      alert("As senhas não coincidem");
      return;
    }
    const newPerson = { nome, email, senha };
    setPerson([...person, newPerson]);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <>
      <div className="w-160 h-lvh to bg-purple-400 inline-flex justify-center">
        <img
          src="./src/assets/computer.png"
          className="w-120 h-100 m-10 relative top-35"
          m-0
        ></img>
      </div>
      <div className="w-218 h-0 inline-flex content-center text-center relative -top-105 justify-center ">
        <div className="w-180 flex flex-col h-170 relative top-15 ">
          <h2 className="font-extrabold arial text-4xl">Cadastro</h2>
          <form>
            <div className="space-y-25 p-4 rounded-md shadow border-slate-400 flex flex-col mb-20 relative top-15  ">
              <input
                type="text"
                required
                placeholder="Nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              ></input>
            </div>
            <div className="space-y-25 p-4 rounded-md shadow border-slate-400 flex flex-col mb-20 relative top-5 ">
              <input
                type="text"
                required
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="space-y-25 p-4 rounded-md shadow border-slate-400 flex flex-col mb-20 relative -top-5">
              <input
                type="password"
                required
                placeholder="Senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              ></input>
            </div>
            <div className="space-y-25 p-4 rounded-md shadow border-slate-400 flex flex-col mb-20 relative -top-15 ">
              <input
                type="password"
                required
                placeholder="Confirme a senha"
                value={senhaRep}
                onChange={(event) => setSenhaRep(event.target.value)}
              ></input>
            </div>
            <User2Icon className="absolute top-29 left-5"></User2Icon>
            <Mail className="absolute top-53 left-5"></Mail>
            <LockIcon className="absolute top-77 left-5"></LockIcon>
            <LockIcon className="absolute top-101 left-5"></LockIcon>

            <ArrowLeftIcon
              className="absolute top-3 left-0 cursor-pointer"
              onClick={() => navigate(-1)}
            ></ArrowLeftIcon>
            <div className="p-2  w-120 relative -top-28 right-23">
              <input type="checkbox" id="lembrar"></input>
              <label for="lembrar" className="relative left-2 -top-1">
                Eu concordo com os termos & condições
              </label>
            </div>

            <button
              type="submit"
              className="to bg-purple-400 text-white px-70 py-3 rounded-md relative bottom-20 font-bold hover:bg-purple-500"
              onClick={(event) => {
                event.preventDefault();
                onRegisterSubmit(nome, email, senha, senhaRep);
              }}
            >
              Cadastrar
            </button>
          </form>
          <p className="relative -top-11">Já possui uma conta? </p>
          <a
            href=""
            onClick={() => navigate("/")}
            className="relative hover:underline -top-17 left-110 w-5 font-bold text-purple-800"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default Cadastrar;
