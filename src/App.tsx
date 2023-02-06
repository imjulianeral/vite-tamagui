import { useState } from 'react'
import { Button } from 'tamagui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onPress={() => setCount(count => count + 1)}>count is {count}</Button>
    </>
  )
}

export default App
