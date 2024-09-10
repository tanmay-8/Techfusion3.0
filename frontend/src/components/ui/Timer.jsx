import { useCallback, useEffect, useState } from "react";
const Timer = () => {
    const [countDownTime, setCountDownTIme] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    const getTimeDifference = (countDownTime) => {
        const currentTime = new Date().getTime();
        const timeDiffrence = countDownTime - currentTime;
        let days =
            Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
                ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
                : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
        const hours =
            Math.floor(
                (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            ) >= 10
                ? Math.floor(
                      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                  )
                : `0${Math.floor(
                      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                  )}`;
        const minutes =
            Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
                : `0${Math.floor(
                      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
                  )}`;
        const seconds =
            Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
                ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
                : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
        if (timeDiffrence < 0) {
            setCountDownTIme({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            });
            clearInterval();
        } else {
            setCountDownTIme({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };
    const startCountDown = useCallback(() => {
        const customDate = new Date();
        const countDownDate = new Date(
            customDate.getFullYear(),
            customDate.getMonth() + 1,
            customDate.getDate() + 6,
            customDate.getHours(),
            customDate.getMinutes(),
            customDate.getSeconds() + 1
        );
        setInterval(() => {
            getTimeDifference(countDownDate.getTime());
        }, 1000);
    }, []);
    useEffect(() => {
        startCountDown();
    }, [startCountDown]);
    return (
        <div className="flex items-start justify-center w-full gap-1.5 count-down-main">
            <div className="timer">
                <div className="rounded-xl bg-black/10 backdrop-blur- py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3 shadow-sm shadow-cyan-300">
                    <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
                        {countDownTime.days}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                        days
                    </p>
                </div>
            </div>

            <div className="timer">
                <div className="rounded-xl bg-black/10 backdrop-blur-xl py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3 shadow-sm shadow-cyan-300">
                    <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center">
                        {countDownTime.hours}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                        Hour
                    </p>
                </div>
            </div>

            <div className="timer">
                <div className="rounded-xl bg-black/10 backdrop-blur-xl py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3 shadow-sm shadow-cyan-300">
                    <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center">
                        {countDownTime.minutes}
                    </h3>
                    <p className="text-lg fo uppercasent-normal text-white mt-1 text-center w-full">
                        Minutes
                    </p>
                </div>
            </div>

            <div className="timer">
                <div className="rounded-xl bg-black/10 backdrop-blur-xl py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3 shadow-sm shadow-cyan-300">
                    <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center">
                        {countDownTime.seconds}
                    </h3>
                    <p className="text-lg fo uppercasent-normal text-white mt-1 text-center w-full">
                        Seconds
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Timer;
