import React from "react"
import styled from "styled-components"
import { Box, Text } from "@chakra-ui/react"
import { getModifier } from "../../utils/dungeonWorld"

const StatusLabel = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  /* tailwind/neutral/700 */
  color: #404040;
`

const StatusStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  width: 100%;
`

export enum StatusType {
  Strength, // 근력
  Dexterity, // 민첩
  Intelligence, // 지능
  Wisdom, // 지혜
  Charisma, // 매력
  Constitution, // 건강
}

const StatusColorMap = new Map<StatusType, string>()

StatusColorMap.set(StatusType.Constitution, "#EF4444")
StatusColorMap.set(StatusType.Strength, "#F97316")
StatusColorMap.set(StatusType.Dexterity, "#F59E0B")
StatusColorMap.set(StatusType.Intelligence, "#22C55E")
StatusColorMap.set(StatusType.Wisdom, "#06B6D4")
StatusColorMap.set(StatusType.Charisma, "#D946EF")

const StatusNameMap = new Map<StatusType, string>()

StatusNameMap.set(StatusType.Constitution, "건강")
StatusNameMap.set(StatusType.Strength, "근력")
StatusNameMap.set(StatusType.Dexterity, "민첩")
StatusNameMap.set(StatusType.Intelligence, "지능")
StatusNameMap.set(StatusType.Wisdom, "지혜")
StatusNameMap.set(StatusType.Charisma, "매력")

const StatusTag = styled.div<{ stt: StatusType }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 47px;
  height: 25px;

  /* tailwind/red/500 */
  background: ${({ stt }) => StatusColorMap.get(stt)};
  border-radius: 10px;

  font-weight: 600;
  font-size: 12px;
  color: #fff;
`

const Status: React.FC<{ statusType: StatusType; value: number }> = ({
  statusType,
  value,
}) => {
  return (
    <Box display="flex" flexDir="row" gap="8px" w="120px">
      <StatusTag stt={statusType}>{StatusNameMap.get(statusType)}</StatusTag>
      <Text as="b">{`${value} (${putSignOnNumber(getModifier(value))})`}</Text>
    </Box>
  )
}

const putSignOnNumber = (num: number): string =>
  num < 0 ? `${num}` : `+${num}`

export default Status
