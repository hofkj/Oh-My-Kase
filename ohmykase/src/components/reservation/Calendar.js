import React, { useState, useEffect } from "react";
import styles from "../../styles/reservation/calendar.module.css"; // CSS 모듈 임포트
import BottomButton from "../BottomButton";
import TimeSwiper from "./TimeSwiper";

const Calendar = () => {
  // 현재 날짜
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [monthName, setMonthName] = useState("");
  
  // activeDate 상태 추가: 클릭된 날짜를 저장
  const [activeDate, setActiveDate] = useState(null);

  // 날짜가 변경될 때마다 달력 갱신
  useEffect(() => {
    setCalendar(currentDate);
  }, [currentDate]);

  // 달력에 표시할 날짜들 설정
  const setCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    // 이번 달 마지막 날짜
    const lastDate = new Date(year, month + 1, 0).getDate();

    // 이번 달 첫날의 요일
    const firstDay = new Date(year, month, 1).getDay();

    // 이전 달의 마지막 날짜
    const prevMonthLastDate = new Date(year, month, 0).getDate();

    // 다음 달의 날짜 수
    const nextMonthStartDay = (firstDay + lastDate) % 7;

    let calendarDays = [];

    // 이전 달의 날짜들
    for (
      let i = prevMonthLastDate - firstDay + 1;
      i <= prevMonthLastDate;
      i++
    ) {
      calendarDays.push({ date: i, isOtherMonth: true });
    }

    // 이번 달 날짜들
    for (let i = 1; i <= lastDate; i++) {
      calendarDays.push({ date: i, isOtherMonth: false });
    }

    // 다음 달 날짜들 (다음 달의 날짜는 한 주로 채워지는 부분까지만 그리기)
    const remainingDays = 7 - (calendarDays.length % 7); // 한 주의 나머지 날짜 수
    for (let i = 1; i <= remainingDays && calendarDays.length % 7 !== 0; i++) {
      calendarDays.push({ date: i, isOtherMonth: true });
    }

    setDaysInMonth(calendarDays);

    // 월 이름 설정
    setMonthName(`${year}년 ${month + 1}월`);
  };

  // 이전/다음 달로 이동하는 함수
  const changeMonth = (diff) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + diff);
    setCurrentDate(newDate);
  };

  // 날짜 클릭 시 처리 함수
  const handleDateClick = (date) => {
    setActiveDate(date); // 클릭된 날짜를 activeDate 상태로 설정
  };

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <button className={styles.prevMonth} onClick={() => changeMonth(-1)}>
            <img src="../../images/icon/arrow_L.png" />
          </button>
          <div className={styles.title}>{monthName}</div>
          <button className={styles.nextMonth} onClick={() => changeMonth(1)}>
            <img src="../../images/icon/arrow_R.png" />
          </button>
        </div>
        <div className={styles.calendarContainer}>
          <div className={`${styles.item} ${styles.weekName}`}>일</div>
          <div className={`${styles.item} ${styles.weekName}`}>월</div>
          <div className={`${styles.item} ${styles.weekName}`}>화</div>
          <div className={`${styles.item} ${styles.weekName}`}>수</div>
          <div className={`${styles.item} ${styles.weekName}`}>목</div>
          <div className={`${styles.item} ${styles.weekName}`}>금</div>
          <div className={`${styles.item} ${styles.weekName}`}>토</div>

          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                day.isOtherMonth ? styles.otherMonth : ""
              }`}
              onClick={() => !day.isOtherMonth && handleDateClick(day.date)} // 날짜 클릭 시 handleDateClick 호출
              style={{
                backgroundColor: activeDate === day.date ? "#BB0038" : "#FFF",  // 클릭된 날짜의 배경색을 변경
                cursor: "pointer",
                color: activeDate === day.date ? "#FFF" : "#131313" // 클릭된 날짜 텍스트 색상
              }}
            >
              {day.date}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.numberSelection}>
        <div>
          <img src="../../images/icon/one.png" className={styles.numImg}/>
          <div className={styles.numText}>1명</div>
        </div>
        <div>
          <img src="../../images/icon/two.png" className={styles.numImg}/>
          <div className={styles.numText}>2명</div>
        </div>
        <div>
          <img src="../../images/icon/three.png" className={styles.numImg}/>
          <div className={styles.numText}>3명</div>
        </div>
        <div>
          <img src="../../images/icon/four.png" className={styles.numImg}/>
          <div className={styles.numText}>4명</div>
        </div>
        <div>
          <img src="../../images/icon/five.png" className={styles.numImg}/>
          <div className={styles.numText}>5명</div>
        </div>
      </div>

      <TimeSwiper/>
      <BottomButton text="확인"/>
    </div>
  );
};

export default Calendar;
