/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHireReadModelContactInformationNamePrefix } from './new-hire-read-model-contact-information-name-prefix';
import { NewHireReadModelContactInformationNameSuffix } from './new-hire-read-model-contact-information-name-suffix';

/**
 * Name of the new hire
 * @export
 * @interface NewHireReadModelContactInformationName
 */
export interface NewHireReadModelContactInformationName {
    /**
     * 
     * @type {NewHireReadModelContactInformationNamePrefix}
     * @memberof NewHireReadModelContactInformationName
     */
    'prefix'?: NewHireReadModelContactInformationNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHireReadModelContactInformationName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHireReadModelContactInformationName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHireReadModelContactInformationName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHireReadModelContactInformationName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHireReadModelContactInformationNameSuffix}
     * @memberof NewHireReadModelContactInformationName
     */
    'suffix'?: NewHireReadModelContactInformationNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHireReadModelContactInformationName
     */
    'preferredFirst'?: string;
}

