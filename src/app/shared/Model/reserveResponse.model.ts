import { IReserve } from './reserveRequest.model';

export interface IReserveResponse {
    status: number,
    response: IReserve
}