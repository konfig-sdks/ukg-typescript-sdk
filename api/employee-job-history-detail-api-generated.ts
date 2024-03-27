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
import { EmployeeJobHistoryDetail } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeJobHistoryDetailApi - axios parameter creator
 * @export
 */
export const EmployeeJobHistoryDetailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all employee job history details. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all employee job history details
         * @param {string} [companyId] 
         * @param {string} [employeeId] 
         * @param {string} [isOrgChange] 
         * @param {string} [isJobChange] 
         * @param {string} [isRateChange] 
         * @param {string} [isPromotion] 
         * @param {string} [systemId] 
         * @param {string} [jobEffectiveDate] Used to find job history effective date less than, greater than, equal to, or between passed date(s)
         * @param {string} [dateTimeCreated] Used to find job history created less than, greater than, equal to, or between passed date(s)
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (companyId?: string, employeeId?: string, isOrgChange?: string, isJobChange?: string, isRateChange?: string, isPromotion?: string, systemId?: string, jobEffectiveDate?: string, dateTimeCreated?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/employee-job-history-details`;
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

            if (isOrgChange !== undefined) {
                localVarQueryParameter['isOrgChange'] = isOrgChange;
            }

            if (isJobChange !== undefined) {
                localVarQueryParameter['isJobChange'] = isJobChange;
            }

            if (isRateChange !== undefined) {
                localVarQueryParameter['isRateChange'] = isRateChange;
            }

            if (isPromotion !== undefined) {
                localVarQueryParameter['isPromotion'] = isPromotion;
            }

            if (systemId !== undefined) {
                localVarQueryParameter['systemId'] = systemId;
            }

            if (jobEffectiveDate !== undefined) {
                localVarQueryParameter['jobEffectiveDate'] = jobEffectiveDate;
            }

            if (dateTimeCreated !== undefined) {
                localVarQueryParameter['dateTimeCreated'] = dateTimeCreated;
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
                pathTemplate: '/personnel/v1/employee-job-history-details',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single job history detail record.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get a single job history detail record
         * @param {string} systemId 
         * @param {string} [companyId] 
         * @param {string} [employeeId] 
         * @param {string} [isOrgChange] 
         * @param {string} [isJobChange] 
         * @param {string} [isRateChange] 
         * @param {string} [isPromotion] 
         * @param {string} [systemId2] 
         * @param {string} [jobEffectiveDate] Used to find job history effective date less than, greater than, equal to, or between passed date(s)
         * @param {string} [dateTimeCreated] Used to find job history created less than, greater than, equal to, or between passed date(s)
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleRecord: async (systemId: string, companyId?: string, employeeId?: string, isOrgChange?: string, isJobChange?: string, isRateChange?: string, isPromotion?: string, systemId2?: string, jobEffectiveDate?: string, dateTimeCreated?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemId' is not null or undefined
            assertParamExists('getSingleRecord', 'systemId', systemId)
            const localVarPath = `/personnel/v1/employee-job-history-details/{systemId}`
                .replace(`{${"systemId"}}`, encodeURIComponent(String(systemId !== undefined ? systemId : `-systemId-`)));
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

            if (isOrgChange !== undefined) {
                localVarQueryParameter['isOrgChange'] = isOrgChange;
            }

            if (isJobChange !== undefined) {
                localVarQueryParameter['isJobChange'] = isJobChange;
            }

            if (isRateChange !== undefined) {
                localVarQueryParameter['isRateChange'] = isRateChange;
            }

            if (isPromotion !== undefined) {
                localVarQueryParameter['isPromotion'] = isPromotion;
            }

            if (systemId2 !== undefined) {
                localVarQueryParameter['systemId'] = systemId2;
            }

            if (jobEffectiveDate !== undefined) {
                localVarQueryParameter['jobEffectiveDate'] = jobEffectiveDate;
            }

            if (dateTimeCreated !== undefined) {
                localVarQueryParameter['dateTimeCreated'] = dateTimeCreated;
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
                pathTemplate: '/personnel/v1/employee-job-history-details/{systemId}',
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
 * EmployeeJobHistoryDetailApi - functional programming interface
 * @export
 */
export const EmployeeJobHistoryDetailApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeJobHistoryDetailApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all employee job history details. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all employee job history details
         * @param {EmployeeJobHistoryDetailApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EmployeeJobHistoryDetailApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeJobHistoryDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.companyId, requestParameters.employeeId, requestParameters.isOrgChange, requestParameters.isJobChange, requestParameters.isRateChange, requestParameters.isPromotion, requestParameters.systemId, requestParameters.jobEffectiveDate, requestParameters.dateTimeCreated, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single job history detail record.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get a single job history detail record
         * @param {EmployeeJobHistoryDetailApiGetSingleRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSingleRecord(requestParameters: EmployeeJobHistoryDetailApiGetSingleRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeJobHistoryDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSingleRecord(requestParameters.systemId, requestParameters.companyId, requestParameters.employeeId, requestParameters.isOrgChange, requestParameters.isJobChange, requestParameters.isRateChange, requestParameters.isPromotion, requestParameters.systemId2, requestParameters.jobEffectiveDate, requestParameters.dateTimeCreated, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeJobHistoryDetailApi - factory interface
 * @export
 */
export const EmployeeJobHistoryDetailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeJobHistoryDetailApiFp(configuration)
    return {
        /**
         * Get all employee job history details. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get all employee job history details
         * @param {EmployeeJobHistoryDetailApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EmployeeJobHistoryDetailApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeeJobHistoryDetail> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single job history detail record.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
         * @summary Get a single job history detail record
         * @param {EmployeeJobHistoryDetailApiGetSingleRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleRecord(requestParameters: EmployeeJobHistoryDetailApiGetSingleRecordRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeJobHistoryDetail> {
            return localVarFp.getSingleRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in EmployeeJobHistoryDetailApi.
 * @export
 * @interface EmployeeJobHistoryDetailApiGetRequest
 */
export type EmployeeJobHistoryDetailApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly isOrgChange?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly isJobChange?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly isRateChange?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly isPromotion?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly systemId?: string
    
    /**
    * Used to find job history effective date less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly jobEffectiveDate?: string
    
    /**
    * Used to find job history created less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly dateTimeCreated?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeJobHistoryDetailApiGet
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for getSingleRecord operation in EmployeeJobHistoryDetailApi.
 * @export
 * @interface EmployeeJobHistoryDetailApiGetSingleRecordRequest
 */
export type EmployeeJobHistoryDetailApiGetSingleRecordRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly systemId: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly isOrgChange?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly isJobChange?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly isRateChange?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly isPromotion?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly systemId2?: string
    
    /**
    * Used to find job history effective date less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly jobEffectiveDate?: string
    
    /**
    * Used to find job history created less than, greater than, equal to, or between passed date(s)
    * @type {string}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly dateTimeCreated?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeJobHistoryDetailApiGetSingleRecord
    */
    readonly perPage?: number
    
}

/**
 * EmployeeJobHistoryDetailApiGenerated - object-oriented interface
 * @export
 * @class EmployeeJobHistoryDetailApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeJobHistoryDetailApiGenerated extends BaseAPI {
    /**
     * Get all employee job history details. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
     * @summary Get all employee job history details
     * @param {EmployeeJobHistoryDetailApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeJobHistoryDetailApiGenerated
     */
    public get(requestParameters: EmployeeJobHistoryDetailApiGetRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeJobHistoryDetailApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single job history detail record.  If no pagination parameters specified, the default/max is applied.  Permissions - UKG Pro service account must have \"View\" role for the \"Employee Job History Details\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). Correct syntax when using date-time parameters are as follows:  <ul>  <li>less than (=<)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=<01-01-1900</li>    </ul>    </li> <li>greater than (=>)    <ul>    <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=>01-01-1900</li>   </ul>    </li> <li>equal to (=)    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated=01-01-1900</li>    </ul>   </li> <li>between (={minimum date,maximum date})    <ul>   <li>Example: /employee-job-history-details/systemID/[systemID]?dateTimeCreated={01-01-1900,01-01-1901}</li>    </ul>    </li> </ul> 
     * @summary Get a single job history detail record
     * @param {EmployeeJobHistoryDetailApiGetSingleRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeJobHistoryDetailApiGenerated
     */
    public getSingleRecord(requestParameters: EmployeeJobHistoryDetailApiGetSingleRecordRequest, options?: AxiosRequestConfig) {
        return EmployeeJobHistoryDetailApiFp(this.configuration).getSingleRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
