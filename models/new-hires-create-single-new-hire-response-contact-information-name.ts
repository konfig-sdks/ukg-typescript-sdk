/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireResponseContactInformationNamePrefix } from './new-hires-create-single-new-hire-response-contact-information-name-prefix';
import { NewHiresCreateSingleNewHireResponseContactInformationNameSuffix } from './new-hires-create-single-new-hire-response-contact-information-name-suffix';

/**
 * Name of the new hire
 * @export
 * @interface NewHiresCreateSingleNewHireResponseContactInformationName
 */
export interface NewHiresCreateSingleNewHireResponseContactInformationName {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseContactInformationNamePrefix}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'prefix'?: NewHiresCreateSingleNewHireResponseContactInformationNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseContactInformationNameSuffix}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'suffix'?: NewHiresCreateSingleNewHireResponseContactInformationNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseContactInformationName
     */
    'preferredFirst'?: string;
}

