import React from "react"
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Player } from "../../types"
import ValuesGroup from "../molecules/ValuesGroup"
import { useRecoilState } from "recoil"
import playersState from "../../recoil/atoms/players"
import { AiOutlinePlus } from "react-icons/ai"

const AddCharacterModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const toast = useToast()

  const [players, setPlayers] = useRecoilState(playersState)

  const onSubmit = (values: any) => {
    const user: Player = {
      id: Math.random().toString(36).substring(2, 9),
      name: values.name,
      level: 0,
      exp: 0,
      money: 0,
      job: "구이",
      species: "구이",
      description: "아아아",
      status: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
    }

    setPlayers((prev) => [...prev, user])
    toast({
      title: "캐릭터가 추가되었습니다.",
    })
    onClose()
  }

  return (
    <>
      {players.length < 4 ? (
        <Button onClick={onOpen} w="100%">
          <AiOutlinePlus />
        </Button>
      ) : (
        ""
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>캐릭터 추가하기</ModalHeader>
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
                <FormLabel>성향</FormLabel>
                <ValuesGroup />
                <FormLabel>종족</FormLabel>
                <Select defaultValue="인간">
                  <option value="option1">인간</option>
                  <option value="option2">구이</option>
                </Select>
                <FormLabel>직업</FormLabel>
                <Select defaultValue="마법사">
                  <option value="dojuck">도적</option>
                  <option value="druid">드루이드</option>
                  <option value="magic">마법사</option>
                  <option value="nyang">사냥꾼</option>
                  <option value="saje">사제</option>
                  <option value="bbubbubbung">성기사</option>
                  <option value="venti">음유시인</option>
                  <option value="die">전사</option>
                </Select>
                <FormLabel>설명</FormLabel>
                <Textarea
                  id="description"
                  placeholder="추가 설명"
                  {...register("description", {
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

export default AddCharacterModal
