import { Button } from '../components/Button';
import { useMovies } from '../contexts/MoviesContext';


import '../styles/sidebar.scss';

export const SideBar = () => {
  // Complete aqui

  const { genres, handleClickButton, selectedGenreId } = useMovies()

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}