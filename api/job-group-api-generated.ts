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
import { JobGroupDetail } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobGroupApi - axios parameter creator
 * @export
 */
export const JobGroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Get All Job Groups
         * @param {string} [jobGroupCode] 
         * @param {string} [jobGroupCountryCode] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (jobGroupCode?: string, jobGroupCountryCode?: string, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/jobgroup`;
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
            if (jobGroupCode !== undefined) {
                localVarQueryParameter['jobGroupCode'] = jobGroupCode;
            }

            if (jobGroupCountryCode !== undefined) {
                localVarQueryParameter['jobGroupCountryCode'] = jobGroupCountryCode;
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
                pathTemplate: '/configuration/v1/jobgroup',
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
 * JobGroupApi - functional programming interface
 * @export
 */
export const JobGroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobGroupApiAxiosParamCreator(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Get All Job Groups
         * @param {JobGroupApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: JobGroupApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<JobGroupDetail>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.jobGroupCode, requestParameters.jobGroupCountryCode, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobGroupApi - factory interface
 * @export
 */
export const JobGroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobGroupApiFp(configuration)
    return {
        /**
         * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
         * @summary Get All Job Groups
         * @param {JobGroupApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: JobGroupApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<JobGroupDetail>> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in JobGroupApi.
 * @export
 * @interface JobGroupApiGetRequest
 */
export type JobGroupApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof JobGroupApiGet
    */
    readonly jobGroupCode?: string
    
    /**
    * 
    * @type {string}
    * @memberof JobGroupApiGet
    */
    readonly jobGroupCountryCode?: string
    
    /**
    * 
    * @type {number}
    * @memberof JobGroupApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof JobGroupApiGet
    */
    readonly perPage?: number
    
}

/**
 * JobGroupApiGenerated - object-oriented interface
 * @export
 * @class JobGroupApiGenerated
 * @extends {BaseAPI}
 */
export class JobGroupApiGenerated extends BaseAPI {
    /**
     * If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password})
     * @summary Get All Job Groups
     * @param {JobGroupApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobGroupApiGenerated
     */
    public get(requestParameters: JobGroupApiGetRequest = {}, options?: AxiosRequestConfig) {
        return JobGroupApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
