import { IsAlpha, IsHash, IsIP, IsNotEmpty } from 'class-validator'

export class NamecheapParams {
  @IsAlpha()
  @IsNotEmpty()
  apiUser: string

  @IsNotEmpty()
  @IsHash('md5')
  apiKey: string

  @IsNotEmpty()
  @IsIP(4)
  clientIp: string

  useSandbox?: boolean
}
