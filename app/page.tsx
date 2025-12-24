import Input from "./components/atoms/input/page";
import ExpansiveRoundedCard from "./components/molecules/expansive-rounded-card/page";
import MailIcon from "./components/atoms/icons/google-material-symbols/mail/page";

export default function Home() {
  return (
    <ExpansiveRoundedCard>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="space-y-3">
          <Input type="text" placeholder="E-mail" icon={<MailIcon />} />
          <Input type="password" placeholder="Senha" />
        </div>

        <button type="submit" className="">
          Entrar
        </button>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <a href="#" className="text-blue-500">
          Esqueceu senha
        </a>

        <a href="#" className="text-blue-500">
          Cadastre-se
        </a>
      </div>
    </ExpansiveRoundedCard>
  );
}
