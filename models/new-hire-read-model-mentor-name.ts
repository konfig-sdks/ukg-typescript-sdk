/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHireReadModelMentorNamePrefix } from './new-hire-read-model-mentor-name-prefix';
import { NewHireReadModelMentorNameSuffix } from './new-hire-read-model-mentor-name-suffix';

/**
 * Name of the mentor
 * @export
 * @interface NewHireReadModelMentorName
 */
export interface NewHireReadModelMentorName {
    /**
     * 
     * @type {NewHireReadModelMentorNamePrefix}
     * @memberof NewHireReadModelMentorName
     */
    'prefix'?: NewHireReadModelMentorNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHireReadModelMentorName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHireReadModelMentorName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHireReadModelMentorName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHireReadModelMentorName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHireReadModelMentorNameSuffix}
     * @memberof NewHireReadModelMentorName
     */
    'suffix'?: NewHireReadModelMentorNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHireReadModelMentorName
     */
    'preferredFirst'?: string;
}

