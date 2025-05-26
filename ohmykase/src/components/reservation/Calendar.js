import React, { useState, useEffect } from "react";
import styles from "../../styles/reservation/calendar.module.css";
import BottomButton from "../common/BottomButton"; // 수정된 BottomButton 임포트
import TimeSwiper from "./TimeSwiper";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [monthName, setMonthName] = useState("");

  const [activeDate, setActiveDate] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

  useEffect(() => {
    setCalendar(currentDate);
  }, [currentDate]);

  const setCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const lastDate = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const prevMonthLastDate = new Date(year, month, 0).getDate();

    const nextMonthStartDay = (firstDay + lastDate) % 7;

    let calendarDays = [];

    for (let i = prevMonthLastDate - firstDay + 1; i <= prevMonthLastDate; i++) {
      calendarDays.push({ date: i, isOtherMonth: true });
    }

    for (let i = 1; i <= lastDate; i++) {
      calendarDays.push({ date: i, isOtherMonth: false });
    }

    const remainingDays = 7 - (calendarDays.length % 7);
    for (let i = 1; i <= remainingDays && calendarDays.length % 7 !== 0; i++) {
      calendarDays.push({ date: i, isOtherMonth: true });
    }

    setDaysInMonth(calendarDays);
    setMonthName(`${year}년 ${month + 1}월`);
  };

  const changeMonth = (diff) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + diff);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date) => {
    setActiveDate(date);
  };

  const handleNumberClick = (num) => {
    setSelectedNumber(num);
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
              onClick={() => !day.isOtherMonth && handleDateClick(day.date)}
              style={{
                backgroundColor: activeDate === day.date ? "#BB0038" : "#FFF",
                cursor: "pointer",
                color: activeDate === day.date ? "#FFF" : "#131313",
              }}
            >
              {day.date}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.numberSelection}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num}>
            <img
              src={
                selectedNumber === num
                  ? `../../images/icon/${num}_red.png`
                  : `../../images/icon/${num}.png`
              }
              className={styles.numImg}
              onClick={() => handleNumberClick(num)}
              style={{ cursor: "pointer" }}
            />
            <div
              className={styles.numText}
              style={{
                color: selectedNumber === num ? "#BB0038" : "#B3B3B3",
              }}
            >
              {num}명
            </div>
          </div>
        ))}
      </div>

      <TimeSwiper />
      <BottomButton text="확인" navigateTo="/ReservationPage" />
    </div>
  );
};

export default Calendar;
