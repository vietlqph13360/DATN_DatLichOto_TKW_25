import { useState } from 'react'
import './App.css'
import Header from './components/Header'
Header
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Đặt lịch sửa chữa ô tô nhóm TKW_25</h1>
      <h3>hahahahah</h3>
      <Header/>
    </div>
  )
}

export default App
