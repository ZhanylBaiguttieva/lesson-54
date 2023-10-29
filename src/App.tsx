
import React, {useState} from "react";
import Cell from './Cell/Cell';
import './App.css';

interface Cell {
    id: number;
    hasItem: boolean;
    clicked: boolean;
}

function App() {
    const createItems = (length: number) => {
        const cells: Cell[] = [];
        const tries: number = 0;
        for(let i = 0; i < length; i++) {
            cells.push({id: i, hasItem: false, clicked:false});
        }
        const index = Math.floor(Math.random() * cells.length);
        cells[index].hasItem = true;
        return {cells, tries};
    }

    const reset = () => {
        setState(() => createItems(36));
    }

    const onclick = (id: number) => {
        setState(state => {
            const cells = state.cells.map(cell => {
                if (cell.id === id) {
                    cell.clicked = true;
                }
                return cell;
            });
            const tries = state.tries++;
            return {cells, tries};
        });
    }

    const [state, setState] = useState(createItems(36));
    const containerStyle: React.CSSProperties = {width: '190px', height: '190px'};
    return (
        <div className="App" style={containerStyle}>
            {state.cells.map(cell => {
                    return (
                        <Cell hasItem={cell.hasItem} clicked={cell.clicked} onClick={() => onclick(cell.id)} />
                    );
                })
            }
            <p>Total tries: {state.tries}</p>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default App
