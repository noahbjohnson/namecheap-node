import { Endpoints, NamecheapOptions, NamecheapParams } from './interface'
import { validateSync } from 'class-validator'

/**
 * To use:
 # 1) browse to http://www.sandbox.namecheap.com/
 # 2) create account, my account > manage profile > api access > enable API
 # 3) add your IP address to whitelist
 */
export class Namecheap {
  private readonly apiUsername: string
  private readonly apiKey: string
  private readonly clientIp: string
  private readonly endpointUrl: string = Endpoints.PRODUCTION
  private readonly debug: boolean = false
  private readonly maximumRetryAttempts: number = 1
  private readonly retryDelay: number = .1

  constructor (params: NamecheapParams, options: NamecheapOptions) {
    validateSync(params)
    this.apiUsername = params.user
    this.apiKey = params.key
    this.clientIp = params.ip

    if (options) {
      if (!!options.useSandbox) this.endpointUrl = Endpoints.SANDBOX
      this.debug = !!options.debug
      if (options.maximumRetryAttempts) this.maximumRetryAttempts = options.maximumRetryAttempts
      if (options.retryDelay) this.retryDelay = options.retryDelay
    }
  }

}
