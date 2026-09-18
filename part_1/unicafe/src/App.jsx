import { useState } from 'react'

const Button = ({text ,count, setCount}) => {
    return (
        <button onClick={() => setCount(count+1)}>{text}</button>
    )
}

const Statistics = ({goodText, goodCount, 
    neutralText, neutralCount,
    badText, badCount,
    allText, allCount}) => {

    if(allCount === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <p>{goodText} {goodCount}</p>
            <p>{neutralText} {neutralCount}</p>
            <p>{badText} {badCount}</p>
            <p>{allText} {allCount}</p>

            <Average good={goodCount} bad={badCount} total={allCount} />
            <PositivePercentage good={goodCount} total={allCount}/>
        </div>
    )
}

const Average = ({good, bad, total}) => {
    return (
        <p>average {total > 0 ? (good - bad) / total : 0}</p>
    )
}

const PositivePercentage = ({good, total}) => {
    return (
        <p>positive {total > 0 ? (good / total) * 100 : 0} %</p>
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

      <Statistics goodText={"good"} goodCount={good}
       neutralText={"neutral"} neutralCount={neutral}
       badText={"bad"} badCount={bad}
       allText={"all"} allCount={good + neutral + bad}/>


    </div>
  )
}

export default App