import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as Yup from 'yup'
import { useRouter } from "next/router";
import {Container,Form, Title,Input,Button} from './styled'

interface IFormInputs {
    email: string
    password: string
  }
  
  const schema = Yup.object({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatória')
      .max(8, 'Senha deve ter no máximo 8 caracteres')
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
  }).required()

  export default function Login (){
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });
    
      const onSubmit = async (data: IFormInputs) => {
        try {
            const response = await axios.post('http://localhost:4000/login',data)
            console.log(response)
            router.push('/home')
        } catch (error) {
            console.log(error)
        }

      };
      async function handleRegister(email: string, password: string) {
        await axios.post('http://localhost:4000/login', {
          email: email,
          password: password,
        })
        router.push('/home')
      }
    return (
        
            <Container>
            <Title>   
            <h1>Happy<small>Life</small></h1>
            </Title> 
            <div className="FormField">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="EmailField">
                <label>Email*</label>
                <Input type="text" placeholder="Email" {...register('email')} />
                <p>{errors.email?.message}</p>
                </div>
                <div className="PasswordField">
                <label>Senha*</label>
                <Input type="password" placeholder="Senha" {...register('password')} />
                <p>{errors.password?.message}</p>
                </div>
                <Button type="submit" onClick={() => {handleRegister}}>Entrar</Button>
            </Form>
            </div>
            </Container>
    )
}