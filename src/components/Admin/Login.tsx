import React, { useContext, useState, useReducer } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import {
  Paper,
  Grid,
  Stack,
  TextField,
  Button,
  Box,
  Container,
  InputAdornment,
} from '@mui/material';
import AuthContext from './LoginAuthContext';
import { useLocalStorage } from '../Hooks';
//
import {
  InitialLoginFormState,
  LoginFormReducer,
} from '../../store/context/login-reducer';

import {
  LoginActionType,
  LoginPasswordInputAction,
  LoginPasswordBlurAction,
  LoginUserBlurAction,
  LoginUserInputAction,
  LoginFailedAction,
} from '../../store/context/login-reducer';

//

interface authContext {
  readonly isLoggedIn: boolean;
  readonly setLoggedIn: (isLoggedIn: boolean) => void;
}

const errorMsgEl = (msg: string) => {
  return (
    <Stack direction={'row'} spacing={2}>
      <InfoOutlinedIcon sx={{ color: 'red' }} />
      <span className='text-red-500'>{msg}</span>
    </Stack>
  );
};

export const Login = () => {
  const ctx: authContext = useContext(AuthContext);
  const localStorage = useLocalStorage('isLoggedIn', ctx.isLoggedIn);

  const [pwdHidden, setHidden] = useState(true);
  const pwdClickHandler = (hidden: boolean) => {
    setHidden(hidden);
  };
  //New codes start here
  const [loginState, dispatchLogin] = useReducer(
    LoginFormReducer,
    InitialLoginFormState
  );
  const [errorMsg, setErrorMsg] = useState('');

  // On username entered

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAction: LoginUserInputAction = {
      type: LoginActionType.UsernameInput,
      username: e.target.value,
    };

    dispatchLogin(inputAction);
  };

  // On username blur
  const usernameBlurHandler = () => {
    const blurAction: LoginUserBlurAction = {
      type: LoginActionType.UsernameBlur,
    };
    dispatchLogin(blurAction);
  };

  // On password entered
  const pwdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAction: LoginPasswordInputAction = {
      type: LoginActionType.PasswordInput,
      password: e.target.value,
    };
    dispatchLogin(inputAction);
  };
  // On password blur
  const pwdBlurHandler = () => {
    const blurAction: LoginPasswordBlurAction = {
      type: LoginActionType.PasswordBlur,
    };
    dispatchLogin(blurAction);
  };

  // On login submit
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const email = (loginState.username as string) || '';
    const password = (loginState.password as string) || '';

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user: any = userCredential.user;
        if (user.uid === 'dnNDN3h99Hc8twKneBGGc7LGqm32') {
          ctx.setLoggedIn(true);
          localStorage.setItem('isLoggedIn', true);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const LoginFailedAction: LoginFailedAction = {
          type: LoginActionType.LoginFailed,
        };
        dispatchLogin(LoginFailedAction);
      });
  };

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Grid justifyContent='center' container>
        <Grid item xs={5}>
          <form onSubmit={submitHandler}>
            <Paper
              elevation={3}
              sx={{
                paddingX: 5,
                paddingY: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 5,
              }}
            >
              <h2 className='text-center text-3xl'>管理員登入</h2>

              <Stack spacing={5}>
                <TextField
                  value={loginState.username}
                  error={(loginState.usernameValid as boolean) === false}
                  onBlur={usernameBlurHandler}
                  onChange={usernameHandler}
                  required
                  id='admin-acc'
                  placeholder='請輸入管理員email'
                  label='帳號'
                  variant='outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 10.125C11.796 10.125 14.0625 7.85848 14.0625 5.0625C14.0625 2.26652 11.796 0 9 0C6.20438 0 3.9375 2.26652 3.9375 5.0625C3.9375 7.85848 6.20508 10.125 9 10.125ZM9 1.125C11.1713 1.125 12.9375 2.89125 12.9375 5.0625C12.9375 7.23516 11.1727 9 9 9C6.82734 9 5.0625 7.23516 5.0625 5.0625C5.0625 2.89125 6.82734 1.125 9 1.125ZM12.3434 11.25H5.625C2.51859 11.25 0 13.7682 0 16.875C0 17.4962 0.503789 18 1.09336 18H16.875C17.4962 18 17.9684 17.4962 17.9684 16.875C18 13.7672 15.4828 11.25 12.3434 11.25ZM1.125 16.875C1.125 14.3937 3.14367 12.375 5.625 12.375H12.3434C14.857 12.375 16.875 14.393 16.875 16.875H1.125Z'
                            fill='#252A2E'
                          />
                        </svg>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  aria-label='Password'
                  value={loginState.password}
                  error={(loginState.passwordValid as boolean) === false}
                  onBlur={pwdBlurHandler}
                  onChange={pwdHandler}
                  required
                  id='admin-psw'
                  placeholder='請輸入管理員密碼'
                  label='密碼'
                  variant='outlined'
                  type={pwdHidden ? 'password' : 'text'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <svg
                          width='16'
                          height='19'
                          viewBox='0 0 16 19'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M13.7143 7.99215H12.5714V4.55312C12.5714 2.02437 10.5211 0 8.00002 0C5.47894 0 3.42859 2.05661 3.42859 4.55312V7.95991L2.28573 7.99215C1.02323 7.99215 1.52588e-05 9.01848 1.52588e-05 10.2848V16.0165C1.52588e-05 17.2829 1.02323 18.3092 2.28573 18.3092H13.7143C14.9768 18.3092 16 17.2829 16 16.0165V10.2848C16 9.05252 14.975 7.99215 13.7143 7.99215ZM4.57144 4.58537C4.57144 2.68889 6.1093 1.14634 8.00002 1.14634C9.89073 1.14634 11.4286 2.68889 11.4286 4.58537V8.02439H4.57144V4.58537ZM14.8572 16.0488C14.8572 16.6807 14.3443 17.1951 13.7143 17.1951H2.28573C1.65573 17.1951 1.14287 16.6807 1.14287 16.0488V10.3171C1.14287 9.68515 1.65573 9.17073 2.28573 9.17073H13.7143C14.3443 9.17073 14.8572 9.68515 14.8572 10.3171V16.0488ZM8.00002 11.4312C7.68416 11.4312 7.42859 11.6875 7.42859 12.0043V14.297C7.42859 14.6138 7.68416 14.838 8.00002 14.838C8.31587 14.838 8.57144 14.6445 8.57144 14.3293V12.0366C8.57144 11.7213 8.3143 11.4312 8.00002 11.4312Z'
                            fill='#252A2E'
                          />
                        </svg>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position='end'>
                        {/* Hide Icon */}
                        {!pwdHidden && (
                          <button
                            title='hide password'
                            type='button'
                            onClick={() => {
                              pwdClickHandler(true);
                            }}
                          >
                            <svg
                              width='20'
                              height='16'
                              viewBox='0 0 20 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M9.625 3.27778C7.2622 3.27778 5.34722 5.19275 5.34722 7.55555C5.34722 9.91836 7.2632 11.8333 9.625 11.8333C11.9858 11.8333 13.9028 9.91769 13.9028 7.5589C13.9028 5.19609 11.9878 3.27778 9.625 3.27778ZM9.625 10.7639C7.85607 10.7639 6.41667 9.32482 6.41667 7.55555C6.41667 5.78629 7.85607 4.34722 9.625 4.34722C11.3943 4.34722 12.8333 5.78496 12.8333 7.55589C12.8333 9.32348 11.3662 10.7639 9.625 10.7639ZM19.133 6.95733C17.3217 2.86002 13.7323 0.0694427 9.625 0.0694427C5.51766 0.0694427 1.92801 2.86337 0.115934 6.95733C0.0522357 7.13446 0 7.38845 0 7.55555C0 7.72189 0.0522023 7.97665 0.115934 8.1247C1.92901 12.2511 5.51766 15.0417 9.625 15.0417C13.7323 15.0417 17.3217 12.2484 19.133 8.15377C19.1965 7.97665 19.25 7.69258 19.25 7.55555C19.25 7.38845 19.1965 7.13446 19.133 6.95733ZM18.1538 7.69592C16.4527 11.566 13.1842 13.9722 9.625 13.9722C6.06575 13.9722 2.79727 11.5666 1.10286 7.71263C1.08883 7.67587 1.07112 7.58563 1.03937 7.56224C1.04119 7.52394 1.05895 7.43581 1.06508 7.41643C2.7966 3.51506 6.06575 1.13889 9.625 1.13889C13.1842 1.13889 16.4527 3.54447 18.1471 7.39848C18.1603 7.43457 18.178 7.52257 18.1798 7.54696C18.1772 7.58563 18.1605 7.67587 18.1538 7.69592Z'
                                fill='#252A2E'
                              />
                            </svg>
                          </button>
                        )}{' '}
                        {/* End of hide icon */}
                        {/* Reveal Icon */}
                        {pwdHidden && (
                          <button
                            title='show password'
                            type='button'
                            onClick={() => {
                              pwdClickHandler(false);
                            }}
                          >
                            <svg
                              width='19'
                              height='15'
                              viewBox='0 0 19 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M8.1017 4.01954L9.01934 4.73468C9.17672 4.70801 9.33611 4.68669 9.50117 4.68669C11.0087 4.68669 12.2339 5.85095 12.3322 7.31579L13.2471 8.02858C13.2703 7.8545 13.3 7.68165 13.3 7.50294C13.3 5.43165 11.5989 3.75001 9.49999 3.75001C9.0042 3.75001 8.53514 3.84962 8.1017 4.01954ZM9.49999 13.125C6.33827 13.125 3.43483 11.0162 1.92967 7.6377C1.9172 7.60548 1.90147 7.52638 1.87327 7.50587C1.87489 7.47229 1.89066 7.39504 1.89611 7.37805C2.2773 6.52199 2.74814 5.74885 3.28816 5.06945L2.54449 4.48996C1.94896 5.23762 1.43595 6.08107 1.02656 7.001C0.996298 7.13087 0.923267 7.35352 0.923267 7.50001C0.923267 7.64582 0.969639 7.86915 1.02625 7.99893C2.6368 11.6142 5.82375 14.037 9.47235 14.037C10.9012 14.037 12.2573 13.6573 13.4772 12.9835L12.6537 12.3419C11.685 12.8525 10.6103 13.125 9.49999 13.125ZM9.49999 1.87501C12.6617 1.87501 15.5651 3.9838 17.0703 7.36231C17.082 7.39395 17.0977 7.47109 17.0993 7.49248C17.0977 7.52602 17.082 7.60331 17.0765 7.62024C16.6953 8.4763 16.2248 9.24944 15.6848 9.92854L16.4284 10.508C17.024 9.76038 17.5367 8.91722 17.9463 7.99729C18.0029 7.86751 18.0493 7.64368 18.0493 7.49837C18.0493 7.35256 18.003 7.12923 17.9463 6.99944C16.3358 3.38421 13.1488 0.961356 9.50025 0.961356C8.07139 0.961356 6.71557 1.34104 5.49541 2.01458L6.31894 2.65618C7.31499 2.14835 8.38967 1.87501 9.49999 1.87501ZM9.49999 11.25C9.99517 11.25 10.4666 11.1498 10.9003 10.9796L9.98241 10.2645C9.82486 10.2912 9.66534 10.3127 9.49999 10.3127C7.99186 10.3127 6.76606 9.14723 6.66869 7.68297L5.75342 6.96974C5.70295 7.14552 5.69999 7.31837 5.69999 7.50001C5.69999 9.5713 7.40108 11.25 9.49999 11.25ZM18.8189 14.1621L0.768892 0.100204C0.537329 -0.0595517 0.265273 -0.0243105 0.101992 0.177577C-0.0603692 0.380839 -0.0251005 0.675624 0.180842 0.836464L18.2308 14.899C18.3172 14.9678 18.4211 15 18.525 15C18.6651 15 18.8042 14.9387 18.8979 14.8219C19.0594 14.5928 19.0237 14.3233 18.8189 14.1621Z'
                                fill='black'
                              />
                            </svg>
                          </button>
                        )}{' '}
                        {/* End of reveal icon */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              {loginState.errorMsg.length > 0 &&
                errorMsgEl(loginState.errorMsg)}
              <Button
                disabled={
                  (!loginState.formValid as boolean) || errorMsg.length > 0
                }
                variant='contained'
                type='submit'
              >
                登入
              </Button>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
