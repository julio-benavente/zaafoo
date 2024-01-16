"use client";

import {
  Button,
  Checkbox,
  EmailInput,
  InputLabel,
  Link,
  PasswordInput,
} from "@/components";
import { Typography, InputContainer } from "@/components";
import MeshBackgroundDecoration from "@/components/MeshBackgroundDecoration";
import NextLink from "next/link";
import { useController, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useFakeRequest from "@/helpers/fakeRequest";
import errorSnackbar from "@/helpers/errorSnackbar";

interface FormProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

const formDefaultValues: FormProps = {
  email: "email@email.com",
  password: "password1234",
  rememberMe: true,
};

const SignInPage = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: formDefaultValues,
  });

  const { field: emailFormProps } = useController({
    control,
    name: "email",
    rules: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      minLength: 3,
      maxLength: 120,
    },
  });
  const { field: passwordFormProps } = useController({
    control,
    name: "password",
    rules: {
      required: true,
      minLength: 8,
      maxLength: 64,
    },
  });
  const { field: rememberMeProps } = useController({
    control,
    name: "rememberMe",
  });

  const router = useRouter();
  const [fakeResponse, fakeRequest] = useFakeRequest();

  // console.log(getValues());
  const submitForm = async (data: FormProps) => {
    const response = await fakeRequest();

    if (response === "success") {
      router.push("/application/menu");
    } else {
      errorSnackbar("An error occured. Try again.");
    }
  };

  return (
    <main className="bg-yellow-50">
      <section className="container min-h-screen relative overflow-hidden z-0">
        <MeshBackgroundDecoration />

        <div>
          <div>
            <NextLink href="/" className="">
              <Typography className="font-black mb-12">Zaafoo</Typography>
            </NextLink>

            <div className="max-w-sm">
              <div className="mb-12">
                <Typography variant="h1">Sign in</Typography>
                <Typography variant="caption" className="text-gray-600">
                  Enter your account details
                </Typography>
              </div>

              <form onSubmit={handleSubmit(submitForm)}>
                <div className="grid gap-y-6 mb-4">
                  <InputContainer>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <EmailInput {...emailFormProps} disabled={isSubmitting} />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <PasswordInput
                      {...passwordFormProps}
                      disabled={isSubmitting}
                    />
                  </InputContainer>

                  <div className="flex flex-row">
                    <InputContainer>
                      <Checkbox
                        labelProps={{
                          label: "Remember me",
                          ...rememberMeProps,
                          disabled: isSubmitting,
                        }}
                      />
                    </InputContainer>
                    <Typography variant="link" className="whitespace-nowrap">
                      <Link href="/restore-password">Recover password</Link>
                    </Typography>
                  </div>

                  <Button fullWidth type="submit" disabled={isSubmitting}>
                    Sign in
                  </Button>
                </div>
              </form>

              <Typography variant="caption">
                You don&lsquo;t have an account?{" "}
                <Typography variant="link">
                  <Link href="/sign-up">Create an account</Link>
                </Typography>
                .
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
