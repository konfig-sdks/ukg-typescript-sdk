/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Mentor for the new hire
 * @export
 * @interface NewHiresCreateSingleNewHireRequestMentor
 */
export interface NewHiresCreateSingleNewHireRequestMentor {
    /**
     * Brief description of mentor
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequestMentor
     */
    'description'?: string;
    /**
     * Onboarding employee id
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequestMentor
     */
    'id'?: string;
    /**
     * Person Id from UltiPro
     * @type {string}
     * @memberof NewHiresCreateSingleNewHireRequestMentor
     */
    'code'?: string;
}

