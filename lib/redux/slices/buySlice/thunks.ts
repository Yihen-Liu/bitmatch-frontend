import { addToast, buySlice, selectWallter, toastSlice } from "@/lib/redux"
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk"
import { submitOderListSave } from "@/api/api"
import useWallter from "@/hook/useWallter"
import refreshConfig from "@/utils/config"

type BuySubmitProps = {
  projectname: string
  type: any
  tokenname: any
  fromaddr: any
  fundaddr: any
  stage: any
  receivedAddr: any
  transmitAddr: any
  pid: any
  buyAmount: any
  price: any
  toAddress: any
  satoshis: any
  callback: any
  amount: any
  txHash?: any
  moveLoading?:any
  reload: any
}

export const buySubmitAsync = createAppAsyncThunk(
  "buy/submit",
  async (params: BuySubmitProps, { dispatch,getState }) => {
    const { wallterType } = selectWallter(getState())
    const code = await params.reload()
    if(code !== 0){
      throw new Error('error')
    }
    const {wallter} = useWallter(wallterType)
    const txHash = await wallter.sendBitcoin(
      params.fundaddr,
      Number(params.amount)
    )
    params.moveLoading()
    params.txHash = txHash
    params.callback(txHash)
    send_order(params,dispatch)
    return {pid:params.pid}
  }
)

export const send_order = async (params: any,dispatch:any) => {
  try {
    await submitOderListSave(params)
    dispatch(buySlice.actions.setRefresh({num:1000}))
    dispatch(
      addToast({
        // second: 0,
        icon: "warning",
        contxt: "Pending...",
      })
    )
    setTimeout(() => {
      dispatch(buySlice.actions.setRefresh({num:0}))
    }, 5000);
   
  } catch (e) {
    setTimeout(() => {
      send_order(params, dispatch)
    }, 5000)
  }
}
