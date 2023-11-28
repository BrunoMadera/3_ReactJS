import "./styles.css";

const Teste = () => {
  const count = 1;

  return (
    <>
      <h1>Este é um arquivo JSX {count} </h1>
      <h2 className="teste" id="teste">
        Vermelho
      </h2>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.coderhouse.com.br%2F&psig=AOvVaw1J7suG98tB-5UCpDrynCR0&ust=1701214431511000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC2juGr5YIDFQAAAAAdAAAAABAL"
        alt=""
      />
      <hr />

      <button onClick={() => console.log("botao clicado")} > Clique </button> ;
      <button onMouseDown={() => console.log("botao Down")} > Clique </button> ;
      <button onMouseLeave={() => console.log("botao sai")} > Clique </button> ;
    </>
  );
};

export default Teste;