'use client'

import { Button, Input, Text, Tab } from 'zionix-ui'
import { useForm, SubmitHandler } from "react-hook-form";
import Highlight from 'react-highlight'
import pkg from '../../package.json'

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data)
  }


  return (
    <div className='flex flex-col justify-center items-center flex-wrap mt-12 max-w-3xl mx-auto'>

      {/* Header*/}
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <div className='flex justify-center items-end gap-1'>
            <Text superLarge thin>ZIONIX</Text>
            <Text large className='text-white dark:text-slate-950 py-1 px-2 bg-slate-900 dark:bg-gray-50 rounded-lg shadow-sm'>ui</Text>
          </div>
          <div className='flex justify-end'>
            <Text subtitle>v{pkg.dependencies["zionix-ui"].substring(1, 10)}</Text>
          </div>
        </div>
        <Text subtitle>Interface library documentation</Text>
      </div>

      {/* Typography */}
      <div className='flex flex-col gap-4 mt-9'>
        <Text extraLarge>Typography</Text>

        <Tab.Root>
          <Tab.Tabs>
            <Tab.Item id='design' active>Design</Tab.Item>
            <Tab.Item id='code'>Code</Tab.Item>
          </Tab.Tabs>

          <Tab.Content idItem='design'>
            <div className='flex gap-8'>
              <div className='flex flex-col gap-4'>
                <Text>Text 1</Text>
                <Text large>Text 1</Text>
                <Text extra>Text 1</Text>
                <Text extraLarge>Text 1</Text>
                <Text superLarge>Text 1</Text>
                <Text thin superLarge>Text 1</Text>
                <Text subtitle>Description text</Text>
                <Text accent>Accent color</Text>
              </div>
              <div className='flex flex-col gap-4'>
                <Text semiBold>Text 1</Text>
                <Text semiBold large>Text 1</Text>
                <Text semiBold extra>Text 1</Text>
                <Text semiBold extraLarge>Text 1</Text>
                <Text semiBold superLarge>Text 1</Text>
                <Text bold superLarge>Text 1</Text>
                <Text semiBold subtitle>Description text</Text>
                <Text semiBold accent>Accent color</Text>
              </div>
            </div>

          </Tab.Content>

          <Tab.Content idItem='code'>
            <Highlight className='jsx'>
              {`
                <div>
                <Text>Text 1</Text>
                <Text large>Text 1</Text>
                <Text extra>Text 1</Text>
                <Text extraLarge>Text 1</Text>
                <Text superLarge>Text 1</Text>
                <Text thin superLarge>Text 1</Text>
                <Text subtitle>Description text</Text>
                <Text accent>Accent color</Text>

                <Text semiBold>Text 1</Text>
                <Text semiBold large>Text 1</Text>
                <Text semiBold extra>Text 1</Text>
                <Text semiBold extraLarge>Text 1</Text>
                <Text semiBold superLarge>Text 1</Text>
                <Text bold superLarge>Text 1</Text>
                <Text semiBold subtitle>Description text</Text>
                <Text semiBold accent>Accent color</Text>
                </div>
                `}
            </Highlight>
          </Tab.Content>
        </Tab.Root>
      </div>

    </div>
  )
}
