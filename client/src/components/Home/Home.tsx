import * as React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import AlbumsTable from './AlbumsTable';
import './homeStyles.scss';

export interface AlbumData {
  id: number;
  title: string;
  artist: Artist;
}

interface Artist {
  id: number;
  name: string;
}
export interface AlbumsListProps {
  albums: AlbumData[];
}

function Home() {
  const {
    response: { data: albums },
    error,
    loading,
  } = useFetch<AlbumData[]>('/api');

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="home-page">
      <h2>My Albums</h2>
      <Link to="/new_album">Add Abum</Link>
      {loading && <span>Loading...</span>}
      {albums !== null && <AlbumsTable albums={albums} />}
    </div>
  );
}

export default Home;
