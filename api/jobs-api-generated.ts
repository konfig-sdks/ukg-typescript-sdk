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
import { Jobs } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The jobs endpoint returns information about the UltiPro jobs configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve all jobs configurations
         * @param {string} [countryCode] Job country code.
         * @param {boolean} [isActive] Active status.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConfigurations: async (countryCode?: string, isActive?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
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
            if (countryCode !== undefined) {
                localVarQueryParameter['countryCode'] = countryCode;
            }

            if (isActive !== undefined) {
                localVarQueryParameter['isActive'] = isActive;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The jobs endpoint returns information about the UltiPro jobs configuration. The unique identifier for a jobs configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve a single job configuration
         * @param {string} code Job code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getConfiguration', 'code', code)
            const localVarPath = `/jobs/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code !== undefined ? code : `-code-`)));
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
                pathTemplate: '/jobs/{code}',
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
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * The jobs endpoint returns information about the UltiPro jobs configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve all jobs configurations
         * @param {JobsApiGetAllConfigurationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllConfigurations(requestParameters: JobsApiGetAllConfigurationsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Jobs>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllConfigurations(requestParameters.countryCode, requestParameters.isActive, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The jobs endpoint returns information about the UltiPro jobs configuration. The unique identifier for a jobs configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve a single job configuration
         * @param {JobsApiGetConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfiguration(requestParameters: JobsApiGetConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Jobs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * The jobs endpoint returns information about the UltiPro jobs configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve all jobs configurations
         * @param {JobsApiGetAllConfigurationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConfigurations(requestParameters: JobsApiGetAllConfigurationsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Jobs>> {
            return localVarFp.getAllConfigurations(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * The jobs endpoint returns information about the UltiPro jobs configuration. The unique identifier for a jobs configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
         * @summary Retrieve a single job configuration
         * @param {JobsApiGetConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration(requestParameters: JobsApiGetConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<Jobs> {
            return localVarFp.getConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAllConfigurations operation in JobsApi.
 * @export
 * @interface JobsApiGetAllConfigurationsRequest
 */
export type JobsApiGetAllConfigurationsRequest = {
    
    /**
    * Job country code.
    * @type {string}
    * @memberof JobsApiGetAllConfigurations
    */
    readonly countryCode?: string
    
    /**
    * Active status.
    * @type {boolean}
    * @memberof JobsApiGetAllConfigurations
    */
    readonly isActive?: boolean
    
}

/**
 * Request parameters for getConfiguration operation in JobsApi.
 * @export
 * @interface JobsApiGetConfigurationRequest
 */
export type JobsApiGetConfigurationRequest = {
    
    /**
    * Job code.
    * @type {string}
    * @memberof JobsApiGetConfiguration
    */
    readonly code: string
    
}

/**
 * JobsApiGenerated - object-oriented interface
 * @export
 * @class JobsApiGenerated
 * @extends {BaseAPI}
 */
export class JobsApiGenerated extends BaseAPI {
    /**
     * The jobs endpoint returns information about the UltiPro jobs configurations. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Retrieve all jobs configurations
     * @param {JobsApiGetAllConfigurationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getAllConfigurations(requestParameters: JobsApiGetAllConfigurationsRequest = {}, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getAllConfigurations(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The jobs endpoint returns information about the UltiPro jobs configuration. The unique identifier for a jobs configuration is the code property. Permissions - Ultipro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). 
     * @summary Retrieve a single job configuration
     * @param {JobsApiGetConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getConfiguration(requestParameters: JobsApiGetConfigurationRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
