import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fillProductStore } from './store/reducers/productsReducer'
import axios from 'axios'

const App = () => {

  const dispatch = useDispatch()

  useEffect(function() {
    (async function() {
      const {data} = await axios.get('faker/products.json')
      dispatch(fillProductStore(data))
    })()
  })

  return <div id="App">
    <div className="container">
      <Nav />
      <Main />
    </div>
  </div>
}

export default App