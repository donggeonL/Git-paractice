import React, { useEffect, useState } from 'react';

//초안 작성은 했고 자동으로 시간 흘러가게 만들어 보시옹
const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const date = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return (() => clearInterval(date))
    }, []);

    return (
        <div>
            <h2>{time.getFullYear()}-{time.getMonth()}-{time.getDate()}</h2>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;