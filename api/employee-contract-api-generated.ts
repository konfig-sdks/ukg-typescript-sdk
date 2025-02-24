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
import { EmployeeContract } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeContractApi - axios parameter creator
 * @export
 */
export const EmployeeContractApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all employment contract details.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-contract-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-contract-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all employment contract details
         * @param {string} [companyId] 
         * @param {string} [employeeId] 
         * @param {string} [contractNumber] 
         * @param {string} [contractTypeCode] 
         * @param {string} [effectiveDate] Used to find contracts effective date less than, greater than, equal to, or between passed date(s)
         * @param {string} [dateTimeCreated] Used to find contract record created date less than, greater than, equal to, or between passed date(s)
         * @param {string} [rowLastChanged] Used to find contract record changed date less than, greater than, equal to, or between passed date(s)
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (companyId?: string, employeeId?: string, contractNumber?: string, contractTypeCode?: string, effectiveDate?: string, dateTimeCreated?: string, rowLastChanged?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/employee-contract-details`;
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

            if (contractNumber !== undefined) {
                localVarQueryParameter['contractNumber'] = contractNumber;
            }

            if (contractTypeCode !== undefined) {
                localVarQueryParameter['contractTypeCode'] = contractTypeCode;
            }

            if (effectiveDate !== undefined) {
                localVarQueryParameter['effectiveDate'] = effectiveDate;
            }

            if (dateTimeCreated !== undefined) {
                localVarQueryParameter['dateTimeCreated'] = dateTimeCreated;
            }

            if (rowLastChanged !== undefined) {
                localVarQueryParameter['rowLastChanged'] = rowLastChanged;
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
                pathTemplate: '/personnel/v1/employee-contract-details',
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
 * EmployeeContractApi - functional programming interface
 * @export
 */
export const EmployeeContractApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeContractApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all employment contract details.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-contract-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-contract-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all employment contract details
         * @param {EmployeeContractApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EmployeeContractApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeContract>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.companyId, requestParameters.employeeId, requestParameters.contractNumber, requestParameters.contractTypeCode, requestParameters.effectiveDate, requestParameters.dateTimeCreated, requestParameters.rowLastChanged, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeContractApi - factory interface
 * @export
 */
export const EmployeeContractApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeContractApiFp(configuration)
    return {
        /**
         * Get all employment contract details.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-contract-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-contract-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all employment contract details
         * @param {EmployeeContractApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EmployeeContractApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeeContract> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in EmployeeContractApi.
 * @export
 * @interface EmployeeContractApiGetRequest
 */
export type EmployeeContractApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly contractNumber?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly contractTypeCode?: string
    
    /**
    * Used to find contracts effective date less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly effectiveDate?: string
    
    /**
    * Used to find contract record created date less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly dateTimeCreated?: string
    
    /**
    * Used to find contract record changed date less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeContractApiGet
    */
    readonly rowLastChanged?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeContractApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeContractApiGet
    */
    readonly perPage?: number
    
}

/**
 * EmployeeContractApiGenerated - object-oriented interface
 * @export
 * @class EmployeeContractApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeContractApiGenerated extends BaseAPI {
    /**
     * Get all employment contract details.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-contract-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-contract-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-contract-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
     * @summary Get all employment contract details
     * @param {EmployeeContractApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeContractApiGenerated
     */
    public get(requestParameters: EmployeeContractApiGetRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeContractApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
