import { GlobalRequestParameters } from './global'
import {
  IsCurrency,
  IsDefined, IsEmail,
  IsIn, IsIP,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  ValidateIf
} from 'class-validator'

export class DomainsGetListParameters extends GlobalRequestParameters {

  /**
   * Possible values are ALL, EXPIRING, or EXPIRED
   * @default ALL
   */
  @IsOptional()
  @IsIn(['ALL', 'EXPIRING', 'EXPIRED'])
  ListType?: 'ALL' | 'EXPIRING' | 'EXPIRED'

  /**
   *  Keyword to look for in the domain list
   */
  @IsOptional()
  @IsString()
  @MaxLength(70)
  SearchTerm?: string

  /**
   * Page to return
   * @default 1
   */
  @IsOptional()
  @IsNumber()
  @MaxLength(10)
  Page?: number

  /**
   * Number of domains to be listed on a page. Minimum value is 10, and maximum value is 100.
   * @default 20
   */
  @IsOptional()
  @IsNumber()
  @Min(10)
  @Max(100)
  PageSize?: number

  @IsOptional()
  @IsIn(['NAME', 'NAME_DESC', 'EXPIREDATE', 'EXPIREDATE_DESC', 'CREATEDATE', 'CREATEDATE_DESC'])
  SortB?: 'NAME' | 'NAME_DESC' | 'EXPIREDATE' | 'EXPIREDATE_DESC' | 'CREATEDATE' | 'CREATEDATE_DESC'
}

export class DomainsGetContactsParams extends GlobalRequestParameters {

  /**
   * Domain to get contacts
   */
  @IsDefined()
  @IsString()
  @MaxLength(70)
  DomainName: string
}

export class DomainsCreateParams extends GlobalRequestParameters {

  /**
   * Domain name to register
   **/
  @IsDefined()
  @MaxLength(70)
  DomainName: string

  /**
   * Number of years to register Default Value: 2
   **/
  @IsDefined()
  @MaxLength(2)
  Years: number

  /**
   * Promotional (coupon) code for the domain
   **/
  @IsOptional()
  @MaxLength(20)
  PromotionCode?: string

  /**
   * Organization of the Registrant user
   **/
  @IsOptional()
  @MaxLength(255)
  RegistrantOrganizationName?: string

  /**
   * Job title of the Registrant user
   **/
  @IsOptional()
  @MaxLength(255)
  RegistrantJobTitle?: string

  /**
   * First name of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantFirstName: string

  /**
   * Second name of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantLastName: string

  /**
   * Address1 of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantAddress1: string

  /**
   * Address2 of the Registrant user
   **/
  @IsOptional()
  @MaxLength(255)
  RegistrantAddress2?: string

  /**
   * City of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantCity: string

  /**
   * State/Province of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantStateProvince: string

  /**
   * StateProvinceChoice of the Registrant user
   **/
  @IsOptional()
  @MaxLength(50)
  RegistrantStateProvinceChoice?: string

  /**
   * PostalCode of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantPostalCode: string

  /**
   * Country of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantPhone: string

  /**
   * PhoneExt of the Registrant user
   **/
  @IsOptional()
  @MaxLength(50)
  RegistrantPhoneExt: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  RegistrantFax?: string

  /**
   * Email address of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantEmailAddress: string

  /**
   * Organization of the Tech user
   **/
  @IsOptional()
  @MaxLength(255)
  TechOrganizationName?: string

  /**
   * Job title of the Tech user
   **/
  @IsOptional()
  @MaxLength(255)
  TechJobTitle?: string

  /**
   * First name of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechFirstName: string

  /**
   * Second name of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechLastName: string

  /**
   * Address1 of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechAddress1: string

  /**
   * Address2 of the Tech user
   **/
  @IsOptional()
  @MaxLength(255)
  TechAddress2?: string

  /**
   * City of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechCity: string

  /**
   * State/Province of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechStateProvince: string

  /**
   * StateProvinceChoice of the Tech user
   **/
  @IsOptional()
  @MaxLength(50)
  TechStateProvinceChoice?: string

  /**
   * PostalCode of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechPostalCode: string

  /**
   * Country of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  TechPhone: string

  /**
   * PhoneExt of the Tech user
   **/
  @IsOptional()
  @MaxLength(50)
  TechPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  TechFax?: string

