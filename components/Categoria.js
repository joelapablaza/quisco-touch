import Image from "next/image";

const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;

  const handleClick = () => {
    console.log("clickeando");
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full rounded 
    border bg-white hover:cursor-pointer hover:bg-indigo-300"
    >
      <Image
        onClick={handleClick}
        alt="Imagen Icono"
        width={150}
        height={150}
        src={`/assets/img/icono_${icono}.svg`}
        className="m-2 p-2"
      />
    </div>
  );
};

export default Categoria;
