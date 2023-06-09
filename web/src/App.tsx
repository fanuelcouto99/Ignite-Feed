import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './styles/global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fanuelcouto99.png',
      name: 'Fanuel Couto',
      office: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei  de subir mais um projeto no meu portifólio.É um projeto que fiz no Ignite, evento da RocketSeat.o nome do projeto é Ignite Feed! 🚀' },
      { type: 'link', content: 'https://github.com/fanuelcouto99' },
    ],
    publisedAt: new Date('2023-05-14 10:03:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/trajano177.png',
      name: 'Matheus Trajano',
      office: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei  de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Copa, evento da RocketSeat.o nome do projeto é Copa! 🚀' },
      { type: 'link', content: 'https://github.com/trajano177' },
    ],
    publisedAt: new Date('2023-05-12 20:03:00')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className='max-w-6xl my-8 mx-auto px-4 grid grid-cols-2 gap-8 items-start max-md:grid-cols-1'>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publisedAt={post.publisedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App;
