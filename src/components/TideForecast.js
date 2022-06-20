import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Alert,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import highTide from '../assets/icons/highTide.png';
import lowTide from '../assets/icons/lowTide.png';

const url =
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-A0021-001?Authorization=CWB-030D5CFD-3027-4E9D-B27E-59A1E6E3386A&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%B8%82%E6%96%B0%E5%B1%8B%E5%8D%80&sort=validTime';

const TideForecast = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hint, setHint] = useState(false);
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState('');
  const [lunarDate, setLunarDate] = useState('');
  const [tideDifference, setTideDifference] = useState('');

  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');

  const [tide1, setTide1] = useState('');
  const [tide2, setTide2] = useState('');
  const [tide3, setTide3] = useState('');
  const [tide4, setTide4] = useState('');

  const [tideHeight1, setTideHeight1] = useState('');
  const [tideHeight2, setTideHeight2] = useState('');
  const [tideHeight3, setTideHeight3] = useState('');
  const [tideHeight4, setTideHeight4] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nextTideForecastHandle = () => {
    if (data.length - 1 > counter) {
      setCounter(counter + 1);
    } else {
      setHint(true);
      return;
    }
  };

  const previousTideForecastHandle = () => {
    if (counter <= 0) {
      setHint(true);
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res.records.location[0].validTime);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getData();
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setDate(data[0 + counter].startTime.slice(0, 10));
      setLunarDate(data[0 + counter].weatherElement[0].elementValue);
      setTideDifference(data[0 + counter].weatherElement[1].elementValue);

      const sortedData = data.slice().map((item) => {
        item.id = data.indexOf(item);
        item.weatherElement[2].time.sort((a, b) => {
          return a.dataTime.localeCompare(b.dataTime);
        });
        return item;
      });

      setTime1(
        sortedData[0 + counter].weatherElement[2].time[0].dataTime.slice(11, 16)
      );
      setTide1(
        sortedData[0 + counter].weatherElement[2].time[0].parameter[0]
          .parameterValue
      );
      setTideHeight1(
        sortedData[0 + counter].weatherElement[2].time[0].parameter[2]
          .parameterValue
      );

      setTime2(
        sortedData[0 + counter].weatherElement[2].time[1].dataTime.slice(11, 16)
      );
      setTide2(
        sortedData[0 + counter].weatherElement[2].time[1].parameter[0]
          .parameterValue
      );
      setTideHeight2(
        sortedData[0 + counter].weatherElement[2].time[1].parameter[2]
          .parameterValue
      );

      setTime3(
        sortedData[0 + counter].weatherElement[2].time[2].dataTime.slice(11, 16)
      );
      setTide3(
        sortedData[0 + counter].weatherElement[2].time[2].parameter[0]
          .parameterValue
      );
      setTideHeight3(
        sortedData[0 + counter].weatherElement[2].time[2].parameter[2]
          .parameterValue
      );

      if (sortedData[0 + counter].weatherElement[2].time.length < 4) {
        setTime4('');
        setTide4('');
        setTideHeight4('');
        return;
      } else {
        setTime4(
          sortedData[0 + counter].weatherElement[2].time[3].dataTime.slice(
            11,
            16
          )
        );
        setTide4(
          sortedData[0 + counter].weatherElement[2].time[3].parameter[0]
            .parameterValue
        );
        setTideHeight4(
          sortedData[0 + counter].weatherElement[2].time[3].parameter[2]
            .parameterValue
        );
      }
    }
  }, [counter, data]);

  return loading ? null : (
    <Paper elevation={3} className='w-full p-5'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-2xl'>{date}</span>
          <h3 className='my-1 text-lg'>當日潮汐預報</h3>
        </div>
        <ul className='mb-7 flex gap-10 text-sm '>
          <li>農曆：{lunarDate}</li>
          <li>潮差：{tideDifference}</li>
        </ul>
        <table className='w-full table-fixed rounded-lg text-center text-sm text-gray-500  sm:table-auto'>
          <thead className='rounded-lg  text-gray-700'>
            <tr className='border-b bg-white'></tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <th className=' whitespace-nowrap px-6 py-4 font-medium text-gray-900 '>
                時間
              </th>
              <td className='px-6 py-4'>{time1}</td>
              <td className='px-6 py-4'>{time2}</td>
              <td className='px-6 py-4'>{time3}</td>
              <td className='px-6 py-4'>{time4}</td>
            </tr>
            <tr className=''>
              <th className='whitespace-nowrap px-6 pt-4 pb-2 font-medium text-gray-900 '>
                潮汐
              </th>
              <td className='px-6 pt-4 pb-2'>
                <div
                  className={`
                  ${
                    tide1 === '滿潮' ? 'text-red-500' : 'text-sky-500'
                  } flex flex-col items-center
                `}
                >
                  <img
                    className='my-1 w-5'
                    src={tide1 === '滿潮' ? highTide : lowTide}
                    alt=''
                  />
                  {tide1}
                </div>
              </td>
              <td className='px-6 pt-4 pb-2'>
                <div
                  className={`${
                    tide2 === '滿潮' ? 'text-red-500' : 'text-sky-500'
                  } flex flex-col items-center`}
                >
                  <img
                    className='my-1 w-5'
                    src={tide2 === '滿潮' ? highTide : lowTide}
                    alt=''
                  />
                  {tide2}
                </div>
              </td>
              <td className='px-6 pt-4 pb-2'>
                <div
                  className={`${
                    tide3 === '滿潮' ? 'text-red-500' : 'text-sky-500'
                  }  flex flex-col items-center`}
                >
                  <img
                    className='my-1 w-5'
                    src={tide3 === '滿潮' ? highTide : lowTide}
                    alt=''
                  />
                  {tide3}
                </div>
              </td>
              <td className='px-6 pt-4 pb-2'>
                <div
                  className={`${
                    tide4 === '滿潮' ? 'text-red-500' : 'text-sky-500'
                  }  flex flex-col items-center`}
                >
                  {tide4 && (
                    <img
                      className='my-1 w-5'
                      src={tide4 === '滿潮' ? highTide : lowTide}
                      alt=''
                    />
                  )}
                  {tide4}
                </div>
              </td>
            </tr>
            <tr className=''>
              <th className='... truncate px-6 pb-4 font-medium text-gray-900 hover:text-clip '>
                相對海平面潮高(cm)
              </th>
              <td className='px-6 pb-4'>{tideHeight1}</td>
              <td className='px-6 pb-4'>{tideHeight2}</td>
              <td className='px-6 pb-4'>{tideHeight3}</td>
              <td className='px-6 pb-4'>{tideHeight4}</td>
            </tr>
          </tbody>
        </table>
        {hint && (
          <Alert
            onClose={() => {
              setHint(false);
            }}
            severity='info'
            sx={{ width: '100%' }}
          >
            {counter >= data.length - 1
              ? '已是最後一筆資料'
              : counter <= 0
              ? '已是最前一筆資料'
              : setHint(false)}
          </Alert>
        )}
        <div className='mt-5 flex items-center justify-center'>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              onClick={previousTideForecastHandle}
              variant='contained'
              startIcon={<ArrowLeftIcon />}
            >
              前一日潮汐預報
            </Button>
            <Button
              onClick={nextTideForecastHandle}
              variant='contained'
              endIcon={<ArrowRightIcon />}
            >
              下一日潮汐預報
            </Button>
            <Button
              onClick={handleClickOpen}
              variant='outlined'
              endIcon={<CalendarTodayIcon />}
            >
              30日潮汐預報表
            </Button>
          </Stack>
          <Dialog
            fullWidth={true}
            maxWidth={'lg'}
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogContent>
              <Box sx={{ height: 650, width: '100%' }}>
                <ForecastTable data={data} />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                關閉
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <ul className='text-start p-5 pt-4 pb-2 text-sm'>
          <li>
            <hr className='m-3' />
          </li>
          <li>
            <i className='bi bi-info-circle'></i>{' '}
            最佳生態觀賞時間為每日退潮前後2個小時。
          </li>
          <li>
            <i className='bi bi-info-circle'></i>{' '}
            桃園海岸潮汐時間的口訣為：「初一、十五早晚乾，初八、二三早晚滿」
          </li>
        </ul>
      </div>
    </Paper>
  );
};
const columns = [
  { id: 'startTime', align: 'left', label: '日期', minWidth: 120 },
  { id: 'lunaCalender', align: 'left', label: '農曆', minWidth: 100 },
  { id: 'time1', align: 'center', label: '時間' },
  { id: 'tide1', align: 'left', label: '潮差', minWidth: 150 },
  { id: 'time2', align: 'center', label: '時間' },
  { id: 'tide2', align: 'left', label: '潮差', minWidth: 150 },
  { id: 'time3', align: 'center', label: '時間' },
  { id: 'tide3', align: 'left', label: '潮差', minWidth: 150 },
  { id: 'time4', align: 'center', label: '時間' },
  { id: 'tide4', align: 'left', label: '潮差', minWidth: 150 },
];

