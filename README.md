# Stopwatch

Code to implement stopwatch in React + Typescript.

Using Date to find the difference between start and current time instead of counting up in setInterval because setInterval is not reliable for counting up at the right intervals and will cause the time to drift

This is due to the nature of JS being single-threaded and the nature of the callback queue. Heavy processes and events can block the callback from setInterval from occurring. setInterval can only guarantee it will call the callback method at least at the set time OR later.

Which is why finding the difference between start time and when the callback happens is more accurate, since even if the callback occurs later than expected, the current time relative to the start time stays accurate, and can render the value accurately.