  /**
   * Email address of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechEmailAddress: string

  /**
   * Organization of the Admin user
   **/
  @IsOptional()
  @MaxLength(255)
  AdminOrganizationName?: string

  /**
   * Job title of the Admin user
   **/
  @IsOptional()
  @MaxLength(255)
  AdminJobTitle?: string

  /**
   * First name of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminFirstName: string

  /**
   * Second name of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminLastName: string

  /**
   * Address1 of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminAddress1: string

  /**
   * Address2 of the Admin user
   **/
  @IsOptional()
  @MaxLength(255)
  AdminAddress2?: string

  /**
   * City of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminCity: string

  /**
   * State/Province of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminStateProvince: string

  /**
   * StateProvinceChoice of the Admin user
   **/
  @IsOptional()
  @MaxLength(50)
  AdminStateProvinceChoice?: string

  /**
   * PostalCode of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminPostalCode: string

  /**
   * Country of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  AdminPhone: string

  /**
   * PhoneExt of the Admin user
   **/
  @IsOptional()
  @MaxLength(50)
  AdminPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  AdminFax?: string

  /**
   * Email address of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminEmailAddress: string

  /**
   * Organization of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(255)
  AuxBillingOrganizationName?: string

  /**
   * Job title of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(255)
  AuxBillingJobTitle?: string

  /**
   * First name of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingFirstName: string

  /**
   * Second name of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingLastName: string

  /**
   * Address1 of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingAddress1: string

  /**
   * Address2 of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(255)
  AuxBillingAddress2?: string

  /**
   * City of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingCity: string

  /**
   * State/Province of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingStateProvince: string

  /**
   * StateProvinceChoice of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(50)
  AuxBillingStateProvinceChoice?: string

  /**
   * PostalCode of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingPostalCode: string

  /**
   * Country of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingPhone: string

  /**
   * PhoneExt of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(50)
  AuxBillingPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  AuxBillingFax?: string

  /**
   * Email address of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingEmailAddress: string

  /**
   * First name of the Billing user
   **/
  @IsOptional()
  @MaxLength(255)
  BillingFirstName?: string

  /**
   * Second name of the Billing user
   **/
  @IsOptional()
  @MaxLength(255)
  BillingLastName?: string

  /**
   * Address1 of the Billing user
   **/
  @IsOptional()
  @MaxLength(255)
  BillingAddress1?: string

  /**
   * Address2 of the Billing user
   **/
  @IsOptional()
  @MaxLength(255)
  BillingAddress2?: string

  /**
   * City of the Billing user
   **/
  @IsOptional()
  @MaxLength(50)
  BillingCity?: string

  /**
   * State/Province of the Billing user
   **/
  @IsOptional()
  @MaxLength(50)
  BillingStateProvince?: string

  /**
   * StateProvinceChoice of the Billing user
   **/
  @IsOptional()
  @MaxLength(50)
  BillingStateProvinceChoice?: string

  /**
   * PostalCode of the Billing user
   **/
  @IsOptional()
  @MaxLength(50)
  BillingPostalCode?: string

  /**
   * Country of the Billing user
   **/
  @IsOptional()
  @MaxLength(50)
  BillingCountry?: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  BillingPhone?: string

  /**
   * PhoneExt of the Billing user
   **/
  @IsOptional()
  @MaxLength(50)
  BillingPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  BillingFax?: string

  /**
   * Email address of the Billing user
   **/
  @IsOptional()
  @MaxLength(255)
  BillingEmailAddress?: string

  /**
   * Code of Internationalized Domain Name (please refer to the note below)
   **/
  @IsOptional()
  @MaxLength(100)
  @IsIn(['afr', 'alb', 'ara', 'arg', 'arm', 'asm', 'ast', 'ave', 'awa', 'aze', 'bak', 'bal', 'ban',
    'baq', 'bas', 'bel', 'ben', 'bho', 'bos', 'bul', 'bur', 'car', 'cat', 'che', 'chi', 'chv', 'cop', 'cos', 'cze',
    'dan', 'div', 'doi', 'dut', 'eng', 'est', 'fao', 'fij', 'fin', 'fre', 'fry', 'geo', 'ger', 'gla', 'gle', 'gon',
    'gre', 'guj', 'heb', 'hin', 'hun', 'inc', 'ind', 'inh', 'isl', 'ita', 'jav', 'jpn', 'kas', 'kaz', 'khm', 'kir',
    'kor', 'kur', 'lao', 'lav', 'lit', 'ltz', 'mal', 'mkd', 'mlt', 'mol', 'mon', 'mri', 'msa', 'nep', 'nor', 'ori',
    'oss', 'pan', 'per', 'pol', 'por', 'pus', 'raj', 'rum', 'rus', 'san', 'scr', 'sin', 'slo', 'slv', 'smo', 'snd',
    'som', 'spa', 'srd', 'srp', 'swa', 'swe', 'syr', 'tam', 'tel', 'tgk', 'tha', 'tib', 'tur', 'ukr', 'urd', 'uzb',
    'vie', 'wel', 'yid'])
  IdnCode?: string

