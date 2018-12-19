import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { DemonDlcSettingsContainerComponent as DDSCC } from '../../compendium/containers/demon-dlc-settings.component';
import { FusionDataService } from '../fusion-data.service';

@Component({
  selector: 'app-demon-dlc-settings-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-demon-dlc-settings
      [dlcDemons]="dlcDemons"
      [appTitle]="'Persona Q2'"
      [dlcTitle]="'Included DLC Personas'"
      (toggledName)="toggleName($event)">
    </app-demon-dlc-settings>
  `
})
export class DemonDlcSettingsContainerComponent extends DDSCC {
  constructor(
    private changeDetector: ChangeDetectorRef,
    private fusionDataService: FusionDataService
  ) {
    super(changeDetector, fusionDataService);
  }
}
