import "./App.css"
import {getMovieList, searchMovie} from "./api"
import { useEffect, useState } from "react"

const App = () => {
const [popularMovies, setPopularMovies] = useState([])

  useEffect (() =>  {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      console.log(movie); // Tambahkan baris ini untuk menampilkan data film di konsol
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.original_name}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.profile_path}`}   />
          <div className="Movie-date">{movie.popularity}</div>
          <div className="Movie-rate">{movie.known_for_department}</div>
        </div>
      )
    })
  }

  const search = (q) => {
   console.log({ q  })
}

  return (
    <div className="App">
      <header className="App-header">
       <h1>Cari Aktor Terkenal</h1>
       <input 
        placeholder='cari aktor kesayangan anda...'
        className='Movie-search'
        onChange={({ target }) => search (target.value)} /> 
       <div className="Movie-container">
       <PopularMovieList/>
       </div>
      </header>
    </div>
  )
}
export default App

// import "./App.css"

// const App = () => {
//   const search =(q) => {
//     console.log ({ q })
//   }
//   return (
//     <div classname="App">
//       <header className="App-header">
//         <h1>SYADEEE MOVIEEE</h1>
//         {/* <input placeholder="cari film kesayangan..." classname="Movie-search" /> */}
//         <div className="Movie-container">
//           <div className="Movie-wrapper">
//             <div className="Movie-title">CONTOH PERTAMA</div>
//             <img className="Movie-image" src="" />
//             <div className="Movie-date">10-01-2024</div>
//             <div className="Movie-rate">8.9</div>
//           </div>
//         </div>
//       </header>
//     </div>
//   )
// }


// export default App