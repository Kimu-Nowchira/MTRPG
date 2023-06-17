import React, { useContext } from "react"
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import GameContext from "../../context/GameContext"
import { User } from "../../types"
import { IconSettings } from "@tabler/icons-react"

const EditCharacterModal: React.FC<{ user: User }> = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues: { name: user.name } })
  const toast = useToast()

  const { users, setUsers } = useContext(GameContext)

  const onSubmit = (values: any) => {
    user.name = values.name

    setUsers((prev) => [...users.filter((u) => u.id !== user.id), user])
    toast({
      title: "캐릭터가 수정되었습니다.",
    })
    onClose()
  }

  const _onClose = () => {
    reset()
    onClose()
  }

  return (
    <>
      <IconButton
        aria-label="Edit character"
        icon={<IconSettings />}
        w="20px"
        position="absolute"
        left={340}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={_onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>캐릭터 수정하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>이름</FormLabel>
                <Input
                  id="name"
                  placeholder="캐릭터의 이름"
                  {...register("name", {
                    required: true,
                  })}
                />
                {/*<FormErrorMessage>*/}
                {/*  {errors.name && errors.name.message}*/}
                {/*</FormErrorMessage>*/}
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                확인
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditCharacterModal
