import { useNavigate } from "react-router-dom";
import { GameResult } from "./game-results";
import { useState } from "react";

interface PlayProps {
    addNewGameResult: (gr: GameResult) => void;
}

export const Play: React.FC<PlayProps> = ({
    addNewGameResult
}) => {

    const nav = useNavigate();
    const [selectedForceTrackPosition, setSelectedForceTrackPosition] = useState(7);
    const [redOnTop, setRedOnTop] = useState(true);

    return (
        <div>
            <h1
                className='text-2xl font-bold mb-3'
            >
                Play
            </h1>
            <div
                className="card bg-base-100 shadow-xl mt-3 mb-5"
            >
                <div
                    className="card-body flex justify-items-center123"
                >
                    <div
                        className="flex items-center"
                    >
                        <h2
                            className="card-title"
                        >
                            Force Tracker
                        </h2>
                        <button
                            className="btn btn-link"
                            onClick={() => setRedOnTop(!redOnTop)}
                        >
                            Swap Sides
                        </button>
                    </div>
                    <div
                        className="flex flex-auto justify-center bg-success123"
                    >
                        <div className="flex flex-col items-center">
                            <p
                                className="font-bold"
                            >
                                +1 Resource
                            </p>
                            <ul className="steps steps-vertical">
                                <li className={`step ${redOnTop ? 'step-error' : 'step-info'}`} data-content={selectedForceTrackPosition === 1 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(1)} />
                                <li className={`step ${redOnTop ? 'step-error' : 'step-info'}`} data-content={selectedForceTrackPosition === 2 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(2)} />
                                <li className={`step ${redOnTop ? 'step-error' : 'step-info'}`} data-content={selectedForceTrackPosition === 3 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(3)} />
                                <li className="step" data-content={selectedForceTrackPosition === 4 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(4)} />
                                <li className={`step ${!redOnTop ? 'step-error' : 'step-info'}`} data-content={selectedForceTrackPosition === 5 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(5)} />
                                <li className={`step ${!redOnTop ? 'step-error' : 'step-info'}`} data-content={selectedForceTrackPosition === 6 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(6)} />
                                <li className={`step ${!redOnTop ? 'step-error' : 'step-info'}`} data-content={selectedForceTrackPosition === 7 ? '●' : ''} onClick={() => setSelectedForceTrackPosition(7)} />
                            </ul>
                            <p
                                className="font-bold"
                            >
                                +1 Resource
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="card bg-base-100 shadow-xl mt-3 mb-5"
            >
                <div
                    className="card-body flex justify-items-center123"
                >
                    <h2
                        className="card-title"
                    >
                        Turn Counters
                    </h2>
                    <div
                        className="flex flex-auto justify-center bg-success123"
                    >
                    </div>
                </div>
            </div>
            <button
                className="btn btn-primary mb-3"
                onClick={() => {
                    addNewGameResult({
                        startTime: ""
                        , endTime: ""
                        , winner: "Barbie"
                        , players: [
                            "Barbie"
                            , "Ken"
                        ]
                    });
                    nav(-2);
                }}
            >
                Game Over
            </button>
        </div>
    );
};