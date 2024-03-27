/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Decimal } from './decimal';

/**
 * 
 * @export
 * @interface Earning
 */
export interface Earning {
    /**
     * Unique identifier for each earnings.
     * @type {string}
     * @memberof Earning
     */
    'refId': string;
    /**
     * Company code associated with employee.
     * @type {string}
     * @memberof Earning
     */
    'companyCode': string;
    /**
     * Employee number associated with employee for time data.
     * @type {string}
     * @memberof Earning
     */
    'empNo': string;
    /**
     * Used in the calculation of coefficient overtime and tips processing. Formatting must conform to ISO 8601 UTC Format
     * @type {string}
     * @memberof Earning
     */
    'chargeDate'?: string;
    /**
     * Earnings code for time data
     * @type {string}
     * @memberof Earning
     */
    'code': string;
    /**
     * Number of hours associated with earnings, if appropriate. Decimal value up to 4 decimal places. Positive and negative values allowed.
     * @type {Decimal}
     * @memberof Earning
     */
    'hours'?: Decimal;
    /**
     * Amount associated with earnings, if appropriate. Positive and negative values allowed.
     * @type {Decimal}
     * @memberof Earning
     */
    'amount'?: Decimal;
    /**
     * Number of pieces associated with earnings, if appropriate. Positive and negative values allowed.
     * @type {Decimal}
     * @memberof Earning
     */
    'pieceCount'?: Decimal;
    /**
     * Shift code associated with time data.
     * @type {string}
     * @memberof Earning
     */
    'shiftCode'?: string;
    /**
     * Location associated with employee.
     * @type {string}
     * @memberof Earning
     */
    'location'?: string;
    /**
     * Job code associated with employee’s time data.
     * @type {string}
     * @memberof Earning
     */
    'job'?: string;
    /**
     * Project code or value associated with employee’s time data.
     * @type {string}
     * @memberof Earning
     */
    'project'?: string;
    /**
     * Organization level 1 code associated with employee’s time data
     * @type {string}
     * @memberof Earning
     */
    'orgLvl1'?: string;
    /**
     * Organization level 2 code associated with employee’s time data.
     * @type {string}
     * @memberof Earning
     */
    'orgLvl2'?: string;
    /**
     * Organization level 3 code associated with employee’s time data.
     * @type {string}
     * @memberof Earning
     */
    'orgLvl3'?: string;
    /**
     * Organization level 4 code associated with employee’s time data.
     * @type {string}
     * @memberof Earning
     */
    'orgLvl4'?: string;
    /**
     * Pay rate associated with employee’s time data.  Value overrides pay rate in UKG Pro.
     * @type {Decimal}
     * @memberof Earning
     */
    'payRate'?: Decimal;
    /**
     * Piece rate associated with employee’s time data.  Value overrides piece rate in UKG Pro.
     * @type {Decimal}
     * @memberof Earning
     */
    'pieceRate'?: Decimal;
    /**
     * The Record of Employment pay date.  Must be a valid pay date.
     * @type {string}
     * @memberof Earning
     */
    'roePayDate'?: string;
    /**
     * Used for co-efficient overtime period adjustment start date.
     * @type {string}
     * @memberof Earning
     */
    'adjEarnPeriodStartDate'?: string;
    /**
     * Used for co-efficient overtime period adjustment end date.
     * @type {string}
     * @memberof Earning
     */
    'adjEarnPeriodEndDate'?: string;
    /**
     * Sequence of multiple checks for a single employee. Specify the type of additional pay (check or DDA) being added to the employee(s) via Time Clock Import. A - Creates an additional direct deposit advice with deductions (for employees  with existing DD setups). D - Creates an additional direct deposit with No deductions (for employees with existing DD setups). B - Creates an additional pay with deductions; this will create a live check for the employees. J -  Creates an additional pay with No deductions; this will create a live check for the employees 
     * @type {number}
     * @memberof Earning
     */
    'checkSequence'?: number;
    /**
     * R - Creates a Regular Pay check.
     * @type {string}
     * @memberof Earning
     */
    'createPayType'?: string;
    /**
     * To force the creation of an additional pay via Time clock import, set this to Y.
     * @type {string}
     * @memberof Earning
     */
    'forcePayCreation'?: string;
    /**
     * This identifies if an earning is to be grossed up.
     * @type {string}
     * @memberof Earning
     */
    'grossUp'?: string;
    /**
     * Specified net amount.
     * @type {number}
     * @memberof Earning
     */
    'grossUpTarget'?: number;
    /**
     * The Gross Up Tax Calculation Method (E_Batch. EbtGrossUpTaxCalcMethod) Numeric value to identify which taxes to include in the gross up calculation.
     * @type {number}
     * @memberof Earning
     */
    'grossUpTaxCalcMethod'?: number;
    /**
     * Source of the data as appropriate. Usually an alias of the system sending the data.
     * @type {string}
     * @memberof Earning
     */
    'source': string;
}
