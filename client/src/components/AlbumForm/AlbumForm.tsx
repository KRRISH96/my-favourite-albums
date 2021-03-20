import * as React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { useFetch } from '../../hooks/useFetch';
import './albumFormStyles.scss';

interface ArtistData {
  id: number;
  name: string;
}

interface PostData {
  title: string;
  artistId: number;
}

interface SelectOption {
  label: string;
  value: number;
}

export const constructSelectOptions = (optionsList: ArtistData[]) =>
  optionsList.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

function AlbumForm() {
  const {
    response: { data: artists },
    error,
    loading,
  } = useFetch<ArtistData[]>('/api/artists');

  const [selectedArtist, setSelectedArtist] = useState<SelectOption | null>(
    null
  );
  const [title, setTitle] = useState<string>('');

  const createAlbum = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/new_album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, artistId: selectedArtist?.value }),
    });

    if (res.status === 200) {
      window.location.href = '/';
    } else {
      console.log('error');
    }
  };

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="album-form-page">
      <h2>Create New Album</h2>
      <form onSubmit={createAlbum} className="card">
        <div className="form-row">
          <label htmlFor="album-title">Title</label>
          <input
            type="text"
            id="album-title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder="Enter Album Name..."
            disabled={loading}
          />
        </div>
        <div className="form-row">
          <label htmlFor="artist">Artist</label>
          <Select
            id="artist"
            className="react-select-container"
            classNamePrefix="react-select"
            name="selectedArtist"
            placeholder="Select Artist..."
            options={artists !== null ? constructSelectOptions(artists) : []}
            value={selectedArtist}
            onChange={option => setSelectedArtist(option)}
            isDisabled={loading}
            isClearable={false}
            isSearchable
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AlbumForm;
