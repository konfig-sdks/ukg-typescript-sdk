/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresGetById200ResponseMentorNamePrefix } from './new-hires-get-by-id200-response-mentor-name-prefix';
import { NewHiresGetById200ResponseMentorNameSuffix } from './new-hires-get-by-id200-response-mentor-name-suffix';

/**
 * Name of the mentor
 * @export
 * @interface NewHiresGetById200ResponseMentorName
 */
export interface NewHiresGetById200ResponseMentorName {
    /**
     * 
     * @type {NewHiresGetById200ResponseMentorNamePrefix}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'prefix'?: NewHiresGetById200ResponseMentorNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHiresGetById200ResponseMentorNameSuffix}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'suffix'?: NewHiresGetById200ResponseMentorNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHiresGetById200ResponseMentorName
     */
    'preferredFirst'?: string;
}

