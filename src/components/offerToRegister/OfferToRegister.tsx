import SignUpTemplate from '@/forms/templates/SignUpTemplate';
import { useSignUpMutation } from '@/query/authorization/authorization.mutation';
import { IAuthSignUpRequest } from '@/services/types';
import {
  Container,
} from '@mui/material';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';


export default function RegisterForm() {
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const authRegisterForm = useForm<IAuthSignUpRequest>();

  const { mutateAsync: mutateSignUp, data, isLoading, isError, error } = useSignUpMutation();

  useEffect(()=>{
    if (data) {
      setOpenPopup(true);
      authRegisterForm.reset();
    }
  },[data])

  const requestRegister: SubmitHandler<IAuthSignUpRequest> = (value) => {
  mutateSignUp(value);
  };

  const onSubmitForm = (event: React.FormEvent) => {
  event.preventDefault();
  authRegisterForm.handleSubmit(requestRegister)();
  };

  isVerify && push('/signIn');

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <SignUpTemplate
          authRegisterForm={authRegisterForm}
          onSubmitForm={onSubmitForm}
          isLoading={isLoading}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setIsVerify={setIsVerify}
          isError={isError}
          error={error as AxiosError}
        />
      </Container>
  );
}
