import * as React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './albumFormStyles.scss';

interface ArtistData {
  id: number;
  name: string;
}

interface FormState {
  title: string;
  artistId: number;
}

function AlbumForm() {
  const {
    response: { data: artists },
    error,
    loading,
  } = useFetch<ArtistData[]>('/api/artists');

  return (
    <div className="album-form-page">
      <h2>FOrm Hre</h2>
    </div>
  );
}

export default AlbumForm;
