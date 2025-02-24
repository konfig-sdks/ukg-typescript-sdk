/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHireResponseJobSupervisorNamePrefix } from './new-hires-create-single-new-hire-response-job-supervisor-name-prefix';
import { NewHiresCreateSingleNewHireResponseJobSupervisorNameSuffix } from './new-hires-create-single-new-hire-response-job-supervisor-name-suffix';

/**
 * Name of the supervisor
 * @export
 * @interface NewHiresCreateSingleNewHireResponseJobSupervisorName
 */
export interface NewHiresCreateSingleNewHireResponseJobSupervisorName {
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseJobSupervisorNamePrefix}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'prefix'?: NewHiresCreateSingleNewHireResponseJobSupervisorNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHireResponseJobSupervisorNameSuffix}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'suffix'?: NewHiresCreateSingleNewHireResponseJobSupervisorNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireResponseJobSupervisorName
     */
    'preferredFirst'?: string;
}

