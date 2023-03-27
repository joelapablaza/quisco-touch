import Image from "next/image";
import useQuiosco from "@/hooks/useQuisco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
      {/* <Image
        width={150}
        height={50}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
      /> */}
      <h1 className="text-4xl">Boutique Hotel</h1>

      <nav className="mt-10 ml-2 grid grid-cols-2 gap-2">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