const ForecastTable = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: 600 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell align='left'>
                    {row.startTime.slice(0, 10)}
                  </TableCell>
                  <TableCell align='left'>
                    {row.weatherElement[0].elementValue}
                  </TableCell>
                  <TableCell align='center'>
                    {row.weatherElement[2].time[0].dataTime.slice(11, 16)}
                  </TableCell>
                  <TableCell
                    sx={
                      row.weatherElement[2].time[0].parameter[0]
                        .parameterValue === '滿潮'
                        ? { color: 'red' }
                        : { color: 'teal' }
                    }
                  >
                    {row.weatherElement[2].time[0].parameter[0].parameterValue}{' '}
                    {`${row.weatherElement[2].time[0].parameter[2].parameterValue}m`}
                  </TableCell>
                  <TableCell align='center'>
                    {row.weatherElement[2].time[1].dataTime.slice(11, 16)}
                  </TableCell>
                  <TableCell
                    align='left'
                    sx={
                      row.weatherElement[2].time[1].parameter[0]
                        .parameterValue === '滿潮'
                        ? { color: 'red' }
                        : { color: 'teal' }
                    }
                  >
                    {row.weatherElement[2].time[1].parameter[0].parameterValue}{' '}
                    {`${row.weatherElement[2].time[1].parameter[2].parameterValue}m`}
                  </TableCell>
                  <TableCell align='center'>
                    {row.weatherElement[2].time[2].dataTime.slice(11, 16)}
                  </TableCell>
                  <TableCell
                    align='left'
                    sx={
                      row.weatherElement[2].time[2].parameter[0]
                        .parameterValue === '滿潮'
                        ? { color: 'red' }
                        : { color: 'teal' }
                    }
                  >
                    {row.weatherElement[2].time[2].parameter[0].parameterValue}{' '}
                    {`${row.weatherElement[2].time[2].parameter[2].parameterValue}m`}
                  </TableCell>
                  {row.weatherElement[2].time.length === 4 ? (
                    <>
                      <TableCell align='center'>
                        {row.weatherElement[2].time[3].dataTime.slice(11, 16)}
                      </TableCell>
                      <TableCell
                        align='left'
                        sx={
                          row.weatherElement[2].time[3].parameter[0]
                            .parameterValue === '滿潮'
                            ? { color: 'red' }
                            : { color: 'teal' }
                        }
                      >
                        {
                          row.weatherElement[2].time[3].parameter[0]
                            .parameterValue
                        }{' '}
                        {`${row.weatherElement[2].time[3].parameter[2].parameterValue}m`}
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell align='center'>無</TableCell>
                      <TableCell align='left'>無</TableCell>
                    </>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TideForecast;
