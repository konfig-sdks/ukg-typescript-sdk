/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface EmpPersonDetails
 */
export interface EmpPersonDetails {
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'additionalName1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'additionalName2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'addressIsOnTaxBoundary'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EmpPersonDetails
     */
    'addressLatitude'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'cobraExport'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'cobraIsActive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'cobraReason'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'cobraStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'cobraStatusDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'communityBroadcastSmsCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'consentElectronicW2'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'consentElectronicw2pr'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'dateDeceased'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'dateOfCobraEvent'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'dateOfCobraExport'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'dateOfCobraLetter'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'dateOfI9Expiration'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'datetimeChanged'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'datetimeCreated'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'disabilityType'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'ethnicDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'formerName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'healthBloodType'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'healthEyes'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'healthHair'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'healthHeightFeet'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'healthHeightInches'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'healthLastDonateDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpPersonDetails
     */
    'healthWeight'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9AlienNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9DocA'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9DocB'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9DocC'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'i9Verified'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9VisaType'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9WorkAuth'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'isDisabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'isMultiPayGroup'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'isSmoker'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'militaryService'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryBranchServed'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryEra'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryIsDisabledVet'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryIsOthEligVet'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryIsOthEligVetBasis'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryIsActiveWartimeVet'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nameFormer'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'previousSSN'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'originCountry'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'originLocation'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'w2IsDeceased'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'cobraNotes'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressSms'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militarySeparationDate'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'homePhoneIsPrivate'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'smsApprovals'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'smsPayNotification'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'i9VisaExpirationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'militaryIsMedalVet'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'lastNameNotSameAsSSCard'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'chkCashingInstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nationality1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nationality2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nationality3'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'personId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'employeeId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'companyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'userName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'middleName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'preferredName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'namePrefixCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nameSufixCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'emailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'emailAddressAlternate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'homePhone'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'homePhoneCountry'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressLine1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressLine2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressCity'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressState'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressZipCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressCountry'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'addressCounty'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nationalId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'nationalIdCountry'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'ethnicIDCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'maritalStatusCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpPersonDetails
     */
    'ssn'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpPersonDetails
     */
    'ssnIsSuppressed'?: boolean;
}

