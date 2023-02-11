import React, { useEffect, useState } from "react";


const SimpleTimer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timer;
    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds + 1);

            if(seconds === 59){
                setMinutes(minutes + 1);
                setSeconds(0);
            }

        }, 1000)
        return () => clearInterval(timer)
    });

    const reset = () => {
        setSeconds(0);
        setMinutes(0);
    };

    /*const stop = () => {
        clearInterval(timer);
    };*/


    return (
        <div className="timer">
            <div className="container">
                <div className="timerContainer">
                    <h1>Timer</h1>
                    <h1>{minutes < 10 ? "0" + minutes: minutes}:{seconds < 10 ? "0" + seconds: seconds}</h1>
                    <button className="reset" onClick={reset}>Reset</button>
                   {/* <button className="stop" onClick={stop}>Stop</button> */}
                </div>
            </div>
            
        </div>
    );
}

export default SimpleTimer;