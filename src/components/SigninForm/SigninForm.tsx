'use client';

import GithubIcon from '@/icons/GithubIcon';
import GoogleIcon from '@/icons/GoogleIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Link,
} from '@nextui-org/react';
import { CaretRight, Cube } from '@phosphor-icons/react';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema, loginSchema } from './SigninForm.schemas';
import { SigninFormProps } from './SigninForm.types';

export default function SigninForm(props: SigninFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full">
      <Card
        classNames={{
          base: 'rounded-xl w-full max-w-full min-w-full',
          header:
            'flex flex-col items-center justify-center gap-6 rounded-t-xl pt-6 px-8',
          body: 'flex flex-col gap-6 rounded-b-xl px-8 pb-6',
          footer:
            'text-center flex flex-col gap-3 justify-center bg-default-50 border-t p-0 py-3',
        }}
      >
        <CardHeader>
          <Cube className="text-primary" weight="duotone" size={36}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 0 0"
              to="360 0 0"
              repeatCount="indefinite"
            ></animateTransform>
          </Cube>

          <div className="flex flex-col text-center gap-1">
            <h1 className="text-lg font-bold">Sign in to Project Name</h1>
            <h2 className="text-sm text-default-600">
              Welcome back! Please sign in to continue.
            </h2>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex gap-2 w-full">
            <Button
              radius="sm"
              variant="flat"
              className="w-full"
              startContent={<GithubIcon className="size-4" />}
            />
            <Button
              radius="sm"
              variant="flat"
              className="w-full"
              startContent={<GoogleIcon className="size-4" />}
            />
          </div>
          <div className="flex gap-6 items-center w-full">
            <Divider className="flex-1" />
            <span className="text-sm text-default-500">or</span>
            <Divider className="flex-1" />
          </div>

          <Controller
            control={control}
            name="email"
            render={({ field: { name, onChange, value } }) => (
              <Input
                type="email"
                radius="sm"
                label="Email address"
                labelPlacement="outside"
                placeholder="john@doe.com"
                isRequired
                value={value}
                onChange={onChange}
                isDisabled={isSubmitting}
                isInvalid={!!errors[name]}
                errorMessage={errors?.[name]?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { name, onChange, value } }) => (
              <Input
                type="password"
                radius="sm"
                label="Password"
                labelPlacement="outside"
                placeholder="********"
                isRequired
                value={value}
                onChange={onChange}
                isDisabled={isSubmitting}
                isInvalid={!!errors[name]}
                errorMessage={errors?.[name]?.message}
              />
            )}
          />

          <Button
            radius="sm"
            type="submit"
            className="w-full font-medium"
            endContent={<CaretRight size={10} weight="fill" />}
          >
            Continue
          </Button>
        </CardBody>
        <CardFooter>
          <p className="text-sm text-default-500 text-center">
            Don&#39;t have an account?{' '}
            <strong>
              <Link href="/signup" className="text-sm">
                Sign up
              </Link>
            </strong>
          </p>

          <Divider className="bg-default-200" />

          <p className="text-xs text-default-500 text-center flex items-center justify-center gap-2">
            Secured by{' '}
            <Image src="/authjs.webp" alt="Authjs" width={20} height={20} />
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
