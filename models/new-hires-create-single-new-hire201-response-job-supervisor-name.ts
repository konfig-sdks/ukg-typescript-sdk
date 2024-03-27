/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresCreateSingleNewHire201ResponseJobSupervisorNamePrefix } from './new-hires-create-single-new-hire201-response-job-supervisor-name-prefix';
import { NewHiresCreateSingleNewHire201ResponseJobSupervisorNameSuffix } from './new-hires-create-single-new-hire201-response-job-supervisor-name-suffix';

/**
 * Name of the supervisor
 * @export
 * @interface NewHiresCreateSingleNewHire201ResponseJobSupervisorName
 */
export interface NewHiresCreateSingleNewHire201ResponseJobSupervisorName {
    /**
     * 
     * @type {NewHiresCreateSingleNewHire201ResponseJobSupervisorNamePrefix}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'prefix'?: NewHiresCreateSingleNewHire201ResponseJobSupervisorNamePrefix;
    /**
     * First name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'first'?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'middle'?: string;
    /**
     * Last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'last'?: string;
    /**
     * Former last name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'formerLast'?: string;
    /**
     * 
     * @type {NewHiresCreateSingleNewHire201ResponseJobSupervisorNameSuffix}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'suffix'?: NewHiresCreateSingleNewHire201ResponseJobSupervisorNameSuffix;
    /**
     * Preferred first name
     * @type {string}
     * @memberof NewHiresCreateSingleNewHire201ResponseJobSupervisorName
     */
    'preferredFirst'?: string;
}

