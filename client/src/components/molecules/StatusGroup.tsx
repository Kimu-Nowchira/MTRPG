import Status, {StatusType} from "../atoms/Status"
import React from "react"
import styled from "styled-components"

export interface UserStatus {
  constitution: number
  strength: number
  dexterity: number
  intelligence: number
  wisdom: number
  charisma: number
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const StatusGroup: React.FC<{ statusData: UserStatus }> = ({ statusData }) => {
  return (<Column>
    <Row>
      <Status statusType={StatusType.Constitution} value={statusData.constitution}/>
      <Status statusType={StatusType.Strength} value={statusData.strength}/>
    </Row>
    <Row>
      <Status statusType={StatusType.Dexterity} value={statusData.dexterity}/>
      <Status statusType={StatusType.Intelligence} value={statusData.intelligence}/>
    </Row>
    <Row>
      <Status statusType={StatusType.Wisdom} value={statusData.wisdom}/>
      <Status statusType={StatusType.Charisma} value={statusData.charisma}/>
    </Row>
    </Column>)
}

export default StatusGroup
