import { Header } from './components/Header';
import './styles/global.css';

function App() {
  return (
    <div>
      <Header />

      <div className='max-w-6xl my-8 mx-auto px-4 grid grid-cols-2 gap-8 items-start'>
        <aside>
          sidebar
        </aside>

        <main>
          teste
          teste
          teste
          teste
        </main>
      </div>
    </div>
  )
}

export default App;
