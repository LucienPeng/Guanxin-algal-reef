import { useState, useEffect } from "react";

const TideForecastComponent = () => {
  let [data, setData] = useState([]);
  let [counter, setCounter] = useState(0);

  console.log(data);

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-A0021-001?Authorization=CWB-030D5CFD-3027-4E9D-B27E-59A1E6E3386A&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%B8%82%E6%96%B0%E5%B1%8B%E5%8D%80&sort=validTime"
    )
      .then((res) => {
        return res.json();
      })
      .then((originData) => {
        setData(originData.records.location[0].validTime);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                日期
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                農曆
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                潮差
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                colSpan="2"
                scope="row"
                className=" whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                時間
              </th>
              {/* <td className="px-6 py-4">{time1}</td>
              <td className="px-6 py-4">{time2}</td>
              <td className="px-6 py-4">{time3}</td>
              <td className="px-6 py-4">{time4}</td> */}
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                colSpan="2"
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                潮汐
              </th>
              {/* <td className="px-6 py-4">{tide1}</td>
              <td className="px-6 py-4">{tide2}</td>
              <td className="px-6 py-4">{tide3}</td>
              <td className="px-6 py-4">{tide4}</td> */}
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                colSpan="2"
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                潮高
              </th>
              {/* <td className="px-6 py-4">{tideHeight1}</td>
              <td className="px-6 py-4">{tideHeight2}</td>
              <td className="px-6 py-4">{tideHeight3}</td>
              <td className="px-6 py-4">{tideHeight4}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={counterHandler}
        type="button"
        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
      >
        下一日
      </button>
    </div>
  );
};

export default TideForecastComponent;

//   let [date, setDate] = useState("");
//   let [lunarDate, setLunarDate] = useState("");
//   let [tideDifference, setTideDifference] = useState("");

//   let [time1, setTime1] = useState("");
//   let [time2, setTime2] = useState("");
//   let [time3, setTime3] = useState("");
//   let [time4, setTime4] = useState("");

//   let [tide1, setTide1] = useState("");
//   let [tide2, setTide2] = useState("");
//   let [tide3, setTide3] = useState("");
//   let [tide4, setTide4] = useState("");

//   let [tideHeight1, setTideHeight1] = useState("");
//   let [tideHeight2, setTideHeight2] = useState("");
//   let [tideHeight3, setTideHeight3] = useState("");
//   let [tideHeight4, setTideHeight4] = useState("");

//   setDate(
//     data.records.location[0].validTime[0 + counter].startTime.slice(0, 10)
//   );
//   setLunarDate(
//     data.records.location[0].validTime[0 + counter].weatherElement[0]
//       .elementValue
//   );
//   setTideDifference(
//     data.records.location[0].validTime[0 + counter].weatherElement[1]
//       .elementValue
//   );

//   setTime1(
//     data.records.location[0].validTime[
//       0 + counter
//     ].weatherElement[2].time[2].dataTime.slice(11, 16)
//   );
//   setTime2(
//     data.records.location[0].validTime[
//       0 + counter
//     ].weatherElement[2].time[1].dataTime.slice(11, 16)
//   );
//   setTime3(
//     data.records.location[0].validTime[
//       0 + counter
//     ].weatherElement[2].time[0].dataTime.slice(11, 16)
//   );
//   setTime4(
//     data.records.location[0].validTime[
//       0 + counter
//     ].weatherElement[2].time[3].dataTime.slice(11, 16)
//   );
//   setTide3(
//     data.records.location[0].validTime[0].weatherElement[2].time[0]
//       .parameter[0].parameterValue
//   );
//   setTide2(
//     data.records.location[0].validTime[0].weatherElement[2].time[1]
//       .parameter[0].parameterValue
//   );
//   setTide1(
//     data.records.location[0].validTime[0].weatherElement[2].time[2]
//       .parameter[0].parameterValue
//   );
//   setTide4(
//     data.records.location[0].validTime[0].weatherElement[2].time[3]
//       .parameter[0].parameterValue
//   );
//   setTideHeight3(
//     data.records.location[0].validTime[0].weatherElement[2].time[0]
//       .parameter[2].parameterValue
//   );
//   setTideHeight2(
//     data.records.location[0].validTime[0].weatherElement[2].time[1]
//       .parameter[2].parameterValue
//   );
//   setTideHeight1(
//     data.records.location[0].validTime[0].weatherElement[2].time[2]
//       .parameter[2].parameterValue
//   );
//   setTideHeight4(
//     data.records.location[0].validTime[0].weatherElement[2].time[3]
//       .parameter[2].parameterValue
//   );
