/**
 * Namecheap API Global Parameters
 *
 * For each API call, a set of parameters are required.
 * These parameters include information like APIUser, APIKey, etc., and should be present in all the requests.
 * @link https://www.namecheap.com/support/api/global-parameters/
 */
import { IsDefined, IsIP, IsString, Length } from 'class-validator'

export class GlobalRequestParameters {
  /**
   * Username required to access the API
   */
  @IsDefined()
  @IsString()
  @Length(1, 20)
  ApiUser: string

  /**
   * Password required used to access the API
   */
  @IsDefined()
  @IsString()
  @Length(1, 50)
  ApiKey: string

  /**
   * Command for execution
   */
  @IsDefined()
  @IsString()
  @Length(1, 80)
  Command: string

  /**
   * The Username on which a command is executed.Generally, the values of ApiUser and UserName parameters are the same.
   */
  @IsDefined()
  @IsString()
  @Length(1, 20)
  UserName: string

  /**
   *  An IP address of the server from which our system receives API calls (only IPv4 can be used).
   */
  @IsDefined()
  @IsString()
  @Length(1, 15)
  @IsIP(4)
  ClientIp: string
}
