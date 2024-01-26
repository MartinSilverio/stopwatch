import { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(new Date());
    const [isStopped, setIsStopped] = useState(true);

    useEffect(() => {
        let interval: unknown;
        if (!isStopped) {
            interval = setInterval(() => {
                const current = new Date();
                const count = +current - +start;
                setTime(count);
            }, 10);
        }

        return () => clearInterval(interval as number | undefined);
    }, [isStopped, start]);

    function handleStopStart() {
        if (isStopped) {
            //Stopped -> start
            setStart(new Date(Date.now() - time));
        }

        setIsStopped((prev) => !prev);
    }

    function handleReset() {
        setStart(new Date());
        setTime(0);
    }

    return (
        <div className="stopwatch">
            <TimeDisplay time={time} />
            <button onClick={handleStopStart} className="stop-start btn">
                {isStopped ? 'Start' : 'Stop'}
            </button>
            <button onClick={handleReset} className="reset btn">
                Reset
            </button>
        </div>
    );
}
