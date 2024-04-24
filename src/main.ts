import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

let imgPath = "https://image.tmdb.org/t/p/w200";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export {imgPath}