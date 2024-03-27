/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Employee type for the job
 * @export
 * @interface NewHiresGetById200ResponseJobEmployeeType
 */
export interface NewHiresGetById200ResponseJobEmployeeType {
    /**
     * Id of the translatable
     * @type {string}
     * @memberof NewHiresGetById200ResponseJobEmployeeType
     */
    'id'?: string;
    /**
     * The language that the translatable is in
     * @type {{ [key: string]: string; }}
     * @memberof NewHiresGetById200ResponseJobEmployeeType
     */
    'name'?: { [key: string]: string; };
}

