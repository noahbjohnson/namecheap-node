import { NamecheapParams } from './interface'

export class Namecheap {
  private readonly apiUsername: string
  private readonly apiKey: string
  private readonly clientIp: string
  private readonly endpointUrl: string

  constructor (params: NamecheapParams) {
    this.apiUsername = params.apiUser
    this.apiKey = params.apiKey
    this.clientIp = params.clientIp
    this.endpointUrl = `https://api.${params.useSandbox ? 'sandbox.' : ''}namecheap.com/xml.response`
  }
}
