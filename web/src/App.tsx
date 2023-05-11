import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './styles/global.css';

function App() {
  return (
    <div>
      <Header />

      <div className='max-w-6xl my-8 mx-auto px-4 grid grid-cols-2 gap-8 items-start'>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App;
