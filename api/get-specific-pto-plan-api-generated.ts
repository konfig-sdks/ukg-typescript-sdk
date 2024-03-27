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
import { PtoPlans } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GetSpecificPtoPlanApi - axios parameter creator
 * @export
 */
export const GetSpecificPtoPlanApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns information about an UltiPro employees PTO Plans. Work flow or Approvers is not supported. Permissions - Ultipro service account must have \"View\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get a specific pto-plan
         * @param {string} companyId Company Identifier
         * @param {string} employeeId Employee Identifier
         * @param {string} ptoPlan PTO Plan Identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        info: async (companyId: string, employeeId: string, ptoPlan: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('info', 'companyId', companyId)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('info', 'employeeId', employeeId)
            // verify required parameter 'ptoPlan' is not null or undefined
            assertParamExists('info', 'ptoPlan', ptoPlan)
            const localVarPath = `/personnel/v1/companies/{companyId}/employees/{employeeId}/pto-plans/{ptoPlan}`
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId !== undefined ? companyId : `-companyId-`)))
                .replace(`{${"employeeId"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employeeId-`)))
                .replace(`{${"ptoPlan"}}`, encodeURIComponent(String(ptoPlan !== undefined ? ptoPlan : `-ptoPlan-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/companies/{companyId}/employees/{employeeId}/pto-plans/{ptoPlan}',
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
 * GetSpecificPtoPlanApi - functional programming interface
 * @export
 */
export const GetSpecificPtoPlanApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GetSpecificPtoPlanApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns information about an UltiPro employees PTO Plans. Work flow or Approvers is not supported. Permissions - Ultipro service account must have \"View\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get a specific pto-plan
         * @param {GetSpecificPtoPlanApiInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async info(requestParameters: GetSpecificPtoPlanApiInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PtoPlans>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.info(requestParameters.companyId, requestParameters.employeeId, requestParameters.ptoPlan, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GetSpecificPtoPlanApi - factory interface
 * @export
 */
export const GetSpecificPtoPlanApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GetSpecificPtoPlanApiFp(configuration)
    return {
        /**
         * Returns information about an UltiPro employees PTO Plans. Work flow or Approvers is not supported. Permissions - Ultipro service account must have \"View\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Get a specific pto-plan
         * @param {GetSpecificPtoPlanApiInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        info(requestParameters: GetSpecificPtoPlanApiInfoRequest, options?: AxiosRequestConfig): AxiosPromise<Array<PtoPlans>> {
            return localVarFp.info(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for info operation in GetSpecificPtoPlanApi.
 * @export
 * @interface GetSpecificPtoPlanApiInfoRequest
 */
export type GetSpecificPtoPlanApiInfoRequest = {
    
    /**
    * Company Identifier
    * @type {string}
    * @memberof GetSpecificPtoPlanApiInfo
    */
    readonly companyId: string
    
    /**
    * Employee Identifier
    * @type {string}
    * @memberof GetSpecificPtoPlanApiInfo
    */
    readonly employeeId: string
    
    /**
    * PTO Plan Identifier
    * @type {string}
    * @memberof GetSpecificPtoPlanApiInfo
    */
    readonly ptoPlan: string
    
}

/**
 * GetSpecificPtoPlanApiGenerated - object-oriented interface
 * @export
 * @class GetSpecificPtoPlanApiGenerated
 * @extends {BaseAPI}
 */
export class GetSpecificPtoPlanApiGenerated extends BaseAPI {
    /**
     * Returns information about an UltiPro employees PTO Plans. Work flow or Approvers is not supported. Permissions - Ultipro service account must have \"View\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Get a specific pto-plan
     * @param {GetSpecificPtoPlanApiInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GetSpecificPtoPlanApiGenerated
     */
    public info(requestParameters: GetSpecificPtoPlanApiInfoRequest, options?: AxiosRequestConfig) {
        return GetSpecificPtoPlanApiFp(this.configuration).info(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}