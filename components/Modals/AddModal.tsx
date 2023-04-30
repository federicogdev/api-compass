import useAddModal from "@/hooks/useAddModal";
import {
  Button,
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
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

const schema = z.object({
  title: z.string().min(6, { message: "Title must be at least 6 characters" }),
  uri: z.string().min(12, { message: "URL must be at least 12 characters" }),
  description: z.string(),
  tags: z.string(),
});

type CreatePostFormInputs = {
  title: string;
  description: string;
  uri: string;
  tags: string;
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

  const onSubmit: SubmitHandler<CreatePostFormInputs> = async (data) => {};

  const onClose = () => {
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
              <FormLabel fontSize="10pt" color="subtext">
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
              <FormLabel fontSize="10pt" color="subtext">
                URI{" "}
              </FormLabel>
              <Controller
                name="uri"
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

              <FormErrorMessage>{errors.uri?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.tags} mt={3}>
              <FormLabel fontSize="10pt" color="subtext">
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

            <FormControl isInvalid={!!errors.description} mt={3}>
              <FormLabel fontSize="10pt" color="subtext">
                Description{" "}
              </FormLabel>
              <Controller
                name="description"
                control={control}
                // defaultValue=""
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="The coolest API"
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
