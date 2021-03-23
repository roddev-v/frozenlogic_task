import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UnitModel} from "../models/unit.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private readonly http: HttpClient) {
  }

  async getRoot(): Promise<UnitModel> {
    const res = await this.http.get(`${environment.apiUrl}/measurements/root`).toPromise();
    return res as UnitModel;
  }

  async getAll(): Promise<UnitModel[]> {
    const res = await this.http.get(`${environment.apiUrl}/measurements`).toPromise();
    return res as UnitModel[];
  }

  async get(id: number): Promise<UnitModel> {
    const res = await this.http.get(`${environment.apiUrl}/measurements/${id}`).toPromise();
    return res as UnitModel;
  }

  async post(body: UnitModel): Promise<UnitModel> {
    const res = await this.http.post(`${environment.apiUrl}/measurements`, body).toPromise();
    return res as UnitModel;
  }

  async put(body: UnitModel): Promise<UnitModel> {
    const res = await this.http.put(`${environment.apiUrl}/measurements`, body).toPromise();
    return res as UnitModel;
  }

  async delete(id: number): Promise<any> {
    return await this.http.delete(`${environment.apiUrl}/measurements/${id}`).toPromise();
  }
}
