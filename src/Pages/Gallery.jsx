import Albums from "../components/Albums/Albums";
import InsideAlbums from "../components/InsideAlbums/InsideAlbums";
import { Routes, Route } from 'react-router-dom'

function Gallery() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Albums />}></Route>
        <Route path=':id' element={<InsideAlbums />}></Route>
    </Routes>
    </>
  );
}

export default Gallery;