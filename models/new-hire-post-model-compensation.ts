/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Compensation information for the new hire
 * @export
 * @interface NewHirePostModelCompensation
 */
export interface NewHirePostModelCompensation {
    /**
     * Whether the new hire is full time
     * @type {boolean}
     * @memberof NewHirePostModelCompensation
     */
    'isFullTime'?: boolean;
    /**
     * Whether the new hire is salaried
     * @type {boolean}
     * @memberof NewHirePostModelCompensation
     */
    'isSalaried'?: boolean;
    /**
     * Work hours of the new hire
     * @type {number}
     * @memberof NewHirePostModelCompensation
     */
    'workHours'?: number;
    /**
     * Weekly hours of the new hire. Only applicable for hires not in US/Canadian companies
     * @type {number}
     * @memberof NewHirePostModelCompensation
     */
    'weeklyHours'?: number;
    /**
     * ISO currency code of the new hire
     * @type {string}
     * @memberof NewHirePostModelCompensation
     */
    'currencyCode'?: string;
    /**
     * Pay rate of the new hire
     * @type {number}
     * @memberof NewHirePostModelCompensation
     */
    'payRate'?: number;
    /**
     * Pay period of the new hire. Accepts \"H\" (Hour), \"W\" (Week), \"P\" (Period), \"Y\" (Year)
     * @type {string}
     * @memberof NewHirePostModelCompensation
     */
    'ratePer'?: string;
}