  /**
   * Required for .us, .eu, .ca, .co.uk, .org.uk, .me.uk, .nu , .com.au, .net.au, .org.au, .es, .nom.es, .com.es, .org.es, .de, .fr TLDs only
   **/
  @ValidateIf((object => ['.us', '.eu', '.ca', '.co.uk', '.org.uk',
    '.me.uk', '.nu', '.com.au', '.net.au', '.org.au',
    '.es', '.nom.es', '.com.es', '.org.es', '.de', '.fr']
    .map((end) => object.DomainName.toString().endsWith(end)).includes(true)))
  ExtendedAttributes?: string

  /**
   * Comma-separated list of custom nameservers to be associated with the domain name
   **/
  @IsOptional()
  Nameservers?: string

  /**
   * Adds free WhoisGuard for the domain Default Value: no
   **/
  @IsOptional()
  @IsIn(['yes', 'no'])
  AddFreeWhoisguard?: 'yes' | 'no'

  /**
   * Enables free WhoisGuard for the domain Default Value: no
   **/
  @IsOptional()
  @IsIn(['yes', 'no'])
  WGEnabled?: 'yes' | 'no'

  /**
   * Indication if the domain name is premium
   **/
  @IsOptional()
  @MaxLength(10)
  IsPremiumDomain?: boolean

  /**
   * Registration price for the premium domain
   **/
  @IsOptional()
  @MaxLength(20)
  @IsCurrency()
  PremiumPrice?: string

  /**
   * Purchase fee for the premium domain during Early Access Program (EAP)*
   **/
  @IsOptional()
  @MaxLength(20)
  @IsCurrency()
  EapFee?: string
}

export class DomainsSetContactsParams extends GlobalRequestParameters {
  /**
   * Domain name to update
   **/
  @IsDefined()
  @MaxLength(70)
  DomainName: string

  /**
   * Organization of the Registrant user
   **/
  @IsOptional()
  @MaxLength(255)
  RegistrantOrganizationName?: string

  /**
   * Job title of the Registrant user
   **/
  @IsOptional()
  @MaxLength(255)
  RegistrantJobTitle?: string

  /**
   * First name of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantFirstName: string

  /**
   * Second name of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantLastName: string

  /**
   * Address1 of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantAddress1: string

  /**
   * Address2 of the Registrant user
   **/
  @IsOptional()
  @MaxLength(255)
  RegistrantAddress2?: string

  /**
   * City of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantCity: string

  /**
   * State/Province of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantStateProvince: string

  /**
   * StateProvinceChoice of the Registrant user
   **/
  @IsOptional()
  @MaxLength(50)
  RegistrantStateProvinceChoice?: string

  /**
   * PostalCode of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantPostalCode: string

  /**
   * Country of the Registrant user
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  RegistrantPhone: string

  /**
   * PhoneExt of the Registrant user
   **/
  @IsOptional()
  @MaxLength(50)
  RegistrantPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  RegistrantFax?: string

  /**
   * Email address of the Registrant user
   **/
  @IsDefined()
  @MaxLength(255)
  RegistrantEmailAddress: string

  /**
   * Organization of the Tech user
   **/
  @IsOptional()
  @MaxLength(255)
  TechOrganizationName?: string

  /**
   * Job title of the Tech user
   **/
  @IsOptional()
  @MaxLength(255)
  TechJobTitle?: string

  /**
   * First name of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechFirstName: string

  /**
   * Second name of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechLastName: string

  /**
   * Address1 of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechAddress1: string

  /**
   * Address2 of the Tech user
   **/
  @IsOptional()
  @MaxLength(255)
  TechAddress2?: string

