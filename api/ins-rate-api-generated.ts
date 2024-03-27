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
import { InsuranceRate } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InsRateApi - axios parameter creator
 * @export
 */
export const InsRateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Insurance Rate
         * @param {string} [deductionCode] 
         * @param {string} [effectiveDate] 
         * @param {string} [payFrequency] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInsRate: async (deductionCode?: string, effectiveDate?: string, payFrequency?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/insurance-rate`;
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
            if (deductionCode !== undefined) {
                localVarQueryParameter['deductionCode'] = deductionCode;
            }

            if (effectiveDate !== undefined) {
                localVarQueryParameter['effectiveDate'] = (effectiveDate as any instanceof Date) ?
                    (effectiveDate as any).toISOString() :
                    effectiveDate;
            }

            if (payFrequency !== undefined) {
                localVarQueryParameter['payFrequency'] = payFrequency;
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
                pathTemplate: '/configuration/v1/insurance-rate',
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
 * InsRateApi - functional programming interface
 * @export
 */
export const InsRateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InsRateApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Insurance Rate
         * @param {InsRateApiGetInsRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInsRate(requestParameters: InsRateApiGetInsRateRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InsuranceRate>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInsRate(requestParameters.deductionCode, requestParameters.effectiveDate, requestParameters.payFrequency, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InsRateApi - factory interface
 * @export
 */
export const InsRateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InsRateApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Insurance Rate
         * @param {InsRateApiGetInsRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInsRate(requestParameters: InsRateApiGetInsRateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<InsuranceRate>> {
            return localVarFp.getInsRate(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInsRate operation in InsRateApi.
 * @export
 * @interface InsRateApiGetInsRateRequest
 */
export type InsRateApiGetInsRateRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof InsRateApiGetInsRate
    */
    readonly deductionCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof InsRateApiGetInsRate
    */
    readonly effectiveDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof InsRateApiGetInsRate
    */
    readonly payFrequency?: string
    
    /**
    * 
    * @type {number}
    * @memberof InsRateApiGetInsRate
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof InsRateApiGetInsRate
    */
    readonly perPage?: number
    
}

/**
 * InsRateApiGenerated - object-oriented interface
 * @export
 * @class InsRateApiGenerated
 * @extends {BaseAPI}
 */
export class InsRateApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get Insurance Rate
     * @param {InsRateApiGetInsRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InsRateApiGenerated
     */
    public getInsRate(requestParameters: InsRateApiGetInsRateRequest = {}, options?: AxiosRequestConfig) {
        return InsRateApiFp(this.configuration).getInsRate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
