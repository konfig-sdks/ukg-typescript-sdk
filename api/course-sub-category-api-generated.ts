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
import { CodeObject } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CourseSubCategoryApi - axios parameter creator
 * @export
 */
export const CourseSubCategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * \'Creates a new UKG Pro courseSubCategory configuration.\' 
         * @summary Create a new courseSubCategory configuration
         * @param {CodeObject} codeObject The courseSubCategory code to be written.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfigurationUkgPro: async (codeObject: CodeObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeObject' is not null or undefined
            assertParamExists('createConfigurationUkgPro', 'codeObject', codeObject)
            const localVarPath = `/courseSubCategory`;
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
                requestBody: codeObject,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/courseSubCategory',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(codeObject, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'The courseSubCategory endpoint returns information about the UKG Pro courseSubCategory configurations.\' 
         * @summary Retrieve all courseSubCategory configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/courseSubCategory`;
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
                pathTemplate: '/courseSubCategory',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'Allows the ability update a single courseSubCategory configuration.\' 
         * @summary Update a single courseSubCategory configuration
         * @param {string} code Project code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateConfiguration', 'code', code)
            const localVarPath = `/courseSubCategory/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code !== undefined ? code : `-code-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
                pathTemplate: '/courseSubCategory/{code}',
                httpMethod: 'PUT'
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
 * CourseSubCategoryApi - functional programming interface
 * @export
 */
export const CourseSubCategoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CourseSubCategoryApiAxiosParamCreator(configuration)
    return {
        /**
         * \'Creates a new UKG Pro courseSubCategory configuration.\' 
         * @summary Create a new courseSubCategory configuration
         * @param {CourseSubCategoryApiCreateConfigurationUkgProRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConfigurationUkgPro(requestParameters: CourseSubCategoryApiCreateConfigurationUkgProRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const codeObject: CodeObject = {
                description: requestParameters.description,
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConfigurationUkgPro(codeObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'The courseSubCategory endpoint returns information about the UKG Pro courseSubCategory configurations.\' 
         * @summary Retrieve all courseSubCategory configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeObject>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigurations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * \'Allows the ability update a single courseSubCategory configuration.\' 
         * @summary Update a single courseSubCategory configuration
         * @param {CourseSubCategoryApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(requestParameters: CourseSubCategoryApiUpdateConfigurationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(requestParameters.code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CourseSubCategoryApi - factory interface
 * @export
 */
export const CourseSubCategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CourseSubCategoryApiFp(configuration)
    return {
        /**
         * \'Creates a new UKG Pro courseSubCategory configuration.\' 
         * @summary Create a new courseSubCategory configuration
         * @param {CourseSubCategoryApiCreateConfigurationUkgProRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfigurationUkgPro(requestParameters: CourseSubCategoryApiCreateConfigurationUkgProRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createConfigurationUkgPro(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * \'The courseSubCategory endpoint returns information about the UKG Pro courseSubCategory configurations.\' 
         * @summary Retrieve all courseSubCategory configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurations(options?: AxiosRequestConfig): AxiosPromise<Array<CodeObject>> {
            return localVarFp.getConfigurations(options).then((request) => request(axios, basePath));
        },
        /**
         * \'Allows the ability update a single courseSubCategory configuration.\' 
         * @summary Update a single courseSubCategory configuration
         * @param {CourseSubCategoryApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(requestParameters: CourseSubCategoryApiUpdateConfigurationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConfigurationUkgPro operation in CourseSubCategoryApi.
 * @export
 * @interface CourseSubCategoryApiCreateConfigurationUkgProRequest
 */
export type CourseSubCategoryApiCreateConfigurationUkgProRequest = {
    
} & CodeObject

/**
 * Request parameters for updateConfiguration operation in CourseSubCategoryApi.
 * @export
 * @interface CourseSubCategoryApiUpdateConfigurationRequest
 */
export type CourseSubCategoryApiUpdateConfigurationRequest = {
    
    /**
    * Project code.
    * @type {string}
    * @memberof CourseSubCategoryApiUpdateConfiguration
    */
    readonly code: string
    
}

/**
 * CourseSubCategoryApiGenerated - object-oriented interface
 * @export
 * @class CourseSubCategoryApiGenerated
 * @extends {BaseAPI}
 */
export class CourseSubCategoryApiGenerated extends BaseAPI {
    /**
     * \'Creates a new UKG Pro courseSubCategory configuration.\' 
     * @summary Create a new courseSubCategory configuration
     * @param {CourseSubCategoryApiCreateConfigurationUkgProRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseSubCategoryApiGenerated
     */
    public createConfigurationUkgPro(requestParameters: CourseSubCategoryApiCreateConfigurationUkgProRequest, options?: AxiosRequestConfig) {
        return CourseSubCategoryApiFp(this.configuration).createConfigurationUkgPro(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'The courseSubCategory endpoint returns information about the UKG Pro courseSubCategory configurations.\' 
     * @summary Retrieve all courseSubCategory configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseSubCategoryApiGenerated
     */
    public getConfigurations(options?: AxiosRequestConfig) {
        return CourseSubCategoryApiFp(this.configuration).getConfigurations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'Allows the ability update a single courseSubCategory configuration.\' 
     * @summary Update a single courseSubCategory configuration
     * @param {CourseSubCategoryApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseSubCategoryApiGenerated
     */
    public updateConfiguration(requestParameters: CourseSubCategoryApiUpdateConfigurationRequest, options?: AxiosRequestConfig) {
        return CourseSubCategoryApiFp(this.configuration).updateConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}