/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireRequestContactInformationAddress } from './new-hires-create-single-new-hire-request-contact-information-address';
import { NewHiresCreateSingleNewHireRequestContactInformationName } from './new-hires-create-single-new-hire-request-contact-information-name';

/**
 * Contact information for the new hire
 * @export
 * @interface NewHiresCreateSingleNewHireRequestContactInformation
 */
export interface NewHiresCreateSingleNewHireRequestContactInformation {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireRequestContactInformationName}
     * @memberof NewHiresCreateSingleNewHireRequestContactInformation
     */
    'name'?: NewHiresCreateSingleNewHireRequestContactInformationName;
    /**
     * Email address of the new hire
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequestContactInformation
     */
    'emailAddress': string;
    /**
     * Primary phone number of the new hire. maxLength: 50 for hires not in US/Canadian address country. If hire\'s address country is US/Canada, a valid phone format is expected
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequestContactInformation
     */
    'primaryPhone'?: string;
    /**
     * Secondary phone number of the new hire. maxLength: 50 for hires not in US/Canadian address country. If hire\'s address country is US/Canada, a valid phone format is expected
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequestContactInformation
     */
    'secondaryPhone'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireRequestContactInformationAddress}
     * @memberof NewHiresCreateSingleNewHireRequestContactInformation
     */
    'address'?: NewHiresCreateSingleNewHireRequestContactInformationAddress;
}

