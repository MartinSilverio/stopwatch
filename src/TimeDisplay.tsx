export default function TimeDisplay({ time }: { time: number }) {
    // ten Milliseconds calculation
    const tenMilliseconds = '' + (Math.floor(time / 10) % 100);

    // Seconds calculation
    const seconds = '' + (Math.floor(time / 1000) % 60);

    // Minutes calculation
    const minutes = '' + Math.floor(time / 60000);

    return (
        <div className="time">{`${minutes.padStart(2, '0')}:${seconds.padStart(
            2,
            '0'
        )}:${tenMilliseconds.padStart(2, '0')}`}</div>
    );
}
