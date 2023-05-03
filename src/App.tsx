import { NHeader, NTaskBoard } from './components'

function App() {
  return (
    <>
      <NHeader />
      <main className="w-full max-w-3xl px-4 mx-auto lg:px-0">
        <NTaskBoard />
      </main>
    </>
  )
}

export default App
