/* tslint:disable */
/* eslint-disable */
/*
User Profile Details

Configure your UKG Pro Configuration Codes through UKG Pro APIs. Status: R1 deployment

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { EmployeePayDeductionElementsModel } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeePayDeductionElementApi - axios parameter creator
 * @export
 */
export const EmployeePayDeductionElementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all global employee payments and deductions.   If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get Global Employee Payments and Deductions Service
         * @param {string} [companyId] 
         * @param {string} [employeeId] 
         * @param {string} [country] 
         * @param {string} [payGroup] 
         * @param {string} [payDeductionName] 
         * @param {string} [periodStartName] 
         * @param {string} [paymentOrDeductionIndicator] 
         * @param {string} [modifiedDate] Used to find a payment or deduction modified less than, greater than, equal to, or between passed date(s)
         * @param {string} [startDate] Used to find a payment or deduction where the pay period start is less than, greater than, equal to, or between passed date(s)
         * @param {string} [endDate] Used to find a payment or deduction where the pay period end is less than, greater than, equal to, or between passed date(s)
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (companyId?: string, employeeId?: string, country?: string, payGroup?: string, payDeductionName?: string, periodStartName?: string, paymentOrDeductionIndicator?: string, modifiedDate?: string, startDate?: string, endDate?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/employee-pay-deduction-elements`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)
            if (companyId !== undefined) {
                localVarQueryParameter['companyId'] = companyId;
            }

            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
            }

            if (country !== undefined) {
                localVarQueryParameter['country'] = country;
            }

            if (payGroup !== undefined) {
                localVarQueryParameter['payGroup'] = payGroup;
            }

            if (payDeductionName !== undefined) {
                localVarQueryParameter['payDeductionName'] = payDeductionName;
            }

            if (periodStartName !== undefined) {
                localVarQueryParameter['periodStartName'] = periodStartName;
            }

            if (paymentOrDeductionIndicator !== undefined) {
                localVarQueryParameter['paymentOrDeductionIndicator'] = paymentOrDeductionIndicator;
            }

            if (modifiedDate !== undefined) {
                localVarQueryParameter['modifiedDate'] = modifiedDate;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_Page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/employee-pay-deduction-elements',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeePayDeductionElementApi - functional programming interface
 * @export
 */
export const EmployeePayDeductionElementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeePayDeductionElementApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all global employee payments and deductions.   If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get Global Employee Payments and Deductions Service
         * @param {EmployeePayDeductionElementApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EmployeePayDeductionElementApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeePayDeductionElementsModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.companyId, requestParameters.employeeId, requestParameters.country, requestParameters.payGroup, requestParameters.payDeductionName, requestParameters.periodStartName, requestParameters.paymentOrDeductionIndicator, requestParameters.modifiedDate, requestParameters.startDate, requestParameters.endDate, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeePayDeductionElementApi - factory interface
 * @export
 */
export const EmployeePayDeductionElementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeePayDeductionElementApiFp(configuration)
    return {
        /**
         * Get all global employee payments and deductions.   If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get Global Employee Payments and Deductions Service
         * @param {EmployeePayDeductionElementApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EmployeePayDeductionElementApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeePayDeductionElementsModel> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in EmployeePayDeductionElementApi.
 * @export
 * @interface EmployeePayDeductionElementApiGetRequest
 */
export type EmployeePayDeductionElementApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly country?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly payGroup?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly payDeductionName?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly periodStartName?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly paymentOrDeductionIndicator?: string
    
    /**
    * Used to find a payment or deduction modified less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly modifiedDate?: string
    
    /**
    * Used to find a payment or deduction where the pay period start is less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly startDate?: string
    
    /**
    * Used to find a payment or deduction where the pay period end is less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly endDate?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmployeePayDeductionElementApiGet
    */
    readonly perPage?: number
    
}

/**
 * EmployeePayDeductionElementApiGenerated - object-oriented interface
 * @export
 * @class EmployeePayDeductionElementApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeePayDeductionElementApiGenerated extends BaseAPI {
    /**
     * Get all global employee payments and deductions.   If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-pay-deduction-elements?modifiedDate=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-pay-deduction-elements?modifiedDate={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
     * @summary Get Global Employee Payments and Deductions Service
     * @param {EmployeePayDeductionElementApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeePayDeductionElementApiGenerated
     */
    public get(requestParameters: EmployeePayDeductionElementApiGetRequest = {}, options?: AxiosRequestConfig) {
        return EmployeePayDeductionElementApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}