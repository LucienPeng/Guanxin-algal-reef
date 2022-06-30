import React from 'react';
import { Paper } from '@mui/material';
import { useFetchDataFirebase, usePagination } from './Hooks';
import dayjs from 'dayjs';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Pagination,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const News = (props) => {
  const fetchedData = useFetchDataFirebase();
  const newsList = fetchedData[0];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel);
    setExpanded(isExpanded ? panel : false);
  };

  //
  let [page, setPage] = React.useState(1);
  const itemsPerPage = 5;
  const count = Math.ceil(newsList.length / itemsPerPage);
  const pagedData = usePagination(newsList, itemsPerPage);

  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    newsList,
    itemsPerPage
  );

  const handlePageChange = (e, page) => {
    setPage(page);
    pagedData.jump(page);
  };

  return (
    <Paper
      ref={props.newsRef}
      elevation={3}
      className='flex h-full w-full flex-col items-center justify-start px-5 '
    >
      <h2 className='mb-5 mt-5 items-start text-lg'>最新消息</h2>
      <Stack sx={{ width: '100%', marginBottom: '1rem' }} direction={'column'}>
        {newsList.length > 0 && (
          <Box sx={{ marginBottom: 10 }}>
            {pagedData.currentData().map((item) => (
              <Accordion
                key={item.name}
                expanded={expanded === item.name}
                onChange={handleChange(item.name)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <Typography sx={{ marginRight: 5 }}>
                    {dayjs(item.date).format('YYYY/MM/DD')}
                    {/* {item.date} */}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {item.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {item.detail}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      marginTop: 5,
                      textAlign: 'right',
                    }}
                  >
                    {item.date} 發布
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
        <Pagination
          style={{ margin: 'auto' }}
          count={count}
          shape='rounded'
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Paper>
  );
};

export default News;
