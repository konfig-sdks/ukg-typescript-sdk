/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeJobDto } from './employee-job-dto';

/**
 * 
 * @export
 * @interface ResultDtoEmployeeJobDto
 */
export interface ResultDtoEmployeeJobDto {
    /**
     * 
     * @type {Array<EmployeeJobDto>}
     * @memberof ResultDtoEmployeeJobDto
     */
    'entities'?: Array<EmployeeJobDto>;
    /**
     * 
     * @type {number}
     * @memberof ResultDtoEmployeeJobDto
     */
    'index'?: number;
    /**
     * 
     * @type {number}
     * @memberof ResultDtoEmployeeJobDto
     */
    'requestedCount'?: number;
}
