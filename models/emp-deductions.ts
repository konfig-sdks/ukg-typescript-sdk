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
 * @interface EmpDeductions
 */
export interface EmpDeductions {
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'arrearsAmt'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'benefitAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benefitAmountCalcRule'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'benefitAmountRateOrPercent'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benefitOption'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benefitStartDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benefitStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benefitStatusDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benefitStopDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'companyID'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'customAmount1'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'customAmount2'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'customDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'dateSuspendedFrom'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'dateSuspendedTo'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'datetimeChanged'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'datetimeCreated'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'declinedByCarrier'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'declinedByCarrierDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'declinedByCarrierReason'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'deductionCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'effectiveRecordID'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'contactID'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'memberOrCaseNumber'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeCalcRateOrPct'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeeCalcRule'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeeCauseNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeeDedLastPaid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeeEligibilityDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeFiscalYTDAmt'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeGoalAmt'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeGoalToDateAmt'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeeID'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeLastAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeMonthToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeQuarterToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeeYearToDateAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'evidenceOfInsurabilityDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'evidenceOfInsurabilityDesiredAmt'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'evidenceOfInsurabilityDesiredCalcRateOrPct'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerCalcRateOrPct'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employerCalcRule'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerFiscalYearToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerLastAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerMonthToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerQuarterToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employerYearToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'interestAmount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'isDeductionOffset'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'medicalIndicator'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'needEvidenceOfInsurability'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'notes'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'primaryCarePhysician'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'primaryCarePhysicianId'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'priorEmployeeAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'priorEmployeeGoalAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'priorEmployeeYearToDateAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'priorEmployerYearToDateAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'deductionStartDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'deductionStopDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'systemID'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'waiveReason'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'isHomeCompany'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'isWaived'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'includeInAdditionalCheck'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmpDeductions
     */
    'includeInManualCheck'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeePerCapAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'employeePerCapPercent'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeePerCapCalcRule'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'employeeId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'companyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'dedCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'benStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmpDeductions
     */
    'endDateTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmpDeductions
     */
    'per_Page'?: number;
}

