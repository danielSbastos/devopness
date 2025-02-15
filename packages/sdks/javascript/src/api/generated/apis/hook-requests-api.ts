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
import { HookRequest } from '../../generated/models';

/**
 * HookRequestsApiService - Auto-generated
 */
export class HookRequestsApiService extends ApiBaseService {
    /**
     * 
     * @summary Get a hook request by ID
     * @param {string} hookRequestId The ID of the hook request.
     */
    public async getHookRequest(hookRequestId: string): Promise<ApiResponse<HookRequest>> {
        if (hookRequestId === null || hookRequestId === undefined) {
            throw new ArgumentNullException('hookRequestId', 'getHookRequest');
        }
        
        let queryString = '';

        const requestUrl = '/hook-requests/{hook_request_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <HookRequest>(requestUrl.replace(`{${"hook_request_id"}}`, encodeURIComponent(String(hookRequestId))));
        return new ApiResponse(response);
    }
}
