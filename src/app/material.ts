import { MatButtonModule } from '@angular/material/button';
// import { MatIcon } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule(
{
    imports:[MatButtonModule,MatToolbarModule,MatIconModule],
    exports:[MatButtonModule,MatToolbarModule,MatIconModule],
})

export class MaterialModule {}
