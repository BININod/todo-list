import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Head from './components/Head'
import List from './components/List'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head letter='To-Do List'/>
      <List ToDo1='Learn React' ToDo2='Build a To-Do List' ToDo3='Master JavaScript' ToDo4='Apply for Jobs'/>
      <Button button1='Add' button2='Delete'/>
    </>
  )
}

export default App
