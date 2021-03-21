import * as React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { useFetch } from '../../hooks/useFetch';
import './albumFormStyles.scss';

interface ArtistData {
  id: number;
  name: string;
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
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  const createAlbum = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormLoading(true);

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
      const { error } = await res.json();
      setFormErrorMessage(error);
      setFormLoading(false);
    }
  };

  if (error) {
    return <h2 className="error">{error}</h2>;
  }
  const disableFields = loading || formLoading;

  return (
    <div className="album-form-page">
      <h2>Create New Album</h2>
      <form onSubmit={createAlbum} className="card album-form">
        <div className="form-row">
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder="Enter Album Title..."
            disabled={formLoading}
            required
          />
        </div>
        <div className="form-row">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            name="selectedArtist"
            placeholder={loading ? 'Loading Artists...' : 'Select Artist...'}
            options={artists !== null ? constructSelectOptions(artists) : []}
            value={selectedArtist}
            onChange={option => setSelectedArtist(option)}
            isDisabled={disableFields}
            isClearable={false}
            isSearchable
          />
        </div>
        {!!formErrorMessage && <p className="error">{formErrorMessage}</p>}
        <button type="submit" disabled={disableFields}>
          {formLoading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}

export default AlbumForm;
