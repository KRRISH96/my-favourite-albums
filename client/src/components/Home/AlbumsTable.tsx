import * as React from 'react';
import { AlbumsListProps } from './Home';

function AlbumsTable({ albums }: AlbumsListProps) {
  return (
    <div className="albums-table-container">
      <table className="albums-table">
        <thead className="albums-table__head">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="albums-table__body">
          {albums.map(({ id, title, artist }) => (
            <tr key={`${title}-${id}`}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{artist.name}</td>
            </tr>
          ))}
          {!albums.length && (
            <tr>
              <td colSpan={4}>No albums yet....</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumsTable;
