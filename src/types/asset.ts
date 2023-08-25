export enum AssetNativeDenomEnum {
  ukrw = 'ukrw',
  uusd = 'uusd',
  uluna = 'uluna',
  usdr = 'usdr',
  umnt = 'umnt',
}

export enum AssetSymbolEnum {
  Luna = 'Luna',
  UST = 'USTC',
  KRT = 'KRTC',
  SDT = 'SDTC',
  MNT = 'MNTC',
  bETH = 'bETH',
}

export type AssetType = {
  symbol: string
  name: string
  logoURI: string
  terraToken: string
  balance?: string
  disabled?: boolean
}

export type WhiteListType = Record<
  string, // terra tokenAddress
  string // tokenAddress
>

export type BalanceListType = Record<
  string, // tokenAddress
  string // balance
>
