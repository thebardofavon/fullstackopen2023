    import { useState } from "react";

    const Display = (props) => {
        return(
            <div>{props.counter}</div>
        )
    }

    const App = () => {
        const [ counter, setCounter] = useState(0)


        return(
            <div>
                <Display counter={counter} />
                <button onClick={() => setCounter(counter + 1)}>
                    Increment
                </button>
                <button onClick={() => setCounter(0)}>
                    Reset
                </button>
                <button onClick={() => setCounter(counter - 1)}>
                    Decrement
                </button>
            </div>

    )
}


export default App