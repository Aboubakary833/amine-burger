import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fillProductStore } from './store/reducers/productsReducer'
import axios from 'axios'
import { login } from './store/reducers/userReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(function() {
    (async function() {
      const {data} = await axios.get('faker/products.json')
      const auth_user = JSON.parse(localStorage.getItem('auth_user')) || null
   if(auth_user) {
    dispatch(login(auth_user))
   }
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