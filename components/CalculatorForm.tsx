import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const DefaultInputAppearence = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #0D0D2B;
  padding: .5rem 0;
`

const Box = styled.div`
  max-width: 942px;
  border-radius: 1rem;
  background-color: #fff;
  color: #0D0D2B;
  margin: 4rem auto;
  overflow: hidden;
  filter: drop-shadow(0px 20px 200px rgba(57, 23, 119, 0.05));
`

const FormRow = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  background-color: #FBFCFE;
  padding: 3rem;
`

const FormControl = styled.div``
const GrowedFormControl = styled(FormControl)`
  flex-grow: 1;
`
const FormInput = styled.input`
  ${DefaultInputAppearence}
  border-bottom: 1px solid #E0E0E0;
`

const FormSelect = styled.select`
  ${DefaultInputAppearence}
  border-bottom: 1px solid #E0E0E0;
`

const HashRateFormSelect = styled(FormSelect)`
  min-width: 200px;
`

const FormButton = styled(Button)`
  padding: 1rem 2rem;
`

const CalculatorResult = styled.div`
  padding: 3rem;
`
const ResultTitle = styled.span`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #3671E9;
`

const ResultValue = styled.span`
  margin-top: 1rem;
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #0D0D2B;
`

const ETHPrice = styled.span``
const DollarPrice = styled.span`
  color: #3671E9;
`
const ResultNote = styled.small`
  margin-top: .25rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #828282;
`

function CalculatorForm() {
  return (
    <Box>
      <FormRow>
        <GrowedFormControl>
          <FormInput type="text" placeholder="Your Hashrate" />
        </GrowedFormControl>
        <FormControl>
          <HashRateFormSelect>
            <option value="">TH/s</option>
            <option value="">Scrypt</option>
            <option value="">SHA-256</option>
            <option value="">Scrypt</option>
          </HashRateFormSelect>
        </FormControl>
        <FormControl>
          <FormButton>Calculate</FormButton>
        </FormControl>
      </FormRow>
      <CalculatorResult>
        <ResultTitle>ESTIMATED 24 HOUR REVENUE:</ResultTitle>
        <ResultValue>
          <ETHPrice>0.055 130 59 ETH</ETHPrice>{' '}<DollarPrice>($1275)</DollarPrice>
        </ResultValue>
        <ResultNote>
          Revenue will change based on mining difficulty and Ethereum price.
        </ResultNote>
      </CalculatorResult>
    </Box>
  )
}

export default CalculatorForm