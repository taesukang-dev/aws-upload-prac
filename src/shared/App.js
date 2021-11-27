import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router'
import Post from '../pages/Post'
import { history } from '../redux/configureStore'

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/" component={Post} />
      </ConnectedRouter>
    </div>
  )
}

export default App
