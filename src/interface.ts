import { IsAlpha, IsBoolean, IsHash, IsIP, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator'

export class NamecheapParams {
  @IsAlpha()
  @IsNotEmpty()
  user: string

  @IsNotEmpty()
  @IsHash('md5')
  key: string

  @IsNotEmpty()
  @IsIP(4)
  ip: string
}

export class NamecheapOptions {
  @IsOptional()
  @IsBoolean()
  useSandbox?: boolean

  @IsOptional()
  @IsBoolean()
  debug?: boolean

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  maximumRetryAttempts?: number

  @IsOptional()
  @IsNumber()
  @Min(.1)
  @Max(60)
  retryDelay?: number
}

// http://developer.namecheap.com/docs/doku.php?id=overview:2.environments
export enum Endpoints {
  SANDBOX = 'https://api.sandbox.namecheap.com/xml.response',
  PRODUCTION = 'https://api.namecheap.com/xml.response'
}
