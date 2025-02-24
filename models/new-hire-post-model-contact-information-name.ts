/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHirePostModelContactInformationNamePrefix } from './new-hire-post-model-contact-information-name-prefix';
import { NewHirePostModelContactInformationNameSuffix } from './new-hire-post-model-contact-information-name-suffix';

/**
 * Name of the new hire
 * @export
 * @interface NewHirePostModelContactInformationName
 */
export interface NewHirePostModelContactInformationName {
    /**
     * 
     * @type {NewHirePostModelContactInformationNamePrefix}
     * @memberof NewHirePostModelContactInformationName
     */
    'prefix'?: NewHirePostModelContactInformationNamePrefix;
    /**
     * First name of the new hire. maxLength: 50 for hires in US/Canadian companies. 100 otherwise
     * @type {string}
     * @memberof NewHirePostModelContactInformationName
     */
    'first': string;
    /**
     * Middle name of the new hire
     * @type {string}
     * @memberof NewHirePostModelContactInformationName
     */
    'middle'?: string;
    /**
     * Last name of the new hire. maxLength: 50 for hires in US/Canadian companies. 100 otherwise
     * @type {string}
     * @memberof NewHirePostModelContactInformationName
     */
    'last': string;
    /**
     * Former last name of the new hire. maxLength: 30 for hires in US/Canadian companies. 100 otherwise
     * @type {string}
     * @memberof NewHirePostModelContactInformationName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHirePostModelContactInformationNameSuffix}
     * @memberof NewHirePostModelContactInformationName
     */
    'suffix'?: NewHirePostModelContactInformationNameSuffix;
    /**
     * Preferred first name of the new hire. maxLength: 50 for hires in US/Canadian companies. 100 otherwise
     * @type {string}
     * @memberof NewHirePostModelContactInformationName
     */
    'preferredFirst'?: string;
}

