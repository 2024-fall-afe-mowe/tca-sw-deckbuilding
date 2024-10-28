import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { AppTitle, Home } from "./Home";
import { Setup } from "./Setup";
import { Play } from "./Play";

import { 
  CurrentPlayer,
  GameResult 
  , getLeaderboard
  , getPreviousPlayers
  , getGeneralFacts
} from "./game-results";

const dummyGameResults: GameResult[] = [
  {
      startTime: "2024-09-23T15:36:25.123Z"
      , endTime: "2024-09-23T15:46:25.123Z"
      , winner: "Chris B"
      , players: [
          "Chris B"
          , "Caden J"
          , "Peter B"
          , "Swastik A"
          , "Tom"
      ]
  }
  , {
      startTime: "2024-09-23T15:48:25.123Z"
      , endTime: "2024-09-23T15:50:15.123Z"
      , winner: "Tom"
      , players: [
          "Harry"
          , "Hermione"
          , "Ron"
          , "Tom"
      ]    
  }
  , {
      startTime: "2024-10-20T20:02:47.024Z"
      , endTime: "2024-10-20T20:07:47.024Z"
      , winner: "Harry"
      , players: [
          "Harry"
          , "Chris B"
          , "Tom"
      ]
  }
  , {
      startTime: "2024-10-20T20:08:47.024Z"
      , endTime: "2024-10-20T20:23:37.024Z"
      , winner: "Tom"
      , players: [
          "Tom"
          , "Jack"
      ]
  }
];

const App = () => {

  //
  // React hooks first...
  //
  const [gameResults, setGameResults] = useState(dummyGameResults);
  // const [gameResults, setGameResults] = useState<GameResult[]>([]);

  const [currentPlayers, setCurrentPlayers] = useState<CurrentPlayer[]>([]);

  const [title, setTitle] = useState(AppTitle);

  //
  // Other code... Calculated state...
  //
  const addNewGameResult = (newResult: GameResult) => setGameResults([
    ...gameResults 
    , newResult
  ]);
    
  const myRouter = createHashRouter(
    [
      {
        path: "/",
        element: <Home
          leaderboardData={getLeaderboard(gameResults)}
          generalFactsData={getGeneralFacts(gameResults)} 
          setTitle={setTitle}
        />,
      },
      {
        path: "/setup",
        element: <Setup 
          previousPlayers={getPreviousPlayers(gameResults)}
          setCurrentPlayers={setCurrentPlayers}
          setTitle={setTitle}
        />,
      },
      {
        path: "/play",
        element: <Play 
          addNewGameResult={addNewGameResult}
          currentPlayers={currentPlayers}
          setTitle={setTitle}
        />,
      },
    ]
  );

  //
  // Return the JSX...
  //
  return (
    <div
      className="App"
    >
      <div 
        className="navbar bg-base-200"
      >
        <span 
          className="text-2xl font-bold">
            { title }
        </span>
      </div>
      <div 
        className="p-3"
      >
        <RouterProvider
          router={myRouter}
        />
      </div>
    </div>
  );
}

export default App;
