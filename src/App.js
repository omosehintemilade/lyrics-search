import React, { useState } from "react"
import Axios from "axios"
import "./App.css"

// components
import HeaderBackground from "./components/HeaderBackground.js"
import SearchedResult from "./components/SearchedResult.js"
import Modal from "./components/Modal.js"

function App() {
  const [searchBarValue, setSearchBarValue] = useState("")
  const [fetchResult, setFetchResult] = useState()
  const [lyrics, setLyrics] = useState("")
  const [songData, setSongData] = useState({
    artist: "",
    title: "",
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await Axios.get(`https://api.lyrics.ovh/suggest/${searchBarValue}`)
    const data = response.data.data
    setFetchResult(data)
  }

  function handleChange(e) {
    setSearchBarValue(e.target.value)
  }

  async function getLyrics(artist, title) {
    const response = await Axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    setLyrics(response.data)
    setSongData({ artist: artist, title: title })
  }

function closeModalFunc (){
  setLyrics(null)
}


  return (
    <div className="App">
      <HeaderBackground handleSubmit={handleSubmit} handleChange={handleChange} />
      {fetchResult ? (
        fetchResult.map((result, index) => {
          return (
            <div className="list" key={index}>
              <div className="about-song">
                <span className="artist">
                  <strong>{result.artist.name}</strong>
                </span>{" "}
                - <span className="title">{result.album.title}</span>
              </div>
              <button onClick={() => getLyrics(result.artist.name, result.album.title)}>Get Lyrics</button>
            </div>
          )
        })
      ) : (
        <SearchedResult />
      )}
      {lyrics ? <Modal closeModalFunc={closeModalFunc} title={songData.title} artist={songData.artist}/> : ""}
    </div>
  )
}

export default App
