import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import { Portfolio } from './components/Portfolio'

export function App() {
  return <>
    <Header />
    <main class="flex flex-col">
      <Introduction />
      <Portfolio />
      <Contact />
    </main>
  </>
}
