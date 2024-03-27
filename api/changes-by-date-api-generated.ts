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
import { EmployeeChangesResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ChangesByDateApi - axios parameter creator
 * @export
 */
export const ChangesByDateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets all of the employee information since the last API call (3 hour minimum). A time span can be defined by the query parameters, but to get near real time updates on when the employee has changed, you should call this service 8 times per day and no more frequent than three hours between calls. It should also be understood that you must compare the results for an employee with the results from a previous call to see what property or properties have changed. Permissions - Ultipro service account must have \"View\" role for the EmployeeExport Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Changes By Date
         * @param {string} [startDate] Used to lookup employee changes within time span
         * @param {string} [endDate] Used to lookup employee changes within time span
         * @param {number} [page] Pagination, which page you want to see
         * @param {number} [perPage] Pagination, how many records per page you want to see
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmployeeChangesSinceLastCall: async (startDate?: string, endDate?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/employee-changes`;
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
            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString() :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString() :
                    endDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/employee-changes',
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
 * ChangesByDateApi - functional programming interface
 * @export
 */
export const ChangesByDateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChangesByDateApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets all of the employee information since the last API call (3 hour minimum). A time span can be defined by the query parameters, but to get near real time updates on when the employee has changed, you should call this service 8 times per day and no more frequent than three hours between calls. It should also be understood that you must compare the results for an employee with the results from a previous call to see what property or properties have changed. Permissions - Ultipro service account must have \"View\" role for the EmployeeExport Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Changes By Date
         * @param {ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllEmployeeChangesSinceLastCall(requestParameters: ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeChangesResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllEmployeeChangesSinceLastCall(requestParameters.startDate, requestParameters.endDate, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChangesByDateApi - factory interface
 * @export
 */
export const ChangesByDateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChangesByDateApiFp(configuration)
    return {
        /**
         * Gets all of the employee information since the last API call (3 hour minimum). A time span can be defined by the query parameters, but to get near real time updates on when the employee has changed, you should call this service 8 times per day and no more frequent than three hours between calls. It should also be understood that you must compare the results for an employee with the results from a previous call to see what property or properties have changed. Permissions - Ultipro service account must have \"View\" role for the EmployeeExport Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Changes By Date
         * @param {ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmployeeChangesSinceLastCall(requestParameters: ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeChangesResponse>> {
            return localVarFp.getAllEmployeeChangesSinceLastCall(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAllEmployeeChangesSinceLastCall operation in ChangesByDateApi.
 * @export
 * @interface ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest
 */
export type ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest = {
    
    /**
    * Used to lookup employee changes within time span
    * @type {string}
    * @memberof ChangesByDateApiGetAllEmployeeChangesSinceLastCall
    */
    readonly startDate?: string
    
    /**
    * Used to lookup employee changes within time span
    * @type {string}
    * @memberof ChangesByDateApiGetAllEmployeeChangesSinceLastCall
    */
    readonly endDate?: string
    
    /**
    * Pagination, which page you want to see
    * @type {number}
    * @memberof ChangesByDateApiGetAllEmployeeChangesSinceLastCall
    */
    readonly page?: number
    
    /**
    * Pagination, how many records per page you want to see
    * @type {number}
    * @memberof ChangesByDateApiGetAllEmployeeChangesSinceLastCall
    */
    readonly perPage?: number
    
}

/**
 * ChangesByDateApiGenerated - object-oriented interface
 * @export
 * @class ChangesByDateApiGenerated
 * @extends {BaseAPI}
 */
export class ChangesByDateApiGenerated extends BaseAPI {
    /**
     * Gets all of the employee information since the last API call (3 hour minimum). A time span can be defined by the query parameters, but to get near real time updates on when the employee has changed, you should call this service 8 times per day and no more frequent than three hours between calls. It should also be understood that you must compare the results for an employee with the results from a previous call to see what property or properties have changed. Permissions - Ultipro service account must have \"View\" role for the EmployeeExport Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
     * @summary Changes By Date
     * @param {ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChangesByDateApiGenerated
     */
    public getAllEmployeeChangesSinceLastCall(requestParameters: ChangesByDateApiGetAllEmployeeChangesSinceLastCallRequest = {}, options?: AxiosRequestConfig) {
        return ChangesByDateApiFp(this.configuration).getAllEmployeeChangesSinceLastCall(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
