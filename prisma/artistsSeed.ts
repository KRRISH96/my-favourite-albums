const ARTIST_NAMES = [
 { id: 1, name: 'AC/DC' },
 { id: 2, name: 'Accept' },
 { id: 3, name: 'Aerosmith' },
 { id: 4, name: 'Alanis Morissette' },
 { id: 5, name: 'Alice In Chains' },
 { id: 6, name: 'Antnio Carlos Jobim' },
 { id: 7, name: 'Apocalyptica' },
 { id: 8, name: 'Audioslave' },
 { id: 9, name: 'BackBeat' },
 { id: 10, name: 'Billy Cobham' }
];

 
const ALBUMS = [
 { title: 'For Those About To Rock We Salute You', artistId: 1 },
 { title: 'Balls to the Wall', artistId: 2 },
 { title: 'Restless and Wild', artistId: 2 },
 { title: 'Let There Be Rock', artistId: 1 },
 { title: 'Big Ones', artistId: 3 },
 { title: 'Jagged Little Pill', artistId: 4 },
 { title: 'Facelift', artistId: 5 },
 { title: 'Warner 25 Anos', artistId: 6 },
 { title: 'Plays Metallica By Four Cellos', artistId: 7 },
 { title: 'Audioslave', artistId: 8 },
 { title: 'Out Of Exile', artistId: 8 },
 { title: 'BackBeat Soundtrack', artistId: 9 },
 { title: 'The Best Of Billy Cobham', artistId: 10 },
 { title: 'Out Of Exile', artistId: 8 },
 { title: 'BackBeat Soundtrack', artistId: 9 },
 { title: 'The Best Of Billy Cobham', artistId: 10 },
 { title: 'Alcohol Fueled Brewtality Live! [Disc 1]', artistId: 1 },
 { title: 'Alcohol Fueled Brewtality Live! [Disc 2]', artistId: 1 },
 { title: 'Black Sabbath', artistId: 2 },
 { title: 'Black Sabbath Vol. 4 (Remaster)', artistId: 2 },
 { title: 'Body Count', artistId: 3 },
 { title: 'Chemical Wedding', artistId: 4 },
 { title: 'The Best Of Buddy Guy - The Millenium Collection', artistId: 5 },
 { title: 'Prenda Minha', artistId: 6 },
 { title: 'Sozinho Remix Ao Vivo', artistId: 6 },
 { title: 'Minha Historia', artistId: 7 },
 { title: 'Afrociberdelia', artistId: 8 },
 { title: 'Da Lama Ao Caos', artistId: 8 },
 { title: 'Ac stico MTV [Live]', artistId: 9 },
 { title: 'Cidade Negra - Hits', artistId: 9 },
 { title: 'Na Pista', artistId: 10 },
 { title: 'Ax  Bahia 2001', artistId: 1 },
 { title: 'BBC Sessions [Disc 1] [Live]', artistId: 2 },
];

interface Album {
  title: string
}
interface GroupedArtists extends Record<number, Album[]> { };

interface Artist {
  name: string;
  albums: Album[]
}
 
const grouped_artists = ALBUMS.reduce((acc, { artistId, title }) => {
  if (acc[artistId] !== undefined) {
    acc[artistId].push({ title });
  } else {
    acc[artistId] = [{ title }]
  }
  return acc;
}, {} as GroupedArtists);

export const artists: Artist[] = ARTIST_NAMES.map(({ id, name }) => ({
  name,
  albums: grouped_artists[id]
}));