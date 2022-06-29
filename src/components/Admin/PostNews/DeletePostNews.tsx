import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useFetchDataFirebase,
  useDeleteDataFirebase,
  usePagination,
} from '../../Hooks';
import {
  Grid,
  Stack,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  Checkbox,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Pagination,
} from '@mui/material';

interface NewsList {
  readonly name?: string;
  readonly detail?: string;
  readonly date?: string;
}

interface Selected {
  readonly name?: string;
  value?: boolean;
}

interface AlertProps {
  readonly open: boolean;
  readonly setOpen: (open: boolean) => void;
  readonly state: Selected[];
  readonly deleteSelectedDatas: () => void;
  readonly fetchData: any;
}

export const DeleteNews = () => {
  const label = { inputProps: { 'aria-label': 'NewsList Checkbox' } };
  const navigation = useNavigate();
  const [fetchedData, fetchData]: any = useFetchDataFirebase();
  const [newsList, setNewsList] = useState<NewsList[]>([]);
  //
  const [state, setState] = useState<Selected[]>([]);
  const deleteSelectedDatas: () => void = useDeleteDataFirebase('news', state);
  //
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  //
  useEffect(() => {
    setNewsList(fetchedData);
  }, [fetchedData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState([
      ...state,
      {
        name: event.target.name,
        value: event.target.checked,
      },
    ]);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleClickOpen();
  };

  //Pagination
  let [page, setPage] = React.useState(1);
  const itemsPerPage = 5;
  const count = Math.ceil(newsList.length / itemsPerPage);
  const pagedData = usePagination(newsList, itemsPerPage);

  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    newsList,
    itemsPerPage
  );

  const handlePageChange = (event: unknown, page: number) => {
    setPage(page);
    pagedData.jump(page);
  };

  return (
    <Grid
      className='mt-20'
      justifyContent='center'
      alignItems='center'
      container
    >
      <Grid item xs={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2 className='mb-5 text-center text-3xl'>刪除最新消息</h2>
          <form onSubmit={submitHandler}>
            <Box>
              <FormControl>
                <FormGroup>
                  <FormLabel className='text-center'>
                    選擇欲刪除之公告消息
                  </FormLabel>
                  {newsList.length > 0 ? (
                    <nav aria-label='newsList' style={{ minHeight: '60vh' }}>
                      <List>
                        {pagedData
                          .currentData()
                          .map((item: { name: string, date: string }) => (
                            <ListItem key={item.name} disablePadding>
                              <ListItemButton
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '70vw',
                                }}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      //checked={item.name === state ? true : false}
                                      onChange={handleChange}
                                      name={item.name}
                                      {...label}
                                    />
                                  }
                                  label={item.name}
                                />
                                {item.date}發布
                              </ListItemButton>
                            </ListItem>
                          ))}
                      </List>
                    </nav>
                  ) : (
                    <h2 className='py-10 text-center'>沒有任何公告消息</h2>
                  )}
                  <Stack spacing={3} direction='column' alignItems='center'>
                    <Pagination
                      count={count}
                      shape='rounded'
                      page={page}
                      onChange={handlePageChange}
                    />
                    <Stack
                      direction='row'
                      justifyContent='space-around'
                      spacing={5}
                    >
                      <Button
                        variant='outlined'
                        onClick={() => navigation('./admin')}
                      >
                        回選單
                      </Button>
                      <Stack direction='row' spacing={2}>
                        <Button
                          variant='outlined'
                          onClick={() => navigation(-1)}
                        >
                          放棄
                        </Button>
                        <Button type='submit' variant='contained'>
                          送出
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </FormGroup>
              </FormControl>
            </Box>
          </form>
        </Box>
        <AlertDialog
          open={open}
          setOpen={setOpen}
          state={state}
          deleteSelectedDatas={deleteSelectedDatas}
          fetchData={fetchData}
        />
      </Grid>
    </Grid>
  );
};

const AlertDialog = (props: AlertProps) => {
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = () => {
    props.setOpen(false);
    props.deleteSelectedDatas();
    props.fetchData();
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'提醒確認'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          您確定要刪除這{props.state.length}筆內容？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>放棄</Button>
        <Button onClick={handleSubmit} autoFocus>
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};
