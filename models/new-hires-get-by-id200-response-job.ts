/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NewHiresGetById200ResponseJobComponentCompany } from './new-hires-get-by-id200-response-job-component-company';
import { NewHiresGetById200ResponseJobEmployeeType } from './new-hires-get-by-id200-response-job-employee-type';
import { NewHiresGetById200ResponseJobSupervisor } from './new-hires-get-by-id200-response-job-supervisor';
import { NewHiresGetById200ResponseJobWorkLocation } from './new-hires-get-by-id200-response-job-work-location';

/**
 * Job of the new hire
 * @export
 * @interface NewHiresGetById200ResponseJob
 */
export interface NewHiresGetById200ResponseJob {
    /**
     * Unique identifier of the job
     * @type {string}
     * @memberof NewHiresGetById200ResponseJob
     */
    'id'?: string;
    /**
     * The name of the job
     * @type {{ [key: string]: string; }}
     * @memberof NewHiresGetById200ResponseJob
     */
    'name'?: { [key: string]: string; };
    /**
     * Code of the job
     * @type {string}
     * @memberof NewHiresGetById200ResponseJob
     */
    'code'?: string;
    /**
     * RequisitionId of the job
     * @type {string}
     * @memberof NewHiresGetById200ResponseJob
     */
    'requisitionId'?: string;
    /**
     * Selected FLSA status for the job
     * @type {string}
     * @memberof NewHiresGetById200ResponseJob
     */
    'selectedFLSAStatus'?: NewHiresGetById200ResponseJobSelectedFLSAStatusEnum;
    /**
     * 
     * @type {NewHiresGetById200ResponseJobComponentCompany}
     * @memberof NewHiresGetById200ResponseJob
     */
    'componentCompany'?: NewHiresGetById200ResponseJobComponentCompany;
    /**
     * 
     * @type {NewHiresGetById200ResponseJobWorkLocation}
     * @memberof NewHiresGetById200ResponseJob
     */
    'workLocation'?: NewHiresGetById200ResponseJobWorkLocation;
    /**
     * 
     * @type {NewHiresGetById200ResponseJobSupervisor}
     * @memberof NewHiresGetById200ResponseJob
     */
    'supervisor'?: NewHiresGetById200ResponseJobSupervisor;
    /**
     * 
     * @type {NewHiresGetById200ResponseJobEmployeeType}
     * @memberof NewHiresGetById200ResponseJob
     */
    'employeeType'?: NewHiresGetById200ResponseJobEmployeeType;
}

type NewHiresGetById200ResponseJobSelectedFLSAStatusEnum = 'Not specified = 0' | 'Exempt = 1' | 'NonExempt = 2'


