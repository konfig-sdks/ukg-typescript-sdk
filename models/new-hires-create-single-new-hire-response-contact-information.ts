/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireResponseContactInformationAddress } from './new-hires-create-single-new-hire-response-contact-information-address';
import { NewHiresCreateSingleNewHireResponseContactInformationName } from './new-hires-create-single-new-hire-response-contact-information-name';

/**
 * Contact information of the new hire
 * @export
 * @interface NewHiresCreateSingleNewHireResponseContactInformation
 */
export interface NewHiresCreateSingleNewHireResponseContactInformation {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseContactInformationName}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformation
     */
    'name'?: NewHiresCreateSingleNewHireResponseContactInformationName;
    /**
     * Email address of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformation
     */
    'emailAddress'?: string;
    /**
     * Primary phone number of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformation
     */
    'primaryPhone'?: string;
    /**
     * Secondary phone number of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformation
     */
    'secondaryPhone'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseContactInformationAddress}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformation
     */
    'address'?: NewHiresCreateSingleNewHireResponseContactInformationAddress;
}

