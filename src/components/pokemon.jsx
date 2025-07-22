import { useGetPokemonByIdQuery } from "../app/services/pokemonApi";

const colors = {
  fire: "#ffa73d",
  grass: "#8feb90",
  electric: "#fae83f",
  water: "#70ffea",
  ground: "#a9a9a9",
  rock: "#a5e52b",
  fairy: "#a9a9a9",
  poison: "#a5e52b",
  bug: "#94ecbe",
  dragon: "#ffa73d",
  psychic: "#7c7db6",
  flying: "#fcca46",
  fighting: "#a9a9a9",
  normal: "#d3d3d3",
  ice: "#00f2f2",
  dark: "#4f7ecf",
  ghost: "#7685a7",
  steel: "#808080",
};

const Pokemoncart = ({ id }) => {
  const { data, isLoading, error } = useGetPokemonByIdQuery(id);
  const pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  function getTagNumber() {
    if (data.id.toString().length == 1) {
      return `#00${data.id}`;
    } else if (data.id.toString().length == 2) {
      return `#0${data.id}`;
    } else {
      return `#${data.id}`;
    }
  }
  function getPokemonTypebynumber(num) {
    return data.types[num]?.type.name;
  }
  function getPokemonType() {
    let first = getPokemonTypebynumber(0);
    let second = getPokemonTypebynumber(1);
    let istwotype = false;
    if (second) {
      istwotype = true;
    }
    if (istwotype) {
      const type = `${first}/${second}`;
      return type;
    } else {
      const type = `${first}`;
      return type;
    }
  }
  function typetocolor(num) {
    for (const [key, value] of Object.entries(colors)) {
      if (key == getPokemonTypebynumber(num)) {
        return value;
      }
    }
  }
  return (
    <>
      {isLoading ? (
        <div></div>
      ) : error ? (
        console.log("error :", id)
      ) : data ? (
        <>
          <div
            className="sm:w-48 w-44 lg:w-52 xl:w-56 sm:h-80 h-72 lg:h-[350px] xl:h-[370px] rounded-[10px] p-0.5 z-0 relative hover:scale-[1.01] hover:shadow hover:shadow-lightwhite transition-all"
            style={{
              background: `linear-gradient(135deg, ${typetocolor(0)} 45% , ${
                typetocolor(1) || typetocolor(0)
              } 55%`,
            }}
          >
            <div className="absolute size-full m-[-2px] z-40">
              <div className="relative size-full rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out before:ease-in-out before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:h-[200%] before:w-[200%] before:bg-linear-to-t before:from-transparent/5 before:via-transparent/30 before:from-10% before:via-30% before:to-90% before:to-ghost/90 before:rotate-[-60deg] before:transition-all before:duration-[500ms]  before:opacity-0 hover:before:opacity-100 hover:before:rotate-[-45deg] hover:before:translate-y-[100%]"></div>
            </div>
            <div className="w-full h-full z-10 rounded-[10px] bg-bgcart flex flex-col justify-around items-center relative py-2">
              <div
                className="absolute top-0 left-0 rounded-tl-[6px] rounded-br-[6px] px-0.5"
                style={{ backgroundColor: `${typetocolor(0)}` }}
              >
                <p className=" text-[12px] 2xl:text-sm">{getTagNumber()}</p>
              </div>
              <div className="rounded-[100px] size-36 sm:size-40 lg:size-44 2xl:size-[180px] p-6 flex justify-center items-center bg-linear-to-b from-neutral-600 to-bgcart shadow-[0_0_10px_10px_rgba(202,201,201,0.05)]">
                <img
                  className="size-full"
                  src={pokemonImgUrl}
                  alt={`${data.name}-img`}
                />
              </div>
              <p className="text-lightwhite text-lg 2xl:text-xl font-lato font-semibold">
                {data.name}
              </p>
              <div className="flex gap-5">
                <div className="flex flex-col justify-center items-center gap-0.5">
                  <p className="text-sm xl:text-[16px] font-lato text-lightwhite/50">
                    weight
                  </p>
                  <p className="text-lightwhite text-sm xl:text-[16px] font-lato font-semibold">
                    {data.weight / 10} kg
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5">
                  <p className="text-sm font-lato xl:text-[16px] text-lightwhite/50">
                    height
                  </p>
                  <p className="text-lightwhite xl:text-[16px] text-sm font-lato font-semibold">
                    {data.height / 10} m
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="font-lato text-sm xl:text-[16px] text-lightwhite/50">
                  type:{" "}
                </p>
                <p className="font-lato text-sm xl:text-[16px] font-bold text-lightwhite">
                  {getPokemonType()}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <span>null</span>
      )}
    </>
  );
};

export default Pokemoncart;
