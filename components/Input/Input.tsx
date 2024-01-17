import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"

const Input: React.FC<{
  value: any
  onChange: any
  className?: any
  placeholder?: string
  onMax?: any
}> = ({ className, placeholder, value, onChange, onMax }) => {
  return (
    <InputBox>
      <InputInertBox
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
      />
      {onMax ? <span onClick={onMax}>MAX</span> : null}
    </InputBox>
  )
}

const InputInertBox = styled.input`
  padding: 30px 40px;
  outline: none;
  background-color: transparent;

  font-size: 60px;
  font-weight: 600;
  color: #ffffff;
  line-height: 60px;
  border: none;
  flex: 1;
`
const InputBox = styled.div`
  overflow: hidden;
  border-radius: 24px;
  border: 3px solid #6f6f76;
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    cursor: pointer;
    user-select: none;
    font-size: 60px;
    font-weight: 600;
    color: #c2c5c8;
    line-height: 60px;
    margin-right: 30px;
    &:hover{
      color:#F7931A ;
    }
  }
`

export default Input
