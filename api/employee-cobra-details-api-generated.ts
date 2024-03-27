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
import { EmployeeCobraDetails } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeCobraDetailsApi - axios parameter creator
 * @export
 */
export const EmployeeCobraDetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Employee Cobra Details
         * @param {string} [companyId] 
         * @param {string} [employeeId] 
         * @param {boolean} [cobraIsActive] 
         * @param {string} [cobraStatus] 
         * @param {string} [dateOfCobraEvent] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (companyId?: string, employeeId?: string, cobraIsActive?: boolean, cobraStatus?: string, dateOfCobraEvent?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/employee-cobra-details`;
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

            if (cobraIsActive !== undefined) {
                localVarQueryParameter['cobraIsActive'] = cobraIsActive;
            }

            if (cobraStatus !== undefined) {
                localVarQueryParameter['cobraStatus'] = cobraStatus;
            }

            if (dateOfCobraEvent !== undefined) {
                localVarQueryParameter['dateOfCobraEvent'] = (dateOfCobraEvent as any instanceof Date) ?
                    (dateOfCobraEvent as any).toISOString() :
                    dateOfCobraEvent;
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
                pathTemplate: '/personnel/v1/employee-cobra-details',
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
 * EmployeeCobraDetailsApi - functional programming interface
 * @export
 */
export const EmployeeCobraDetailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeCobraDetailsApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Employee Cobra Details
         * @param {EmployeeCobraDetailsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EmployeeCobraDetailsApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeCobraDetails>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.companyId, requestParameters.employeeId, requestParameters.cobraIsActive, requestParameters.cobraStatus, requestParameters.dateOfCobraEvent, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeCobraDetailsApi - factory interface
 * @export
 */
export const EmployeeCobraDetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeCobraDetailsApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Employee Cobra Details
         * @param {EmployeeCobraDetailsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EmployeeCobraDetailsApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeCobraDetails>> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in EmployeeCobraDetailsApi.
 * @export
 * @interface EmployeeCobraDetailsApiGetRequest
 */
export type EmployeeCobraDetailsApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {boolean}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly cobraIsActive?: boolean
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly cobraStatus?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly dateOfCobraEvent?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeCobraDetailsApiGet
    */
    readonly perPage?: number
    
}

/**
 * EmployeeCobraDetailsApiGenerated - object-oriented interface
 * @export
 * @class EmployeeCobraDetailsApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeCobraDetailsApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get Employee Cobra Details
     * @param {EmployeeCobraDetailsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeCobraDetailsApiGenerated
     */
    public get(requestParameters: EmployeeCobraDetailsApiGetRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeCobraDetailsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}