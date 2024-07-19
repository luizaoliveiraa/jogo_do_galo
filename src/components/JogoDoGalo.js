//Cria aqui o teu componente
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";
// import styles from "../styles/JogoDoGalo.module.css";

const casaVazia = " ";
export function JogoDoGalo() {
  const {
    jogo,
    verificarFimDoJogo,
    adicionarJogada,
    verificarVencedor,
    reiniciarJogo,
  } = useJogoDoGalo();

    function handleClick(jogo, jogadorAtual, indiceLinha, indiceColuna) {
      const casaSelecionada = jogo.tabuleiro[indiceLinha][indiceColuna];

      if (!verificarFimDoJogo(jogo) && casaSelecionada === casaVazia) {
        adicionarJogada(jogo, jogadorAtual, indiceLinha, indiceColuna);
      }
    }
    return (
      <div className="flex flex-col mt-50 justify-center h-screen bg-pink-200">
        <div className="flex justify-center mt-2 text-gray-600 m-5">
          {verificarFimDoJogo(jogo) ? (
            <p>
              {verificarVencedor(jogo)
                ? `${verificarVencedor(jogo)} venceu!`
                : "Empate."}  
            </p>
          ) : (
            <p className="text-gray-900">Jogador atual: {jogo.jogadorAtual}</p>
          )}
        </div>
        <div>
          {jogo.tabuleiro.map((line, i) => { //map transforma oq está dentro do array em no que eu quiser e retornar em um novo array
            return (
              <div
                className="flex justify-center mt-100 w-auto text-gray-600 "
                key={i}
              >
                {line.map((columns, j) => {
                  return (
                    <button
                      className="w-24 h-24 border rounded-lg m-1 border-gray-400 shadow-inner shadow-pink-400"
                      key={j}
                      onClick={() => handleClick(jogo, jogo.jogadorAtual, i, j)}
                    >
                      {columns}
                    </button>
                  );
                })}
              </div>
            );
          })}

          <div className="flex flex-col ">
            <div className="flex mt-5 justify-center">
              <button
                className="bg-pink-600 w-40 rounded-lg p-2 text-gray-100 "
                onClick={() => reiniciarJogo()}
              >
                RESTART
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
