import { useState } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  useToast,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });
  const toast = useToast();

  const onClose = () => {
    reset();
    loginModal.onClose();
  };

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast({
          title: "Amazing!",
          description: "Succesfully logged in",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        reset();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast({
          title: "Error :(",
          description: callback.error,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    });
  };

  const onToggle = () => {
    if (isSubmitting) {
      return;
    }

    loginModal.onClose();
    reset();
    registerModal.onOpen();
  };

  return (
    <Modal isOpen={loginModal.isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="zinc.900" fontSize="2xl">
          Login
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={5} bg="zinc.900">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel fontSize="10pt" color="subtext">
                Email address
              </FormLabel>
              <Controller
                name="email"
                control={control}
                // defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="johndoe@example.com"
                    focusBorderColor="brand.700"
                  />
                )}
              />

              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} mt={4}>
              <FormLabel fontSize="10pt" color="subtext">
                Password
              </FormLabel>
              <InputGroup>
                <Controller
                  name="password"
                  control={control}
                  // defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="*************"
                      focusBorderColor="brand.700"
                    />
                  )}
                />

                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <HiEyeOff /> : <HiEye />}
                    onClick={() => setShowPassword(!showPassword)}
                    variant="ghost"
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button
              mt={5}
              mb={2}
              bg="brand.700"
              isLoading={isLoading}
              type="submit"
              width="full"
              // isDisabled={!isValid}
              _hover={{
                color: "white",
                background: "brand.800",
                borderColor: "brand.800",
              }}
            >
              Login
            </Button>

            <Flex alignItems="center">
              <Divider />
              <Text fontSize="9pt" fontWeight="700" px={3}>
                OR
              </Text>
              <Divider />
            </Flex>

            <Button
              my={2}
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              _hover={{
                color: "white",
                background: "brand.800",
                borderColor: "brand.800",
              }}
              onClick={() => signIn("google")}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            <Button
              mb={5}
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FaGithub />}
              _hover={{
                color: "white",
                background: "brand.800",
                borderColor: "brand.800",
              }}
              onClick={() => signIn("github")}
            >
              <Center>
                <Text>Sign in with Github</Text>
              </Center>
            </Button>

            <Flex fontSize="9pt" justify="center" mb={2}>
              <Text mr={1}>New around here?</Text>
              <Text
                color="brand.700"
                fontWeight={700}
                cursor="pointer"
                onClick={onToggle}
                _hover={{ textDecoration: "underline" }}
              >
                Register
              </Text>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
