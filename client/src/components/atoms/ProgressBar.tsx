import { StatusType } from "./Status"
import React from "react"
import styled from "styled-components"

const Bar = styled.div`
  height: 5px;
  /* tailwind/stone/300 */
  background: #d6d3d1;
  border-radius: 5px;
`

const InnerBar = styled.div<{ ratio: number, color?: string }>`
  height: 5px;
  width: ${({ ratio }) => ratio * 100}%;
  border-radius: 5px;

  /* tailwind/red/500 */
  background: ${
          ({color}) =>       color || "#ef4444"
  };

  transition: width 0.5s;
`

const ProgressBar: React.FC<{ min: number; max: number; color?: string }> = ({ min, max, color }) => {
  return (
    <Bar>
      <InnerBar ratio={min / max} color={color}/>
    </Bar>
  )
}

export default ProgressBar
