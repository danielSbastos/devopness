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


import { PipelineTriggerWhen } from './pipeline-trigger-when';

/**
 * 
 * @export
 * @interface PipelineUpdate
 */
export interface PipelineUpdate {
    /**
     * The unique ID of the given pipeline.
     * @type {number}
     * @memberof PipelineUpdate
     */
    id: number;
    /**
     * The pipeline\'s name. Must be at least 3 characters. Must not be greater than 80 characters.
     * @type {string}
     * @memberof PipelineUpdate
     */
    name: string;
    /**
     * Maximum number of actions that can run in parallel for this pipeline. `0` means no limit of simultaneous actions. `1` means just a single action will be started at a time to run this pipeline. Must be between 0 and 65535.
     * @type {number}
     * @memberof PipelineUpdate
     */
    max_parallel_actions?: number;
    /**
     * 
     * @type {PipelineTriggerWhen}
     * @memberof PipelineUpdate
     */
    trigger_when?: PipelineTriggerWhen | null;
}

