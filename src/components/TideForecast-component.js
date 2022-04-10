import { useState, useEffect } from "react";
import highTide from "../assets/highTide.png";
import lowTide from "../assets/lowTide.png";
import dayjs from "dayjs";

const TideForecastComponent = () => {
  let [counter, setCounter] = useState(0);
  let [date, setDate] = useState("");
  let [lunarDate, setLunarDate] = useState("");
  let [tideDifference, setTideDifference] = useState("");

  let [time1, setTime1] = useState("");
  let [time2, setTime2] = useState("");
  let [time3, setTime3] = useState("");
  let [time4, setTime4] = useState("");

  let [tide1, setTide1] = useState("");
  let [tide2, setTide2] = useState("");
  let [tide3, setTide3] = useState("");
  let [tide4, setTide4] = useState("");

  let [tideHeight1, setTideHeight1] = useState("");
  let [tideHeight2, setTideHeight2] = useState("");
  let [tideHeight3, setTideHeight3] = useState("");
  let [tideHeight4, setTideHeight4] = useState("");

  const nextTideForecastHandle = () => {
    setCounter(counter + 1);
  };

  const previousTideForecastHandle = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  useEffect(() => {
    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-A0021-001?Authorization=CWB-030D5CFD-3027-4E9D-B27E-59A1E6E3386A&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%B8%82%E6%96%B0%E5%B1%8B%E5%8D%80&sort=validTime"
    )
      .then((res) => {
        return res.json();
      })
      .then((originData) => {
        const finalResult = originData.records.location[0].validTime;

        if (counter > finalResult.length) return;

        setDate(finalResult[0 + counter].startTime.slice(0, 10));
        setLunarDate(finalResult[0 + counter].weatherElement[0].elementValue);
        setTideDifference(
          finalResult[0 + counter].weatherElement[1].elementValue
        );

        const tempRR = finalResult.map((item) => {
          const timeLength = item.weatherElement[2].time.length;
          const tempDateArray = [];
          for (let i = 0; i < timeLength; i++) {
            tempDateArray.push(item.weatherElement[2].time[i].dataTime);
          }
          const orderDateArray = tempDateArray.sort((a, b) =>
            dayjs(a).isAfter(dayjs(b)) ? 1 : -1
          );
          const temp = [];
          item.weatherElement[2].time.forEach((date) => {
            const isLargeNumber = (element) => element === date.dataTime;
            const order = orderDateArray.findIndex(isLargeNumber);
            temp[order] = date;
          });
          return temp;
        });
        setTime1(tempRR[0 + counter][0].dataTime.slice(11, 16));
        setTide1(tempRR[0 + counter][0].parameter[0].parameterValue);
        setTideHeight1(tempRR[0 + counter][0].parameter[2].parameterValue);

        setTime2(tempRR[0 + counter][1].dataTime.slice(11, 16));
        setTide2(tempRR[0 + counter][1].parameter[0].parameterValue);
        setTideHeight2(tempRR[0 + counter][1].parameter[2].parameterValue);

        setTime3(tempRR[0 + counter][2].dataTime.slice(11, 16));
        setTide3(tempRR[0 + counter][2].parameter[0].parameterValue);
        setTideHeight3(tempRR[0 + counter][2].parameter[2].parameterValue);

        if (tempRR[0 + counter].length < 4) {
          setTime4("");
          setTide4("");
          setTideHeight4("");
          return;
        }

        setTime4(tempRR[0 + counter][3].dataTime.slice(11, 16));
        setTide4(tempRR[0 + counter][3].parameter[0].parameterValue);
        setTideHeight4(tempRR[0 + counter][3].parameter[2].parameterValue);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [counter]);
  return (
    <div className="mt-10 mb-6 flex w-full	flex-col items-center justify-center rounded-lg p-1  shadow-md">
      <h2 className="my-3 text-lg">
        <span className="text-2xl">{date}</span>
        {"   "}
        當日潮汐預報
      </h2>
      <ul className="mb-7 flex gap-10 text-sm ">
        <li>農曆：{lunarDate}</li>
        <li>潮差：{tideDifference}</li>
      </ul>
      <table className="w-full table-fixed rounded-lg text-center text-sm text-gray-500  sm:table-auto">
        <thead className="rounded-lg  text-gray-700">
          <tr className="border-b bg-white"></tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <th className=" whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
              時間
            </th>
            <td className="px-6 py-4">{time1}</td>
            <td className="px-6 py-4">{time2}</td>
            <td className="px-6 py-4">{time3}</td>
            <td className="px-6 py-4">{time4}</td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 pt-4 pb-2 font-medium text-gray-900 ">
              潮汐
            </th>
            <td className="px-6 pt-4 pb-2">
              <div
                className={`
                  ${
                    tide1 === "滿潮" ? "text-red-500" : "text-sky-500"
                  } flex flex-col items-center
                `}
              >
                <img
                  className="my-1 w-5"
                  src={tide1 === "滿潮" ? highTide : lowTide}
                  alt=""
                />
                {tide1}
              </div>
            </td>
            <td className="px-6 pt-4 pb-2">
              <div
                className={`${
                  tide2 === "滿潮" ? "text-red-500" : "text-sky-500"
                } flex flex-col items-center`}
              >
                <img
                  className="my-1 w-5"
                  src={tide2 === "滿潮" ? highTide : lowTide}
                  alt=""
                />
                {tide2}
              </div>
            </td>
            <td className="px-6 pt-4 pb-2">
              <div
                className={`${
                  tide3 === "滿潮" ? "text-red-500" : "text-sky-500"
                }  flex flex-col items-center`}
              >
                <img
                  className="my-1 w-5"
                  src={tide3 === "滿潮" ? highTide : lowTide}
                  alt=""
                />
                {tide3}
              </div>
            </td>
            <td className="px-6 pt-4 pb-2">
              <div
                className={`${
                  tide4 === "滿潮" ? "text-red-500" : "text-sky-500"
                }  flex flex-col items-center`}
              >
                {tide4 && (
                  <img
                    className="my-1 w-5"
                    src={tide4 === "滿潮" ? highTide : lowTide}
                    alt=""
                  />
                )}
                {tide4}
              </div>
            </td>
          </tr>
          <tr className="">
            <th className="px-6 pb-4 font-medium text-gray-900 ">
              相對海平面
              <br />
              潮高(cm)
            </th>
            <td className="px-6 pb-4">{tideHeight1}</td>
            <td className="px-6 pb-4">{tideHeight2}</td>
            <td className="px-6 pb-4">{tideHeight3}</td>
            <td className="px-6 pb-4">{tideHeight4}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-2 flex items-center justify-center">
        <button
          onClick={previousTideForecastHandle}
          type="button"
          className="mr-2 rounded-lg bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800"
        >
          前一日潮汐預報
        </button>
        <button
          onClick={nextTideForecastHandle}
          type="button"
          className="mr-2 rounded-lg bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800"
        >
          下一日潮汐預報
        </button>
        <button
          type="button"
          className="mr-2 rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800"
        >
          30日潮汐預報表
        </button>
      </div>

      <ul className="text-start p-5 pt-4 pb-2 text-sm">
        <li>
          <hr className="m-3" />
        </li>
        <li>
          <i className="bi bi-info-circle"></i>{" "}
          最佳生態觀賞時間為每日退潮前後2個小時。
        </li>
        <li>
          <i className="bi bi-info-circle"></i>{" "}
          桃園海岸潮汐時間的口訣為：「初一、十五早晚乾，初八、二三早晚滿」
        </li>
      </ul>
    </div>
  );
};

export default TideForecastComponent;
