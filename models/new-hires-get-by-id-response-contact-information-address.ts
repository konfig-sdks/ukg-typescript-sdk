/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresGetByIdResponseContactInformationAddressCountry } from './new-hires-get-by-id-response-contact-information-address-country';

/**
 * Address of the new hire
 * @export
 * @interface NewHiresGetByIdResponseContactInformationAddress
 */
export interface NewHiresGetByIdResponseContactInformationAddress {
    /**
     * Line 1 of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'line1'?: string;
    /**
     * Line 2 of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'line2'?: string;
    /**
     * City of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'city'?: string;
    /**
     * Zip/postal code of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'postalCode'?: string;
    /**
     * County of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'county'?: string;
    /**
     * State code of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'stateCode'?: string;
    /**
     * Country code of the address
     * @type {string}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'countryCode'?: string;
    /**
     * 
     * @type {NewHiresGetByIdResponseContactInformationAddressCountry}
     * @memberof NewHiresGetByIdResponseContactInformationAddress
     */
    'country'?: NewHiresGetByIdResponseContactInformationAddressCountry;
}

