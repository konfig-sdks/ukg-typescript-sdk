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
import { OptionRate } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OptionRateApi - axios parameter creator
 * @export
 */
export const OptionRateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).  Effective date parameter gets effective record as of the given date. If it\'s not passed, effected date is defaulted to current date.  Deduction code parameter can take in multiple deduction codes separated by coma. ex: [DEN, MED, VIS] .  Pay frequency parameter can take in multiple pay frequencies separated by coma. ex: [B, M] . 
         * @summary Get Option Rate Data
         * @param {string} [deductionCode] 
         * @param {string} [benefitOption] 
         * @param {string} [effectiveDate] 
         * @param {string} [payFrequency] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getData: async (deductionCode?: string, benefitOption?: string, effectiveDate?: string, payFrequency?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/option-rate`;
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

            if (benefitOption !== undefined) {
                localVarQueryParameter['benefitOption'] = benefitOption;
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
                pathTemplate: '/configuration/v1/option-rate',
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
 * OptionRateApi - functional programming interface
 * @export
 */
export const OptionRateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OptionRateApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).  Effective date parameter gets effective record as of the given date. If it\'s not passed, effected date is defaulted to current date.  Deduction code parameter can take in multiple deduction codes separated by coma. ex: [DEN, MED, VIS] .  Pay frequency parameter can take in multiple pay frequencies separated by coma. ex: [B, M] . 
         * @summary Get Option Rate Data
         * @param {OptionRateApiGetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getData(requestParameters: OptionRateApiGetDataRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OptionRate>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getData(requestParameters.deductionCode, requestParameters.benefitOption, requestParameters.effectiveDate, requestParameters.payFrequency, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OptionRateApi - factory interface
 * @export
 */
export const OptionRateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OptionRateApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).  Effective date parameter gets effective record as of the given date. If it\'s not passed, effected date is defaulted to current date.  Deduction code parameter can take in multiple deduction codes separated by coma. ex: [DEN, MED, VIS] .  Pay frequency parameter can take in multiple pay frequencies separated by coma. ex: [B, M] . 
         * @summary Get Option Rate Data
         * @param {OptionRateApiGetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getData(requestParameters: OptionRateApiGetDataRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<OptionRate>> {
            return localVarFp.getData(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getData operation in OptionRateApi.
 * @export
 * @interface OptionRateApiGetDataRequest
 */
export type OptionRateApiGetDataRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof OptionRateApiGetData
    */
    readonly deductionCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof OptionRateApiGetData
    */
    readonly benefitOption?: string
    
    /**
    * 
    * @type {string}
    * @memberof OptionRateApiGetData
    */
    readonly effectiveDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof OptionRateApiGetData
    */
    readonly payFrequency?: string
    
    /**
    * 
    * @type {number}
    * @memberof OptionRateApiGetData
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof OptionRateApiGetData
    */
    readonly perPage?: number
    
}

/**
 * OptionRateApiGenerated - object-oriented interface
 * @export
 * @class OptionRateApiGenerated
 * @extends {BaseAPI}
 */
export class OptionRateApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \\\"View\\\" role for the \\\"Company Configuration Integration\\\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).  Effective date parameter gets effective record as of the given date. If it\'s not passed, effected date is defaulted to current date.  Deduction code parameter can take in multiple deduction codes separated by coma. ex: [DEN, MED, VIS] .  Pay frequency parameter can take in multiple pay frequencies separated by coma. ex: [B, M] . 
     * @summary Get Option Rate Data
     * @param {OptionRateApiGetDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OptionRateApiGenerated
     */
    public getData(requestParameters: OptionRateApiGetDataRequest = {}, options?: AxiosRequestConfig) {
        return OptionRateApiFp(this.configuration).getData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
