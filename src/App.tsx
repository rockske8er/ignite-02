import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { MoviesProvider } from './contexts/MoviesContext';

export function App() {

  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>

  )
}