  /**
   * City of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechCity: string

  /**
   * State/Province of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechStateProvince: string

  /**
   * StateProvinceChoice of the Tech user
   **/
  @IsOptional()
  @MaxLength(50)
  TechStateProvinceChoice?: string

  /**
   * PostalCode of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechPostalCode: string

  /**
   * Country of the Tech user
   **/
  @IsDefined()
  @MaxLength(50)
  TechCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  TechPhone: string

  /**
   * PhoneExt of the Tech user
   **/
  @IsOptional()
  @MaxLength(50)
  TechPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  TechFax?: string

  /**
   * Email address of the Tech user
   **/
  @IsDefined()
  @MaxLength(255)
  TechEmailAddress: string

  /**
   * Organization of the Admin user
   **/
  @IsOptional()
  @MaxLength(255)
  AdminOrganizationName?: string

  /**
   * Job title of the Admin user
   **/
  @IsOptional()
  @MaxLength(255)
  AdminJobTitle?: string

  /**
   * First name of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminFirstName: string

  /**
   * Second name of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminLastName: string

  /**
   * Address1 of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminAddress1: string

  /**
   * Address2 of the Admin user
   **/
  @IsOptional()
  @MaxLength(255)
  AdminAddress2?: string

  /**
   * City of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminCity: string

  /**
   * State/Province of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminStateProvince: string

  /**
   * StateProvinceChoice of the Admin user
   **/
  @IsOptional()
  @MaxLength(50)
  AdminStateProvinceChoice?: string

  /**
   * PostalCode of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminPostalCode: string

  /**
   * Country of the Admin user
   **/
  @IsDefined()
  @MaxLength(50)
  AdminCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  AdminPhone: string

  /**
   * PhoneExt of the Admin user
   **/
  @IsOptional()
  @MaxLength(50)
  AdminPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  AdminFax?: string

  /**
   * Email address of the Admin user
   **/
  @IsDefined()
  @MaxLength(255)
  AdminEmailAddress: string

  /**
   * Organization of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(255)
  AuxBillingOrganizationName?: string

  /**
   * Job title of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(255)
  AuxBillingJobTitle?: string

  /**
   * First name of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingFirstName: string

  /**
   * Second name of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingLastName: string

  /**
   * Address1 of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingAddress1: string

  /**
   * Address2 of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(255)
  AuxBillingAddress2?: string

  /**
   * City of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingCity: string

  /**
   * State/Province of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingStateProvince: string

  /**
   * StateProvinceChoice of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(50)
  AuxBillingStateProvinceChoice?: string

  /**
   * PostalCode of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingPostalCode: string

  /**
   * Country of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingCountry: string

  /**
   * Phone number in the format +NNN.NNNNNNNNNN
   **/
  @IsDefined()
  @MaxLength(50)
  AuxBillingPhone: string

  /**
   * PhoneExt of the AuxBilling user
   **/
  @IsOptional()
  @MaxLength(50)
  AuxBillingPhoneExt?: string

  /**
   * Fax number in the format +NNN.NNNNNNNNNN
   **/
  @IsOptional()
  @MaxLength(50)
  AuxBillingFax?: string

  /**
   * Email address of the AuxBilling user
   **/
  @IsDefined()
  @MaxLength(255)
  AuxBillingEmailAddress: string

  /**
   * Required for .us, .eu, .ca, .co.uk, .org.uk, .me.uk, .nu , .com.au, .net.au, .org.au, .es, .nom.es, .com.es, .org.es, .de, .fr TLDs only
   **/
  @ValidateIf((object => ['.us', '.eu', '.ca', '.co.uk', '.org.uk',
    '.me.uk', '.nu', '.com.au', '.net.au', '.org.au',
    '.es', '.nom.es', '.com.es', '.org.es', '.de', '.fr']
    .map((end) => object.DomainName.toString().endsWith(end)).includes(true)))
  ExtendedAttributes?: string
}

export class DomainsCheckParams extends GlobalRequestParameters {
  @IsUrl()
  DomainList: string[]
}

export class DomainsReactivateParams extends GlobalRequestParameters {
  /**
   * Domain name to reactivate
   */
  @IsDefined()
  @MaxLength(70)
  DomainName: string

  /**
   * Promotional (coupon) code for reactivating the domain
   */
  @IsOptional()
  @MaxLength(70)
  PromotionCode?: string

  /**
   * Number of years after expiry
   */
  @IsOptional()
  @MaxLength(2)
  YearsToAdd?: number

