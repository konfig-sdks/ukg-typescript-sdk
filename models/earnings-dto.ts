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
 * @interface EarningsDto
 */
export interface EarningsDto {
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'earningCode': string;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'longDescription': string;
    /**
     * 
     * @type {number}
     * @memberof EarningsDto
     */
    'amount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'blockFederalIncomeTax'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'blockLocalIncomeTax'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'blockStateIncomeTax'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'calculationRule'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'displayInPayDataEntry'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'excelInTotalHours'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EarningsDto
     */
    'flatHours'?: number;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'includeInAccruals'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInAllocations'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeFlsaAveragePayRate'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInBenefitHours'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInDeferredCompensation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInDeferredCompensationHours'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInEarningAccumulation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInHoursAccumulation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInManualCheck'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInMiscellaneousEarning1'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInMiscellaneousEarning2'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInMiscellaneousEarning3'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInMiscellaneousEarning4'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInMiscellaneousEarning5'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInMiscellaneousEarning6'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInPensionAccumulation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInRetroPay'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInShiftDiffrential'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'isProductiveTime'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'isSupplimentalWages'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'monthlyPayPeriod1'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'monthlyPayPeriod2'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'monthlyPayPeriod3'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'monthlyPayPeriod4'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'monthlyPayPeriod5'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'notes'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'reduceRegularDollars'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'reduceRegularHours'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'reportCategory'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'scheduleSupplemental'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'stubDescription': string;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'taxCategory'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'timeClockCode': string;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'countryCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'useDeductionOffset'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInRegisteredPensionPlan'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInRegisteredRetirementSavingsPlan'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInUnionDues'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInUnionDuesHours'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'taxCalculationRule'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'exemptFromEarnedIncomeHours'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EarningsDto
     */
    'includeInHealthCareHours'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'verificationTypeCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EarningsDto
     */
    'verificationTypeDescription'?: string;
}

