import Box from "components/Box"
import styled from "styled-components"

const BoxItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;

  color: #222;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04), 0 3.4px 13.4px rgba(0, 0, 0, 0.06),
    0 15px 60px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`

export default BoxItem
