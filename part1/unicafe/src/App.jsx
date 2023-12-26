import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    const calc = (props.good*1 + props.neutral*0 + props.bad*(-1))/total
    if (total === 0)
        return (
            <p>No feedback given</p>
        )

    return (
        <table>
            <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value ={props.neutral} />
            <StatisticLine text="bad" value ={props.bad} />
            <StatisticLine text="all" value ={total} />
            <StatisticLine text="average" value={calc} />
            <StatisticLine text='positive' value={`${(props.good / total) * 100} %`}/>
            </tbody>
        </table>
    )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>

    )
}

export default App