import Pokemoncart from "./components/pokemon";
import Header from "./components/header";

function App() {
  let list = [];
  for (let i = 1; i <= 40; i++) {
    list.push(<Pokemoncart id={i} key={i} />);
  }
  return (
    <>
      <div className="w-full bg-bgmain flex flex-col items-center gap-10 py-10">
        <Header />
        <div className="container mx-auto flex flex-wrap justify-center gap-x-10 xl:gap-x-12 gap-y-7 xl:gap-y-8">
          {list}
        </div>
      </div>
    </>
  );
}

export default App;
