import { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

    console.log("렌더링이 됩니다..?")
  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      // 지워진 숫자들에 적용된 setInterval이 아직도 실행됨 -> 청소해주겠다
      clearInterval(time);
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;