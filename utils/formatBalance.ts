import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber, FixedNumber,parseFixed } from '@ethersproject/bignumber'
import { formatUnits, parseUnits } from '@ethersproject/units'
// import { getLanguageCodeFromLS } from '@pancakeswap/localization'
// import { getFullDecimalMultiplier } from '@pancakeswap/utils/getFullDecimalMultiplier'
import _trimEnd from 'lodash/trimEnd'
export const parseFixedAmount=(amount:any,decimals:any)=>{
  return parseUnits(String(amount),String(decimals))
}
export const formatUnitsAmount=(amount:any,decimals:any)=>{
  return formatUnits(amount,decimals)
}
/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount: BigNumber, decimals = 18) => {
  // return new BigNumber(amount).times(getFullDecimalMultiplier(decimals))
}

export const getBalanceAmount = (amount: any, decimals = 18) => {
  return new BigNumber(amount).dividedBy(decimals)
}

/**
 * This function is not really necessary but is used throughout the site.
 */
export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toNumber()
}

export const getFullDisplayBalance = (balance: any, decimals = 18, displayDecimals?: number): any => {
  if(!balance){
    return undefined
  }
  const [str1,str2] = formatUnits(balance,decimals).split('.')
  const stringNumber = [str1,displayDecimals ? str2.slice(0,displayDecimals) : str2].join('.')
  return displayDecimals ? _trimEnd(_trimEnd(stringNumber, '0'), '.') : stringNumber
}

export const getEstimateGasBalance = (balance: any, decimals = 18, displayDecimals: number = 13): any => {
  if(!balance){
    return undefined
  }
  const [str1,str2] = formatUnits(balance,decimals).split('.')
  const stringNumber = [str1,displayDecimals ? str2.slice(0,displayDecimals) : str2].join('.')
  return displayDecimals ? _trimEnd(_trimEnd(stringNumber, '0'), '.') : stringNumber
}

/**
 * Don't use the result to convert back to number.
 * It uses undefined locale which uses host language as a result.
 * Languages have different decimal separators which results in inconsistency when converting back this result to number.
 */
export const formatNumber = (number: number, minPrecision = 2, maxPrecision = 2) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return number.toLocaleString(undefined, options)
}

/**
 * Method to format the display of wei given an EthersBigNumber object
 * Note: does NOT round
 */
export const formatBigNumber = (number: EthersBigNumber, displayDecimals = 18, decimals = 18) => {
  const remainder = number.mod(EthersBigNumber.from(10).pow(decimals - displayDecimals))
  return formatUnits(number.sub(remainder), decimals)
}

/**
 * Method to format the display of wei given an EthersBigNumber object with toFixed
 * Note: rounds
 */
export const formatBigNumberToFixed = (number: EthersBigNumber, displayDecimals = 18, decimals = 18) => {
  const formattedString = formatUnits(number, decimals)
  return (+formattedString).toFixed(displayDecimals)
}

/**
 * Formats a FixedNumber like BigNumber
 * i.e. Formats 9763410526137450427.1196 into 9.763 (3 display decimals)
 */
export const formatFixedNumber = (number: FixedNumber, displayDecimals = 18, decimals = 18) => {
  // Remove decimal
  const [leftSide] = number.toString().split('.')
  
  return formatBigNumber(EthersBigNumber.from(leftSide), displayDecimals, decimals)
}

export const formatLocalisedCompactNumber = (number: number): string | undefined => {
  // const codeFromStorage = getLanguageCodeFromLS()

  const isClient = typeof window === 'object'
  const isSupported = window?.Intl

  // For clients do not support Intl, just return number
  if (isClient && !isSupported) {
    return `${number}`
  }

  // return new Intl.NumberFormat(codeFromStorage, {
  //   notation: 'compact',
  //   compactDisplay: 'long',
  //   maximumSignificantDigits: 2,
  // }).format(number)
}

export default formatLocalisedCompactNumber

export const formatLpBalance = (balance: BigNumber, decimals: number) => {
  // const stakedBalanceBigNumber = getBalanceAmount(balance, decimals)
  // if (stakedBalanceBigNumber.gt(0) && stakedBalanceBigNumber.lt(0.00001)) {
  //   return '< 0.00001'
  // }
  // return stakedBalanceBigNumber.toFixed(5, BigNumber.ROUND_DOWN)
}
