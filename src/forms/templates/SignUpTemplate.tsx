import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FieldErrors, UseFormReturn } from 'react-hook-form'
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  useTheme,
  Alert,
  CircularProgress,
} from '@mui/material'

import VerifyForm from '../VerifyForm'
import { IAuthSignUpRequest } from '@/services/types'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'

interface ISignUpTemplate {
  authRegisterForm: UseFormReturn<IAuthSignUpRequest>
  onSubmitForm: (e: React.FormEvent) => void
  isLoading: boolean
  openPopup: boolean
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>
  isError: boolean
  error: FieldErrors<FormData> | AxiosError
}

export default function SignUpTemplate({
  authRegisterForm,
  onSubmitForm,
  isLoading,
  openPopup,
  setOpenPopup,
  setIsVerify,
  isError,
  error,
}: ISignUpTemplate) {
  const theme = useTheme()
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (isError && error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage(
          Object.values(error)
            .map((e) => e.message)
            .join(', ')
        )
      }
    }
  }, [error, isError])

  return (
      <Container
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '452px',
          position: 'relative',
          padding: '16px',
        }}
      >
        {isLoading && <CircularProgress sx={{ position: 'absolute', m: 1 }} />}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: '25px',
            maxWidth: 450,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Image
            width={50}
            height={41}
            alt="twitter icon"
            src="/icons/twitter-logo.png"
          />
          <Typography variant="h1" ml="13px">
            {' '}
            Junte-se ao Twitter hoje{' '}
          </Typography>
          <TextField
            label="Nome"
            type="text"
            variant="outlined"
            fullWidth
            {...authRegisterForm.register('username', { required: true })}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            {...authRegisterForm.register('email', { required: true })}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            {...authRegisterForm.register('password', { required: true })}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: '100px',
              p: '14px',
              fontSize: theme.typography.button.fontSize,
              fontWeight: theme.typography.button.fontWeight,
              textTransform: 'inherit',
              color: theme.typography.button.color,
            }}
          >
            Inscreva-se
          </Button>
          {isError && <Alert severity="warning">{errorMessage}</Alert>}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              rowGap: '25px',
              maxWidth: 450,
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Link
              href="/forgotpassword"
              style={{ color: theme.palette.primary.main }}
            >
              <Typography variant="h4" sx={{ fontWeight: 400 }}>
                Esqueceu a senha?
              </Typography>
            </Link>
            <Link href="/signIn">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  color: theme.palette.primary.main,
                }}
              >
                Entrar
              </Typography>
            </Link>
          </Box>
        </Box>
        {!isError && (
          <VerifyForm
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            setIsVerify={setIsVerify}
          />
        )}
      </Container>

  )
}
