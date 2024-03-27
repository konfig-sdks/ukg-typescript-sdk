/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeIdsResponseMultistatusInnerBody } from './employee-ids-response-multistatus-inner-body';
import { EmployeeIdsResponseMultistatusInnerModelstate } from './employee-ids-response-multistatus-inner-modelstate';

/**
 * 
 * @export
 * @interface EmployeeIdsResponseMultistatusInner
 */
export interface EmployeeIdsResponseMultistatusInner {
    /**
     * 
     * @type {number}
     * @memberof EmployeeIdsResponseMultistatusInner
     */
    'sequenceId'?: number;
    /**
     * http status
     * @type {string}
     * @memberof EmployeeIdsResponseMultistatusInner
     */
    'status'?: string;
    /**
     * 
     * @type {EmployeeIdsResponseMultistatusInnerModelstate}
     * @memberof EmployeeIdsResponseMultistatusInner
     */
    'modelstate'?: EmployeeIdsResponseMultistatusInnerModelstate;
    /**
     * 
     * @type {EmployeeIdsResponseMultistatusInnerBody}
     * @memberof EmployeeIdsResponseMultistatusInner
     */
    'body'?: EmployeeIdsResponseMultistatusInnerBody;
}

