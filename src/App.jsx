import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header';

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [countTime, setTime] = useState(0);
  const handBookMarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookMarks(newBookmarks);
  };
  const handelmin = time => {
    // console.log('titel', time);
    const newTime = countTime + time;
    setTime(newTime);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex mx-8">
        <Blogs handBookMarks={handBookMarks} handelmin={handelmin}></Blogs>
        <Bookmarks bookmarks={bookmarks} setTime={setTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
