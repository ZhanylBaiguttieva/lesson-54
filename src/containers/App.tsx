import React, {useState} from "react";
import Cell from '../components/Cell/Cell';
import Counter from "../components/Counter/Counter";
import './App.css';


function App() {
    const createItems = (length: number) => {
        const cells: Item[] = [];
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
            let tries = state.tries;
            const cells = state.cells.map(cell => {
                if (cell.id === id && !cell.clicked) {
                    cell.clicked = true;
                    state.tries++;
                }
                return cell;
            });
            return {cells, tries};
        });
    }

    const [state, setState] = useState(createItems(36));
    const containerStyle: React.CSSProperties = {width: '280px', height: '280px'};
    return (
        <div className="App" style={containerStyle}>
            {state.cells.map(cell => {
                    return (
                        <Cell hasItem={cell.hasItem} clicked={cell.clicked} onClick={() => onclick(cell.id)} />
                    );
                })
            }
            <Counter tries={state.tries} />
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default App
