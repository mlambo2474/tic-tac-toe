import React, { useState, useRef, useEffect, useContext } from "react";
import { MusicPlayerWrapper, PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";
import playList from "../../Utils/musicUtils/playList";
import { randomizeIndex } from "../../Utils/musicUtils/index";
import SfxContext from "../../context/SfxContext";
import { Text } from "../../styles/General.styled";

const MusicPlayer = () => {
   const {hoverSfx, clickSfx} = useContext(SfxContext) 
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);

  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      //  playerRef.current.play(); this returns a promise so we need to
      //  create a promise and based on the promise we need to create a pause value
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if (playerRef.current?.volume) playerRef.current.volume = 0.1;
      return;
    } 
      playerRef.current?.pause();
  }, [isPlaying, currentSong]);


  const shuffleHandler = async () => {
    clickSfx();
    setIsPlaying(false);
    await playPromise?.then(() => {
      playerRef.current?.pause();
     
    });
    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
    // console.log("shuffling song", currentSong);
   

  };
  console.log( playList[currentSong].split("/"));
  const displaySong = playList[currentSong].split("/")[6];

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon onClick={() => {clickSfx(); setIsPlaying(false)}} onMouseEnter={()=> hoverSfx()}/>
      ) : (
        <PlayIcon onClick={() =>{clickSfx(); setIsPlaying(true)}} onMouseEnter={()=> hoverSfx()}/>
      )}

        <NextIcon onClick={shuffleHandler} onMouseEnter={()=> hoverSfx()}/>

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <Text>{displaySong}</Text>

    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;

//THE BELOW WAY IS THE BEST APPROACH TO HANDLE THE SHUFFLE FUNCTIONALITY
// const shuffleHandler = async () => {
//     try {
//       // Pause the current song if it's playing
//       if (isPlaying && playerRef.current) {
//         await playerRef.current.pause();
//         setIsPlaying(false);
//       }
  
//       // Shuffle to a new song
//       setCurrentSong(randomizeIndex(playList));
  
//       // Play the new song
//       if (playerRef.current) {
//         await playerRef.current.play();
//         setIsPlaying(true);
//       }
//     } catch (error) {
//       console.error("Error during shuffle:", error);
//     }
//   };