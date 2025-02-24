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
import { EmployeeDeductionBenefitOptionChangeDate } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmpDedBenOptionDateApi - axios parameter creator
 * @export
 */
export const EmpDedBenOptionDateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Employee Deduction Benefit Option Change Date
         * @param {string} [companyId] 
         * @param {string} [deductionCode] 
         * @param {string} [effectiveDate] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (companyId?: string, deductionCode?: string, effectiveDate?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/personnel/v1/emp-deductions-benefit-option-change-date`;
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

            if (deductionCode !== undefined) {
                localVarQueryParameter['deductionCode'] = deductionCode;
            }

            if (effectiveDate !== undefined) {
                localVarQueryParameter['effectiveDate'] = (effectiveDate as any instanceof Date) ?
                    (effectiveDate as any).toISOString() :
                    effectiveDate;
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
                pathTemplate: '/personnel/v1/emp-deductions-benefit-option-change-date',
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
 * EmpDedBenOptionDateApi - functional programming interface
 * @export
 */
export const EmpDedBenOptionDateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmpDedBenOptionDateApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Employee Deduction Benefit Option Change Date
         * @param {EmpDedBenOptionDateApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EmpDedBenOptionDateApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EmployeeDeductionBenefitOptionChangeDate>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.companyId, requestParameters.deductionCode, requestParameters.effectiveDate, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmpDedBenOptionDateApi - factory interface
 * @export
 */
export const EmpDedBenOptionDateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmpDedBenOptionDateApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get Employee Deduction Benefit Option Change Date
         * @param {EmpDedBenOptionDateApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EmpDedBenOptionDateApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<EmployeeDeductionBenefitOptionChangeDate>> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in EmpDedBenOptionDateApi.
 * @export
 * @interface EmpDedBenOptionDateApiGetRequest
 */
export type EmpDedBenOptionDateApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EmpDedBenOptionDateApiGet
    */
    readonly companyId?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmpDedBenOptionDateApiGet
    */
    readonly deductionCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof EmpDedBenOptionDateApiGet
    */
    readonly effectiveDate?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmpDedBenOptionDateApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof EmpDedBenOptionDateApiGet
    */
    readonly perPage?: number
    
}

/**
 * EmpDedBenOptionDateApiGenerated - object-oriented interface
 * @export
 * @class EmpDedBenOptionDateApiGenerated
 * @extends {BaseAPI}
 */
export class EmpDedBenOptionDateApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Personnel Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get Employee Deduction Benefit Option Change Date
     * @param {EmpDedBenOptionDateApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmpDedBenOptionDateApiGenerated
     */
    public get(requestParameters: EmpDedBenOptionDateApiGetRequest = {}, options?: AxiosRequestConfig) {
        return EmpDedBenOptionDateApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
