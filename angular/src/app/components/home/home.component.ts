import {Component, OnInit} from '@angular/core';
import {UnitModel} from "../../models/unit.model";
import {MeasurementService} from "../../services/measurement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rootUnit: UnitModel;
  units: UnitModel[] = [];
  toEdit: UnitModel;
  toAdd: UnitModel = new UnitModel();

  constructor(private readonly measurementService: MeasurementService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getUnits();
  }

  async getUnits(): Promise<void> {
    this.rootUnit = await this.measurementService.getRoot();
    this.units = await this.measurementService.getAll();
  }

  getParent(parentId: number): UnitModel {
    return this.units.find(u => u.id === parentId) as UnitModel;
  }

  edit(unit: UnitModel): void {
    this.toEdit = {...unit} as UnitModel;
  }

  cancel(): void {
    this.toEdit = undefined;
  }

  async update(): Promise<void> {
    await this.measurementService.put(this.toEdit);
    this.toEdit = undefined;
    await this.getUnits();
  }

  async delete(unit: UnitModel): Promise<void> {
    await this.measurementService.delete(unit.id);
  }

  async add(): Promise<void> {
    if (!this.toAdd) {
      return;
    }
    await this.measurementService.post(this.toAdd);
    await this.getUnits();
  }

  reset() {
    this.toAdd = new UnitModel();
  }
}
