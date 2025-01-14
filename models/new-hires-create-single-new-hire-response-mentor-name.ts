/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireResponseMentorNamePrefix } from './new-hires-create-single-new-hire-response-mentor-name-prefix';
import { NewHiresCreateSingleNewHireResponseMentorNameSuffix } from './new-hires-create-single-new-hire-response-mentor-name-suffix';

/**
 * Name of the mentor
 * @export
 * @interface NewHiresCreateSingleNewHireResponseMentorName
 */
export interface NewHiresCreateSingleNewHireResponseMentorName {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseMentorNamePrefix}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'prefix'?: NewHiresCreateSingleNewHireResponseMentorNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseMentorNameSuffix}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'suffix'?: NewHiresCreateSingleNewHireResponseMentorNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseMentorName
     */
    'preferredFirst'?: string;
}

