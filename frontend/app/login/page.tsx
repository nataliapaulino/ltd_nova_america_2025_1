import { Metadata } from "next";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

function InputField({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input className={twMerge(className, "w-full text-md px-5 py-3 bg-gray-200 text-gray-600 rounded-md")} {...props} />
}

export const metadata: Metadata = {
    title: "Login",
    description: "Login Page",
};

export default function LoginPage() {

    const onLogin = async (form: FormData) => {
        "use server";//obrigatorio 
        console.log('oi mundo');
        console.log(form);
        
        // TODO: Implement login to backend
        void form;
    }
    
    const outroBotao = async (form: FormData) => {
        "use server";//obrigatorio 
        console.log('oi mundo 2 -sem dados direciionar para uma url ');
        // TODO: Implement login to backend
        throw redirect('https://www.uol.com.br');
        void form;
    }

    return (
        <main className="w-full flex flex-col items-center justify-center mt-50">
            <form
                action={onLogin}
                className="flex flex-col w-full h-full max-w-md gap-y-5 items-center justify-center"
            >
                
                <InputField type="text" name="login" id="login" placeholder="Login" />
                <InputField type="password" name="senha" id="senha" placeholder="Senha" />
                <button className="bg-[#333333] text-white px-12 py-2">
                    Login
                </button>
                
            </form>
            <form action={outroBotao}>
            <button className="bg-[#333333] text-white px-12 py-2 mt-4">
                    botao 2
                </button>
            </form>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cadastro</h2>
            <form
                className="flex flex-col w-full h-full max-w-md gap-y-5 items-center justify-center"
            >
                
                <div className="w-full">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-3">Nome Completo</label>
                    <InputField type="text" name="nome" id="nome" placeholder="Nome Completo" />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Email</label>
                    <InputField type="text" name="email" id="email" placeholder="Email" />
                </div>

                <div className="w-full">
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-3">CPF</label>
                    <InputField type="text" name="cpf" id="cpf" placeholder="CPF" />
                </div>

                <div className="w-full">
                    <label htmlFor="rg" className="block text-sm font-medium text-gray-700 mb-3">RG</label>
                    <InputField type="text" name="rg" id="rg" placeholder="RG" />
                </div>

                <div className="w-full">
                    <label htmlFor="data_nasc" className="block text-sm font-medium text-gray-700 mb-3">Data de Nascimento</label>
                    <InputField type="date" name="data_nasc" id="data_nasc" />
                </div>

                <button className="w-full mt-4 bg-sky-500/75 hover:bg-sky-500/100 text-white py-3 rounded">
                    Cadastrar
                </button>               
            </form>
        </main>
    );
}