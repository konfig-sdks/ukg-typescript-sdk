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
import { DependentDeductions } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DependentDeductionsApi - axios parameter creator
 * @export
 */
export const DependentDeductionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Dependent Deductions
         * @param {string} [companyId] 
         * @param {string} [contactId] 
         * @param {string} [deductionCode] 
         * @param {string} [employeeId] 
         * @param {string} [effectiveDate] 
         * @param {string} [currentCOID] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (companyId?: string, contactId?: string, deductionCode?: string, employeeId?: string, effectiveDate?: string, currentCOID?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/dep-deductions`;
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

            if (contactId !== undefined) {
                localVarQueryParameter['contactId'] = contactId;
            }

            if (deductionCode !== undefined) {
                localVarQueryParameter['deductionCode'] = deductionCode;
            }

            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
            }

            if (effectiveDate !== undefined) {
                localVarQueryParameter['effectiveDate'] = (effectiveDate as any instanceof Date) ?
                    (effectiveDate as any).toISOString() :
                    effectiveDate;
            }

            if (currentCOID !== undefined) {
                localVarQueryParameter['currentCOID'] = currentCOID;
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
                pathTemplate: '/personnel/v1/dep-deductions',
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
 * DependentDeductionsApi - functional programming interface
 * @export
 */
export const DependentDeductionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DependentDeductionsApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Dependent Deductions
         * @param {DependentDeductionsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: DependentDeductionsApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DependentDeductions>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.companyId, requestParameters.contactId, requestParameters.deductionCode, requestParameters.employeeId, requestParameters.effectiveDate, requestParameters.currentCOID, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DependentDeductionsApi - factory interface
 * @export
 */
export const DependentDeductionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DependentDeductionsApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Dependent Deductions
         * @param {DependentDeductionsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: DependentDeductionsApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<DependentDeductions>> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in DependentDeductionsApi.
 * @export
 * @interface DependentDeductionsApiGetRequest
 */
export type DependentDeductionsApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DependentDeductionsApiGet
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof DependentDeductionsApiGet
    */
    readonly contactId?: string
    
    /**
    * 
    * @type {string}
    * @memberof DependentDeductionsApiGet
    */
    readonly deductionCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof DependentDeductionsApiGet
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string}
    * @memberof DependentDeductionsApiGet
    */
    readonly effectiveDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof DependentDeductionsApiGet
    */
    readonly currentCOID?: string
    
    /**
    * 
    * @type {number}
    * @memberof DependentDeductionsApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof DependentDeductionsApiGet
    */
    readonly perPage?: number
    
}

/**
 * DependentDeductionsApiGenerated - object-oriented interface
 * @export
 * @class DependentDeductionsApiGenerated
 * @extends {BaseAPI}
 */
export class DependentDeductionsApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get Dependent Deductions
     * @param {DependentDeductionsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DependentDeductionsApiGenerated
     */
    public get(requestParameters: DependentDeductionsApiGetRequest = {}, options?: AxiosRequestConfig) {
        return DependentDeductionsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
