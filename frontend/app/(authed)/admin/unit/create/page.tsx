import { twMerge } from "tailwind-merge";

function InputField({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={twMerge(className, "bg-gray-300 text-black py-1 px-3 rounded-sm w-full text-lg")} {...props} />
}

export default function UnitCreatePage() {
  const onUnitCreate = async (form: FormData) => {
    "use server";

    void form;
  };

  return (
    <form action={onUnitCreate} className="flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl">Cadastrar Unidade</h1>

      <label htmlFor="id" className="flex flex-col items-start w-full max-w-xl">
        <h1 className="text-sm">ID:</h1>
        <InputField name="id" id="id" type="text" placeholder="-" />
      </label>

      <label htmlFor="name" className="flex flex-col items-start w-full max-w-xl">
        <h1 className="text-sm">Nome:</h1>
        <InputField name="name" id="name" type="text" placeholder="-" />
      </label>

      <button type="submit" className="bg-black text-white px-5 py-1 mt-3">
        Cadastrar
      </button>
    </form>
  )
}
