import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Conditional} from "../../src/index.tsx"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <Conditional value={count <= 5}>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </Conditional>

            </div>
            <h1>react-condi</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    If the count is greater than 5, the logos will be hidden.
                </p>
            </div>
        </>
    )
}

export default App