  /**
   * Indication if the domain name is premium
   */
  @IsOptional()
  IsPremiumDomain?: boolean

  /**
   *  Reactivation price for the premium domain
   */
  @IsOptional()
  @IsCurrency()
  PremiumPrice?: string
}

export class DomainsRenewParams extends GlobalRequestParameters {
  /**
   * Domain name to reactivate
   */
  @IsDefined()
  @MaxLength(70)
  DomainName: string

  /**
   * Number of years after expiry
   */
  @IsOptional()
  @MaxLength(2)
  Years: number

  /**
   * Promotional (coupon) code for reactivating the domain
   */
  @IsOptional()
  @MaxLength(70)
  PromotionCode?: string

  /**
   * Indication if the domain name is premium
   */
  @IsOptional()
  IsPremiumDomain?: boolean

  /**
   *  Reactivation price for the premium domain
   */
  @IsOptional()
  @IsCurrency()
  PremiumPrice?: string
}

export class DomainsGetRegistrarLockParams extends GlobalRequestParameters {
  @IsUrl()
  @MaxLength(70)
  DomainName: string
}

export class DomainsSetRegistrarLockParams extends GlobalRequestParameters {
  @IsUrl()
  @MaxLength(70)
  DomainName: string

  /**
   * Possible values: LOCK, UNLOCK.
   * @default: LOCK.
   */
  @IsOptional()
  @MaxLength(70)
  LockAction?: 'LOCK' | 'UNLOCK'
}

export class DomainsGetInfoParams extends GlobalRequestParameters {
  @IsUrl()
  @MaxLength(70)
  DomainName: string

  @IsOptional()
  @MaxLength(255)
  HostName?: string
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/set-default/
 */
export class DomainsDnsSetDefaultParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  TLD: string
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/set-custom/
 */
export class DomainsDnsSetCustomParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  TLD: string

  /**
   * A comma-separated list of name servers to be associated with this domain
   */
  @MaxLength(1200)
  Nameservers: string
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/get-list/
 */
export class DomainsDnsGetListParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  TLD: string
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/get-hosts/
 */
export class DomainsDnsGetHostsParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  TLD: string
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/get-email-forwarding/
 */
export class DomainsDnsGetEmailForwardingParams extends GlobalRequestParameters {
  @IsUrl()
  @MaxLength(70)
  DomainName: string
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/set-email-forwarding/
 */
export class DomainsDnsSetEmailForwardingParams extends GlobalRequestParameters {
  @IsUrl()
  @MaxLength(70)
  DomainName: string

  @IsEmail()
  MailBox1: string

  @IsEmail()
  ForwardTo1: string

  // REPEATED
}

/**
 * @link https://www.namecheap.com/support/api/methods/domains-dns/set-hosts/
 */
export class DomainsDnsSetHostsParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  TLD: string

  // REPEATED
}

export class DomainsNsCreateParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  @IsString()
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  @IsString()
  TLD: string

  /**
   * Nameserver to create
   */
  @MaxLength(150)
  @IsString()
  Nameserver: string

  /**
   * Nameserver IP address
   */
  @MaxLength(15)
  @IsIP(4)
  IP: string
}

export class DomainsNsDeleteParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  @IsString()
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  @IsString()
  TLD: string

  /**
   * Nameserver to create
   */
  @MaxLength(150)
  @IsString()
  Nameserver: string
}

export class DomainsNsGetInfoParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  @IsString()
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  @IsString()
  TLD: string

  /**
   * Nameserver to create
   */
  @MaxLength(150)
  @IsString()
  Nameserver: string
}


export class DomainsNsUpdateParams extends GlobalRequestParameters {
  /**
   * SLD of the DomainName
   */
  @MaxLength(70)
  @IsString()
  SLD: string

  /**
   * TLD of the DomainName
   */
  @MaxLength(10)
  @IsString()
  TLD: string

  /**
   * Nameserver to create
   */
  @MaxLength(150)
  @IsString()
  Nameserver: string

  /**
   * Old Nameserver IP address
   */
  @MaxLength(15)
  @IsIP(4)
  OldIP: string

  /**
   * New Nameserver IP address
   */
  @MaxLength(15)
  @IsIP(4)
  IP: string
}

// TODO: domains.transfer
// https://www.namecheap.com/support/api/methods/domains-transfer/
