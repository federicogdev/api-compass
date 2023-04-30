import useAddModal from "@/hooks/useAddModal";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Auth, Cors, Https, Paid } from "@prisma/client";

const schema = z.object({
  title: z.string().min(6, { message: "Title must be at least 6 characters" }),
  uri: z.string().min(12, { message: "URL must be at least 12 characters" }),
  description: z.string().optional(),
  tags: z.string(),
  https: z.nativeEnum(Https).optional(),
  cors: z.nativeEnum(Cors).optional(),
  auth: z.nativeEnum(Auth).optional(),
  paid: z.nativeEnum(Paid).optional(),
});

type CreatePostFormInputs = {
  title: string;
  description?: string;
  uri: string;
  tags: string;
  https?: Https;
  cors?: Cors;
  auth?: Auth;
  paid?: Paid;
};

interface Props {}

const AddModal = (props: Props) => {
  const addModal = useAddModal();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<CreatePostFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<CreatePostFormInputs> = (data) => {
    alert(JSON.stringify(data));
  };

  const onClose = () => {
    reset();
    addModal.onClose();
  };

  return (
    <Modal isOpen={addModal.isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="zinc.900" fontSize="2xl">
          Add new post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={5} bg="zinc.900">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel fontSize="11pt" color="subtext">
                Title{" "}
              </FormLabel>
              <Controller
                name="title"
                control={control}
                // defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="The coolest API"
                    focusBorderColor="brand.700"
                  />
                )}
              />

              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.uri} mt={3}>
              <FormLabel fontSize="11pt" color="subtext">
                URI{" "}
              </FormLabel>
              <Controller
                name="uri"
                control={control}
                // defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="https://apicompass.com"
                    focusBorderColor="brand.700"
                  />
                )}
              />

              <FormErrorMessage>{errors.uri?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.cors} mt={3}>
              <Controller
                name="cors"
                control={control}
                // defaultValue=""
                render={({ field: { value, onChange } }) => (
                  <RadioGroup value={value} onChange={onChange}>
                    <Stack direction="row" alignItems="center">
                      <FormLabel pt={2} fontSize="11pt" color="subtext">
                        Cors:{" "}
                      </FormLabel>
                      <Radio size="md" value={Cors.cors}>
                        Yes
                      </Radio>
                      <Radio size="md" value={Cors.no_cors}>
                        No
                      </Radio>
                      <Radio size="md" value={Cors.unknown}>
                        Unknown
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />

              <FormErrorMessage>{errors.cors?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.tags} mt={3}>
              <FormLabel fontSize="11pt" color="subtext">
                Tags{" "}
              </FormLabel>

              <Controller
                name="tags"
                control={control}
                // defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Crypto, AI, Sports, Movies"
                    focusBorderColor="brand.700"
                  />
                )}
              />

              <FormHelperText mb={2} fontSize="9pt">
                Add some comma separated keyword.
              </FormHelperText>
            </FormControl>

            <FormControl isInvalid={!!errors.https}>
              <Controller
                name="https"
                control={control}
                // defaultValue=""
                render={({ field: { value, onChange } }) => (
                  <RadioGroup value={value} onChange={onChange}>
                    <Stack direction="row" alignItems="center">
                      <FormLabel pt={2} fontSize="11pt" color="subtext">
                        Https:{" "}
                      </FormLabel>
                      <Radio size="md" value={Https.https}>
                        Yes
                      </Radio>
                      <Radio size="md" value={Https.no_https}>
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />

              <FormErrorMessage>{errors.https?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.description} mt={3}>
              <FormLabel fontSize="11pt" color="subtext">
                Description{" "}
              </FormLabel>
              <Controller
                name="description"
                control={control}
                // defaultValue=""
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="One of the best structured and easy to use API"
                    focusBorderColor="brand.700"
                  />
                )}
              />

              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <Button
              mt={5}
              mb={2}
              bg="brand.700"
              // isLoading={isLoading}
              type="submit"
              width="full"
              // isDisabled={!isValid}
              _hover={{
                color: "white",
                background: "brand.800",
                borderColor: "brand.800",
              }}
            >
              Create
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddModal;
