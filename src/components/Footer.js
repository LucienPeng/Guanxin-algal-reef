import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer>
      <div className=' bg-sky-800 pt-4 pb-8 dark:bg-gray-800 xl:pt-8'>
        <div className='mx-auto mt-5 max-w-screen-lg text-gray-400  sm:px-6 md:px-8 xl:max-w-screen-xl'>
          <ul className='flex flex-wrap justify-center gap-10 pb-8 text-lg font-light sm:flex-nowrap'>
            <li className='w-1/2 md:w-1/3 lg:w-1/3'>
              <div className='text-center'>
                <h2 className='mb-5 text-xl text-white '>認識我們</h2>
                <ul className='sm:leading-10'>
                  <li
                    className=' text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>場館簡介</Link>
                  </li>
                  <li
                    className=' text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>時光隧道</Link>
                  </li>
                  <li
                    className=' text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>認識藻礁</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className='w-1/2 md:w-1/3 lg:w-1/3'>
              <div className='text-center'>
                <h2 className='mb-5 text-xl text-white '>實用資訊</h2>
                <ul className='sm:leading-10'>
                  <li
                    className='text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>最新消息</Link>
                  </li>
                  <li
                    className='text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>潮汐預測</Link>
                  </li>
                  <li
                    className='text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>活動體驗</Link>
                  </li>
                  <li
                    className='text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>鄰近景點</Link>
                  </li>
                  <li
                    className='text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>交通指南</Link>
                  </li>
                  <li
                    className='text-gray-300 hover:scale-110
                hover:text-amber-300'
                  >
                    <Link to='#'>遊憩資訊</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className='w-1/2 md:w-1/3 lg:w-1/3'>
              <div className='text-center'>
                <h2 className='mb-5 text-xl text-white '>聯絡我們</h2>
                <ul className='hidden sm:block sm:leading-10'>
                  <li className='flex justify-center'>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <FacebookIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'>Facebook</Link>
                        </span>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <InstagramIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'>Instagram</Link>
                        </span>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <LocalPhoneIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'>0800-520-526</Link>
                        </span>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <EmailIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'>test@gmail.com</Link>
                        </span>
                      </Box>
                    </Stack>
                  </li>
                </ul>

                <ul className='sm:hidden sm:leading-10'>
                  <li className='flex justify-center'>
                    <Stack direction='row' spacing={2}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <FacebookIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'></Link>
                        </span>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <InstagramIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'></Link>
                        </span>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <LocalPhoneIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'></Link>
                        </span>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: '#404040' }}>
                          <EmailIcon style={{ fill: 'white' }} />
                        </Avatar>
                        <span className='ml-5 text-gray-300 hover:scale-110 hover:text-amber-300'>
                          <Link to='#'></Link>
                        </span>
                      </Box>
                    </Stack>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-sky-900 py-3 text-center text-xs text-gray-300'>
        CopyRight © 2022 永興社區發展協會＆藻礁生態環境教室 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
