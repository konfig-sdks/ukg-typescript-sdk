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
import { EmployeeMultiPhoneNumbers } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeMultiPhoneNumbersApi - axios parameter creator
 * @export
 */
export const EmployeeMultiPhoneNumbersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Get employee multiple phone numbers
         * @param {string} [employeeId] 
         * @param {string} [systemId] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (employeeId?: string, systemId?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/employee-multi-phone-numbers`;
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
            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
            }

            if (systemId !== undefined) {
                localVarQueryParameter['systemId'] = systemId;
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
                pathTemplate: '/personnel/v1/employee-multi-phone-numbers',
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
 * EmployeeMultiPhoneNumbersApi - functional programming interface
 * @export
 */
export const EmployeeMultiPhoneNumbersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeMultiPhoneNumbersApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Get employee multiple phone numbers
         * @param {EmployeeMultiPhoneNumbersApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EmployeeMultiPhoneNumbersApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeMultiPhoneNumbers>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.employeeId, requestParameters.systemId, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeMultiPhoneNumbersApi - factory interface
 * @export
 */
export const EmployeeMultiPhoneNumbersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeMultiPhoneNumbersApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Get employee multiple phone numbers
         * @param {EmployeeMultiPhoneNumbersApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EmployeeMultiPhoneNumbersApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeMultiPhoneNumbers>> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in EmployeeMultiPhoneNumbersApi.
 * @export
 * @interface EmployeeMultiPhoneNumbersApiGetRequest
 */
export type EmployeeMultiPhoneNumbersApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeMultiPhoneNumbersApiGet
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmployeeMultiPhoneNumbersApiGet
    */
    readonly systemId?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeMultiPhoneNumbersApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmployeeMultiPhoneNumbersApiGet
    */
    readonly perPage?: number
    
}

/**
 * EmployeeMultiPhoneNumbersApiGenerated - object-oriented interface
 * @export
 * @class EmployeeMultiPhoneNumbersApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeMultiPhoneNumbersApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
     * @summary Get employee multiple phone numbers
     * @param {EmployeeMultiPhoneNumbersApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeMultiPhoneNumbersApiGenerated
     */
    public get(requestParameters: EmployeeMultiPhoneNumbersApiGetRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeMultiPhoneNumbersApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
