import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './src/app/transloco-loader';

export const translocoConfig =
  provideTransloco({
    config: {
      availableLangs: [
        'en',
        'es'
      ],
      defaultLang: 'en',
      reRenderOnLangChange: true,
      prodMode: false
    },
    loader:TranslocoHttpLoader
  });
