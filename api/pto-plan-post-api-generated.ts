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
import { MultiStatusResponse } from '../models';
// @ts-ignore
import { PtoPlansBodyInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PtoPlanPostApi - axios parameter creator
 * @export
 */
export const PtoPlanPostApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new UltiPro PTO plan record. Array of objects is permitted for multi-records support. Work Flow or Approvers is not supported. Permissions - Ultipro service account must have \"Add\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Create A PTO Plan
         * @param {Array<PtoPlansBodyInner>} ptoPlansBodyInner The pto-plan to be written
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ultiproRecord: async (ptoPlansBodyInner: Array<PtoPlansBodyInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ptoPlansBodyInner' is not null or undefined
            assertParamExists('ultiproRecord', 'ptoPlansBodyInner', ptoPlansBodyInner)
            const localVarPath = `/personnel/v1/pto-plans`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OauthSecurity required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OauthSecurity", ["recruiting.domain.third-party-job-board-integrations.auto-feed"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: ptoPlansBodyInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/personnel/v1/pto-plans',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(ptoPlansBodyInner, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PtoPlanPostApi - functional programming interface
 * @export
 */
export const PtoPlanPostApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PtoPlanPostApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new UltiPro PTO plan record. Array of objects is permitted for multi-records support. Work Flow or Approvers is not supported. Permissions - Ultipro service account must have \"Add\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Create A PTO Plan
         * @param {PtoPlanPostApiUltiproRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ultiproRecord(requestParameters: PtoPlanPostApiUltiproRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiStatusResponse>> {
            const ptoPlansBodyInner: Array<PtoPlansBodyInner> = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.ultiproRecord(ptoPlansBodyInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PtoPlanPostApi - factory interface
 * @export
 */
export const PtoPlanPostApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PtoPlanPostApiFp(configuration)
    return {
        /**
         * Creates a new UltiPro PTO plan record. Array of objects is permitted for multi-records support. Work Flow or Approvers is not supported. Permissions - Ultipro service account must have \"Add\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Create A PTO Plan
         * @param {PtoPlanPostApiUltiproRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ultiproRecord(requestParameters: PtoPlanPostApiUltiproRecordRequest, options?: AxiosRequestConfig): AxiosPromise<MultiStatusResponse> {
            return localVarFp.ultiproRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for ultiproRecord operation in PtoPlanPostApi.
 * @export
 * @interface PtoPlanPostApiUltiproRecordRequest
 */
export type PtoPlanPostApiUltiproRecordRequest = Array<PtoPlansBodyInner>

/**
 * PtoPlanPostApiGenerated - object-oriented interface
 * @export
 * @class PtoPlanPostApiGenerated
 * @extends {BaseAPI}
 */
export class PtoPlanPostApiGenerated extends BaseAPI {
    /**
     * Creates a new UltiPro PTO plan record. Array of objects is permitted for multi-records support. Work Flow or Approvers is not supported. Permissions - Ultipro service account must have \"Add\" role for the \"PTO Plan Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Create A PTO Plan
     * @param {PtoPlanPostApiUltiproRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PtoPlanPostApiGenerated
     */
    public ultiproRecord(requestParameters: PtoPlanPostApiUltiproRecordRequest, options?: AxiosRequestConfig) {
        return PtoPlanPostApiFp(this.configuration).ultiproRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
