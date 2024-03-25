import { objectToUrlParams } from "@/utils"
import Ajax from "./Ajax"

export const fetchDashboardApi = () => {
  return Ajax.get("/projectInfo/dashboard")
}
export const fetchOrderlistIsRepeated =(params:any)=>{
  return Ajax.post('/orderlist/isRepeated',params)
}
export const fetchProjectInfoSelectInfoApi = (params: any) => {
  const query_params = objectToUrlParams(params)
  return Ajax.get(`/projectInfo/selectInfo?status=1&${query_params}`)
}
export const fetchProjectInfoApi = (params: any) => {
  const query_params = objectToUrlParams(params)
  return Ajax.get(`/projectInfo/launchById?${query_params}`)
}
export const fetchWhtielistInfoApi = (params: any) => {
  const query_params = objectToUrlParams(params)
  // http://101.251.211.205:8066/whtielist/launchById
  return Ajax.get(`/whtielist/launchById?${query_params}`)
}
export const fetchProjectDetailsApi = (id: any) => {
  return Ajax.get(`/projectDetails/${id}`)
}

export const submitOderListSave = (params: any) => {
  return Ajax.post("/orderlist/oderListSave/", params)
}
export const fetchSelectFaddress = (params: any) => {
  const query_params = objectToUrlParams(params)
  return Ajax.get(`/orderlist/selectFaddress?${query_params}`)
}
//http://localhost:8066/whtielist/queryByWhitelist
// export const queryByWhitelist
export const fetchQueryByWhitelist = (params: any) => {
  const query_params = objectToUrlParams(params)
  return Ajax.get(`/whtielist/queryByWhitelist?${query_params}`)
}

export const fetchOrderCList = (params: any) => {
  const query_params = objectToUrlParams(params)
  return Ajax.get(`/orderlist/selectCOrder?${query_params}`)
}


export const fetchFeesApi = () => {
  return Ajax.get(`/mempool/fees/recommended`)
}

// 使用快速排序对数组进行排序 从大到小
export const quickSort = (arr: any) => {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// 计算两个数之和 
export const add = (arg1: number, arg2: number): number => {
    const decimalPlaces1 = arg1.toString().includes('.') ? arg1.toString().split('.')[1].length : 0;
    const decimalPlaces2 = arg2.toString().includes('.') ? arg2.toString().split('.')[1].length : 0;
    
    const factor = Math.pow(10, Math.max(decimalPlaces1, decimalPlaces2));
    
    return (arg1 * factor + arg2 * factor) / factor;
}