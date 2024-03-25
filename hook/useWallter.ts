export default (type:any) => {
  const unisatwallet = (window as any).unisat
  const okxwallet = (window as any)?.okxwallet?.bitcoin
  const OKX = {
    name: "OKX",
    wallter: okxwallet,
    installed: !!okxwallet,
  }
  const UNISAT = {
    name: "UniSat",
    wallter: unisatwallet,
    installed: !!unisatwallet,
  }
  const wallters = [
    OKX,
    UNISAT
  ].sort((a,b)=>a.installed === true ? -1: 0)
  const wallter = wallters.find(wallter=>{
    return wallter.name.toLocaleLowerCase() === type
  })
  return {
    ...wallter,
    wallters
  }
}
