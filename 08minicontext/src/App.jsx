
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <main className="app-shell">
        <section className="intro">
          <span className="eyebrow">React practice / 08</span>
          <h1>DevWeekend <span>with Ali</span></h1>
          <p>Share your session with a simple React Context login.</p>
        </section>
        <section className="workspace" aria-label="Login workspace">
          <Login />
          <Profile />
        </section>
      </main>
    </UserContextProvider>
  )
}

export default App