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
import { EarningsHistoryBaseElements } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EarningsHistoryApi - axios parameter creator
 * @export
 */
export const EarningsHistoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Payroll Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Earnings History Base Elements
         * @param {string} [companyID] 
         * @param {string} [earningCode] 
         * @param {string} [employeeID] 
         * @param {string} [employeeNumber] 
         * @param {string} [payDate] 
         * @param {string} [payGroup] 
         * @param {string} [periodControl] 
         * @param {string} [startPerControl] 
         * @param {string} [endPerControl] 
         * @param {boolean} [includeInDeferredCompensation] 
         * @param {boolean} [includeInDeferredCompensationHours] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInsRate: async (companyID?: string, earningCode?: string, employeeID?: string, employeeNumber?: string, payDate?: string, payGroup?: string, periodControl?: string, startPerControl?: string, endPerControl?: string, includeInDeferredCompensation?: boolean, includeInDeferredCompensationHours?: boolean, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payroll/v1/earnings-history-base-elements`;
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
            if (companyID !== undefined) {
                localVarQueryParameter['companyID'] = companyID;
            }

            if (earningCode !== undefined) {
                localVarQueryParameter['earningCode'] = earningCode;
            }

            if (employeeID !== undefined) {
                localVarQueryParameter['employeeID'] = employeeID;
            }

            if (employeeNumber !== undefined) {
                localVarQueryParameter['employeeNumber'] = employeeNumber;
            }

            if (payDate !== undefined) {
                localVarQueryParameter['payDate'] = (payDate as any instanceof Date) ?
                    (payDate as any).toISOString() :
                    payDate;
            }

            if (payGroup !== undefined) {
                localVarQueryParameter['payGroup'] = payGroup;
            }

            if (periodControl !== undefined) {
                localVarQueryParameter['periodControl'] = periodControl;
            }

            if (startPerControl !== undefined) {
                localVarQueryParameter['startPerControl'] = startPerControl;
            }

            if (endPerControl !== undefined) {
                localVarQueryParameter['endPerControl'] = endPerControl;
            }

            if (includeInDeferredCompensation !== undefined) {
                localVarQueryParameter['includeInDeferredCompensation'] = includeInDeferredCompensation;
            }

            if (includeInDeferredCompensationHours !== undefined) {
                localVarQueryParameter['includeInDeferredCompensationHours'] = includeInDeferredCompensationHours;
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
                pathTemplate: '/payroll/v1/earnings-history-base-elements',
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
 * EarningsHistoryApi - functional programming interface
 * @export
 */
export const EarningsHistoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EarningsHistoryApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Payroll Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Earnings History Base Elements
         * @param {EarningsHistoryApiGetInsRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInsRate(requestParameters: EarningsHistoryApiGetInsRateRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EarningsHistoryBaseElements>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInsRate(requestParameters.companyID, requestParameters.earningCode, requestParameters.employeeID, requestParameters.employeeNumber, requestParameters.payDate, requestParameters.payGroup, requestParameters.periodControl, requestParameters.startPerControl, requestParameters.endPerControl, requestParameters.includeInDeferredCompensation, requestParameters.includeInDeferredCompensationHours, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EarningsHistoryApi - factory interface
 * @export
 */
export const EarningsHistoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EarningsHistoryApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Payroll Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Earnings History Base Elements
         * @param {EarningsHistoryApiGetInsRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInsRate(requestParameters: EarningsHistoryApiGetInsRateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<EarningsHistoryBaseElements>> {
            return localVarFp.getInsRate(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInsRate operation in EarningsHistoryApi.
 * @export
 * @interface EarningsHistoryApiGetInsRateRequest
 */
export type EarningsHistoryApiGetInsRateRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly companyID?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly earningCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly employeeID?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly employeeNumber?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly payDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly payGroup?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly periodControl?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly startPerControl?: string
    
    /**
    * 
    * @type {string}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly endPerControl?: string
    
    /**
    * 
    * @type {boolean}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly includeInDeferredCompensation?: boolean
    
    /**
    * 
    * @type {boolean}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly includeInDeferredCompensationHours?: boolean
    
    /**
    * 
    * @type {number}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EarningsHistoryApiGetInsRate
    */
    readonly perPage?: number
    
}

/**
 * EarningsHistoryApiGenerated - object-oriented interface
 * @export
 * @class EarningsHistoryApiGenerated
 * @extends {BaseAPI}
 */
export class EarningsHistoryApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Payroll Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get Earnings History Base Elements
     * @param {EarningsHistoryApiGetInsRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EarningsHistoryApiGenerated
     */
    public getInsRate(requestParameters: EarningsHistoryApiGetInsRateRequest = {}, options?: AxiosRequestConfig) {
        return EarningsHistoryApiFp(this.configuration).getInsRate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}