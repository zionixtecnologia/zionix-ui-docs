'use client'

import { Button, Input } from 'zionix-ui'
import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data)
  }


  return (
    <div className='flex flex-col w-max gap-4 mx-auto mt-4'>
      <Input placeholder='type your email...' label='E-mail' {...register('email')} />
      <Button primary onClick={handleSubmit(onSubmit)}>Teste</Button>
    </div>
  )
}
