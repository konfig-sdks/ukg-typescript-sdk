/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeOffRequestDayDto } from './time-off-request-day-dto';

/**
 * 
 * @export
 * @interface TimeOffRequestDto
 */
export interface TimeOffRequestDto {
    /**
     * 
     * @type {number}
     * @memberof TimeOffRequestDto
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDto
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffRequestDto
     */
    'comment'?: string;
    /**
     * 
     * @type {Array<TimeOffRequestDayDto>}
     * @memberof TimeOffRequestDto
     */
    'days'?: Array<TimeOffRequestDayDto>;
}

