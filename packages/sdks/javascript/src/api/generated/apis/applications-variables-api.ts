/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Variable } from '../../generated/models';
import { VariableApplicationCreate } from '../../generated/models';
import { VariableRelation } from '../../generated/models';

/**
 * ApplicationsVariablesApiService - Auto-generated
 */
export class ApplicationsVariablesApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new variable linked to an application
     * @param {number} applicationId The ID of the application.
     * @param {VariableApplicationCreate} variableApplicationCreate A JSON object containing the resource data
     */
    public async addApplicationVariable(applicationId: number, variableApplicationCreate: VariableApplicationCreate): Promise<ApiResponse<Variable>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'addApplicationVariable');
        }
        if (variableApplicationCreate === null || variableApplicationCreate === undefined) {
            throw new ArgumentNullException('variableApplicationCreate', 'addApplicationVariable');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/variables' + (queryString? `?${queryString}` : '');

        const response = await this.post <Variable, VariableApplicationCreate>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), variableApplicationCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of variables belonging to an application
     * @param {number} applicationId The ID of the application.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listApplicationVariables(applicationId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<VariableRelation>>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'listApplicationVariables');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/applications/{application_id}/variables' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<VariableRelation>>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }
}
