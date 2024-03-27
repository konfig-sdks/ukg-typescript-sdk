/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeePayStatementAccrualsModel } from './employee-pay-statement-accruals-model';
import { EmployeePayStatementDeductionsModel } from './employee-pay-statement-deductions-model';
import { EmployeePayStatementEarningsModel } from './employee-pay-statement-earnings-model';
import { EmployeePayStatementIdentifierModel } from './employee-pay-statement-identifier-model';
import { EmployeePayStatementNetPayModel } from './employee-pay-statement-net-pay-model';
import { EmployeePayStatementTaxesModel } from './employee-pay-statement-taxes-model';

/**
 * 
 * @export
 * @interface EmployeePayStatementModel
 */
export interface EmployeePayStatementModel {
    /**
     * 
     * @type {Array<EmployeePayStatementAccrualsModel>}
     * @memberof EmployeePayStatementModel
     */
    'accruals'?: Array<EmployeePayStatementAccrualsModel>;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'addressline1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'addressline2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddresscity'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddresscountry'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddresscounty'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddressline1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddressline2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddresspostalcode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyaddressstateorprovince'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyname'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyphone'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'companyphoneext'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'country'?: string;
    /**
     * 
     * @type {Array<EmployeePayStatementDeductionsModel>}
     * @memberof EmployeePayStatementModel
     */
    'deductions'?: Array<EmployeePayStatementDeductionsModel>;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'deductionscurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'deductionsytd'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'document'?: string;
    /**
     * 
     * @type {Array<EmployeePayStatementEarningsModel>}
     * @memberof EmployeePayStatementModel
     */
    'earnings'?: Array<EmployeePayStatementEarningsModel>;
    /**
     * 
     * @type {EmployeePayStatementIdentifierModel}
     * @memberof EmployeePayStatementModel
     */
    'employeeidentifier'?: EmployeePayStatementIdentifierModel;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'employeenumber'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'federaladditionalamountWithheld'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'federalallowancesclaimed'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'federalfilingstatus'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'federaltaxablewagescurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'federaltaxablewagesytd'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'fullname'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'grosswagescurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'grosswagesytd'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'job'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'location'?: string;
    /**
     * 
     * @type {Array<EmployeePayStatementNetPayModel>}
     * @memberof EmployeePayStatementModel
     */
    'netpay'?: Array<EmployeePayStatementNetPayModel>;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'netpaycurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'netpayytd'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'orglevel1'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'orglevel2'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'orglevel3'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'orglevel4'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'paydate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'payperiodfrequency'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'paygroup'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'payidentifier'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'payrate'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'periodenddate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'periodstartdate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'postalcode'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'residentstateallowancesclaimed'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'residentstatefilingstatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'ssn'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'stateorprovince'?: string;
    /**
     * 
     * @type {Array<EmployeePayStatementTaxesModel>}
     * @memberof EmployeePayStatementModel
     */
    'taxes'?: Array<EmployeePayStatementTaxesModel>;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'taxescurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'taxesytd'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeePayStatementModel
     */
    'workstateallowancesclaimed'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayStatementModel
     */
    'workstatefilingstatus'?: string;
}

