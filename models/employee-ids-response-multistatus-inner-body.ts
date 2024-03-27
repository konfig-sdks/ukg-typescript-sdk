/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Only present if status is success
 * @export
 * @interface EmployeeIdsResponseMultistatusInnerBody
 */
export interface EmployeeIdsResponseMultistatusInnerBody {
    /**
     * 
     * @type {string}
     * @memberof EmployeeIdsResponseMultistatusInnerBody
     */
    'eeid'?: string;
    /**
     * If more than one company, first element is the home company.
     * @type {Array<string>}
     * @memberof EmployeeIdsResponseMultistatusInnerBody
     */
    'coid'?: Array<string>;
}
