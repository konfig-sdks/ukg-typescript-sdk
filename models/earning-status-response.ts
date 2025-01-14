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
 * @interface EarningStatusResponse
 */
export interface EarningStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'refId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'companyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'empNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'chargeDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'hours'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'amount'?: string;
    /**
     * 
     * @type {Decimal}
     * @memberof EarningStatusResponse
     */
    'pieceCount'?: Decimal;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'shiftCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'location'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'job'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'project'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'orgLvl1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'orgLvl2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'orgLvl3'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'orgLvl4'?: string;
    /**
     * 
     * @type {Decimal}
     * @memberof EarningStatusResponse
     */
    'payRate'?: Decimal;
    /**
     * 
     * @type {Decimal}
     * @memberof EarningStatusResponse
     */
    'pieceRate'?: Decimal;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'roePayDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'source'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningStatusResponse
     */
    'isImportedIntoPayroll'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'AdjEarnPeriodStartDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'AdjEarnPeriodEndDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof EarningStatusResponse
     */
    'CheckSequence'?: number;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'CreatePayType'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'ForcePayCreation'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningStatusResponse
     */
    'GrossUp'?: string;
    /**
     * 
     * @type {number}
     * @memberof EarningStatusResponse
     */
    'GrossUpTarget'?: number;
    /**
     * 
     * @type {number}
     * @memberof EarningStatusResponse
     */
    'GrossUpTaxCalcMethod'?: number;
}

