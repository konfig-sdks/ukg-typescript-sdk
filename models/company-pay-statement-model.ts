/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeePayStatementIdentifierModel } from './employee-pay-statement-identifier-model';

/**
 * 
 * @export
 * @interface CompanyPayStatementModel
 */
export interface CompanyPayStatementModel {
    /**
     * 
     * @type {EmployeePayStatementIdentifierModel}
     * @memberof CompanyPayStatementModel
     */
    'employeeidentifier'?: EmployeePayStatementIdentifierModel;
    /**
     * 
     * @type {string}
     * @memberof CompanyPayStatementModel
     */
    'payidentifier'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyPayStatementModel
     */
    'paydate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyPayStatementModel
     */
    'document'?: string;
    /**
     * 
     * @type {number}
     * @memberof CompanyPayStatementModel
     */
    'totalearnings'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyPayStatementModel
     */
    'totaldeductions'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyPayStatementModel
     */
    'totaltaxes'?: number;
}
