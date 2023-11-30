import CONSTANTS from 'constants.js';
import Tile from './Tile'; // Assuming the Tile component is in the same directory

export default function Board({ player, board, win }) {
  const getTiles = () => {
    const tiles = [];
    board.forEach((value, row, col) => {
      tiles.push(
        <Tile
          key={`tile_${row}_${col}`}
          player={player}
          piece={value}
          row={row}
          column={col}
          win={win}
        />
      );
    });

    return tiles;
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '0px',
        width: '300px',
      }}
    >
      {getTiles()}
    </div>
  );
}
