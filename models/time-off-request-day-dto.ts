/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeOffReasonDto } from './time-off-reason-dto';
import { TimeOffTypeDto } from './time-off-type-dto';

/**
 * 
 * @export
 * @interface TimeOffRequestDayDto
 */
export interface TimeOffRequestDayDto {
    /**
     * 
     * @type {number}
     * @memberof TimeOffRequestDayDto
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffRequestDayDto
     */
    'requestId'?: number;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDayDto
     */
    'date'?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeOffRequestDayDto
     */
    'from'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffRequestDayDto
     */
    'to'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOffRequestDayDto
     */
    'fullDay'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDayDto
     */
    'status'?: string;
    /**
     * 
     * @type {TimeOffTypeDto}
     * @memberof TimeOffRequestDayDto
     */
    'type'?: TimeOffTypeDto;
    /**
     * 
     * @type {TimeOffReasonDto}
     * @memberof TimeOffRequestDayDto
     */
    'reason'?: TimeOffReasonDto;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDayDto
     */
    'empComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDayDto
     */
    'conclusionDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDayDto
     */
    'conclusionComment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOffRequestDayDto
     */
    'payInAdv'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDayDto
     */
    'submittedDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeOffRequestDayDto
     */
    'empId'?: number;
}

