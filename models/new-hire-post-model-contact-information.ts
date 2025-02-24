/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHirePostModelContactInformationAddress } from './new-hire-post-model-contact-information-address';
import { NewHirePostModelContactInformationName } from './new-hire-post-model-contact-information-name';

/**
 * Contact information for the new hire
 * @export
 * @interface NewHirePostModelContactInformation
 */
export interface NewHirePostModelContactInformation {
    /**
     * 
     * @type {NewHirePostModelContactInformationName}
     * @memberof NewHirePostModelContactInformation
     */
    'name'?: NewHirePostModelContactInformationName;
    /**
     * Email address of the new hire
     * @type {string}
     * @memberof NewHirePostModelContactInformation
     */
    'emailAddress': string;
    /**
     * Primary phone number of the new hire. maxLength: 50 for hires not in US/Canadian address country. If hire\'s address country is US/Canada, a valid phone format is expected
     * @type {string}
     * @memberof NewHirePostModelContactInformation
     */
    'primaryPhone'?: string;
    /**
     * Secondary phone number of the new hire. maxLength: 50 for hires not in US/Canadian address country. If hire\'s address country is US/Canada, a valid phone format is expected
     * @type {string}
     * @memberof NewHirePostModelContactInformation
     */
    'secondaryPhone'?: string;
    /**
     * 
     * @type {NewHirePostModelContactInformationAddress}
     * @memberof NewHirePostModelContactInformation
     */
    'address'?: NewHirePostModelContactInformationAddress;
}

