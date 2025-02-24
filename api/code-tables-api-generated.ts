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
import { CodeTablesGET } from '../models';
// @ts-ignore
import { CodeTablesPOST } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CodeTablesApi - axios parameter creator
 * @export
 */
export const CodeTablesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new UKG Pro Code table configuration, Array of objects is permitted for multi-records support. Permissions - UKG Pro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). There is a white list of code tables that we allow to be written, only these codes can be created: Allergy, Awardtype, Careerprovider, Childsupporttype, Cobrastatus, Coursecategory, Coursedeliverymet, Coursesubcategory, Disability, Educlevel, Educmajor, Emptype, Jobfamily, Licensetype, Loantype, Maritalstatus, Military, Militaryera, Otherphone, Prefix, Proficiency, Project, Property, School, Skills, Suffix, Termtype, Wellness.
         * @summary Post Code Tables information
         * @param {Array<CodeTablesPOST>} codeTablesPOST 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCodeTables: async (codeTablesPOST: Array<CodeTablesPOST>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeTablesPOST' is not null or undefined
            assertParamExists('createCodeTables', 'codeTablesPOST', codeTablesPOST)
            const localVarPath = `/configuration/v1/code-tables`;
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
                requestBody: codeTablesPOST,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/configuration/v1/code-tables',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(codeTablesPOST, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * UKG Pro codes table lookup, will contain list of all tables with HATEOAS links to make a subsequent call to get all the codes for that table. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Get Code Tables information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/configuration/v1/code-tables`;
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
                pathTemplate: '/configuration/v1/code-tables',
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
 * CodeTablesApi - functional programming interface
 * @export
 */
export const CodeTablesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CodeTablesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new UKG Pro Code table configuration, Array of objects is permitted for multi-records support. Permissions - UKG Pro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). There is a white list of code tables that we allow to be written, only these codes can be created: Allergy, Awardtype, Careerprovider, Childsupporttype, Cobrastatus, Coursecategory, Coursedeliverymet, Coursesubcategory, Disability, Educlevel, Educmajor, Emptype, Jobfamily, Licensetype, Loantype, Maritalstatus, Military, Militaryera, Otherphone, Prefix, Proficiency, Project, Property, School, Skills, Suffix, Termtype, Wellness.
         * @summary Post Code Tables information
         * @param {CodeTablesApiCreateCodeTablesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCodeTables(requestParameters: CodeTablesApiCreateCodeTablesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: object; }>> {
            const codeTablesPOST: Array<CodeTablesPOST> = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCodeTables(codeTablesPOST, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * UKG Pro codes table lookup, will contain list of all tables with HATEOAS links to make a subsequent call to get all the codes for that table. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Get Code Tables information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeTablesGET>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CodeTablesApi - factory interface
 * @export
 */
export const CodeTablesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CodeTablesApiFp(configuration)
    return {
        /**
         * Creates a new UKG Pro Code table configuration, Array of objects is permitted for multi-records support. Permissions - UKG Pro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). There is a white list of code tables that we allow to be written, only these codes can be created: Allergy, Awardtype, Careerprovider, Childsupporttype, Cobrastatus, Coursecategory, Coursedeliverymet, Coursesubcategory, Disability, Educlevel, Educmajor, Emptype, Jobfamily, Licensetype, Loantype, Maritalstatus, Military, Militaryera, Otherphone, Prefix, Proficiency, Project, Property, School, Skills, Suffix, Termtype, Wellness.
         * @summary Post Code Tables information
         * @param {CodeTablesApiCreateCodeTablesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCodeTables(requestParameters: CodeTablesApiCreateCodeTablesRequest, options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: object; }> {
            return localVarFp.createCodeTables(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * UKG Pro codes table lookup, will contain list of all tables with HATEOAS links to make a subsequent call to get all the codes for that table. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
         * @summary Get Code Tables information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(options?: AxiosRequestConfig): AxiosPromise<Array<CodeTablesGET>> {
            return localVarFp.getInfo(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCodeTables operation in CodeTablesApi.
 * @export
 * @interface CodeTablesApiCreateCodeTablesRequest
 */
export type CodeTablesApiCreateCodeTablesRequest = Array<CodeTablesPOST>

/**
 * CodeTablesApiGenerated - object-oriented interface
 * @export
 * @class CodeTablesApiGenerated
 * @extends {BaseAPI}
 */
export class CodeTablesApiGenerated extends BaseAPI {
    /**
     * Creates a new UKG Pro Code table configuration, Array of objects is permitted for multi-records support. Permissions - UKG Pro service account must have \"Add\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}). There is a white list of code tables that we allow to be written, only these codes can be created: Allergy, Awardtype, Careerprovider, Childsupporttype, Cobrastatus, Coursecategory, Coursedeliverymet, Coursesubcategory, Disability, Educlevel, Educmajor, Emptype, Jobfamily, Licensetype, Loantype, Maritalstatus, Military, Militaryera, Otherphone, Prefix, Proficiency, Project, Property, School, Skills, Suffix, Termtype, Wellness.
     * @summary Post Code Tables information
     * @param {CodeTablesApiCreateCodeTablesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeTablesApiGenerated
     */
    public createCodeTables(requestParameters: CodeTablesApiCreateCodeTablesRequest, options?: AxiosRequestConfig) {
        return CodeTablesApiFp(this.configuration).createCodeTables(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * UKG Pro codes table lookup, will contain list of all tables with HATEOAS links to make a subsequent call to get all the codes for that table. If no pagination parameters specified, the default/max is applied. Permissions - UKG Pro service account must have \"View\" role for the \"Company Configuration Integration\" Web Service. Headers - US-Customer-Api-Key, Authorization (base64 encoded {username}:{password}).
     * @summary Get Code Tables information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeTablesApiGenerated
     */
    public getInfo(options?: AxiosRequestConfig) {
        return CodeTablesApiFp(this.configuration).getInfo(options).then((request) => request(this.axios, this.basePath));
    }
}
