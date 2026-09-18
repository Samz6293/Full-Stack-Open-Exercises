import { useState } from 'react'

const Button = ({text ,count, setCount}) => {
    return (
        <button onClick={() => setCount(count+1)}>{text}</button>
    )
}

const Statistics = ({text, count}) => {
    return (
        <p>{text} {count}</p>
    )
}

const Average = ({good, bad, total}) => {
    return (
        <p>average {total>0 ? (good - bad) / total : 0}</p>
    )
}

const PositivePercentage = ({good, total}) => {
    return (
        <p>positive {total> 0 ? (good / total) * 100 : 0} %</p>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button text={"good"} count={good} setCount={setGood}/>
      <Button text={"neutral"} count={neutral} setCount={setNeutral}/>
      <Button text={"bad"} count={bad} setCount={setBad}/>

      <h2>Statistics</h2>

      <Statistics text={"good"} count={good}/>
      <Statistics text={"neutral"} count={neutral}/>
      <Statistics text={"bad"} count={bad}/>
      <Statistics text={"all"} count={good + neutral + bad}/>

      <Average good={good} bad={bad} total={good + neutral + bad} />
      <PositivePercentage good={good} total={good + neutral + bad}/>

    </div>
  )
}

export default App