/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Jobs
 */
export interface Jobs {
    /**
     * Job title.
     * @type {string}
     * @memberof Jobs
     */
    'title': string;
    /**
     * Job country code.
     * @type {string}
     * @memberof Jobs
     */
    'countryCode': string;
    /**
     * Job Code, the unique identifier.
     * @type {string}
     * @memberof Jobs
     */
    'code': string;
    /**
     * Job family code.
     * @type {string}
     * @memberof Jobs
     */
    'jobFamilyCode'?: string;
    /**
     * The job status.
     * @type {boolean}
     * @memberof Jobs
     */
    'isActive'?: boolean;
}

