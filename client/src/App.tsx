import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Status, { StatusType } from "./components/atoms/Status"
import ProgressBar from "./components/atoms/ProgressBar"
import styled from "styled-components"
import UserProfile from "./components/organisms/UserProfile";

const Paper = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  height: 500px;
  padding: 20px;
  gap: 10px;
`

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
  padding-right: 10px;
  gap: 20px;
  width: 500px;
`

const CenterPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 10px;
  padding-left: 10px;
  gap: 20px;
  width: 100%;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 0;
`

const ProfileAddButton = styled.button`
  width: 100%;
  height: 245px;

  cursor: pointer;
  outline: 0;
  color: #fff;

  /* tailwind/stone/500 */
  background-color: #78716c;
  border-color: #0d6efd;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;

  font-weight: 700;
  font-size: 26px;
  border-radius: 20px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #fff;
    background-color: #57534e;
    border-color: #0a58ca;
  }
`

const sampleProfile = {
  name: "홍길동",
  status: {
    constitution: 2,
    strength: 2,
    dexterity: 2,
    intelligence: 2,
    wisdom: 2,
    charisma: 2,
  },
  level: 1
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Body>
      <LeftPanel>
        <ProfileAddButton>프로필 추가</ProfileAddButton>
        <UserProfile profile={sampleProfile}/>
      </LeftPanel>
      <CenterPanel>
        <Paper>
          <Status statusType={StatusType.Strength} value={2} />
          <Status statusType={StatusType.Strength} value={2} />
          <Status statusType={StatusType.Strength} value={2} />
          <Status statusType={StatusType.Strength} value={2} />
          <ProgressBar min={18} max={20} />
        </Paper>
      </CenterPanel>
    </Body>
  )
}

export default App
