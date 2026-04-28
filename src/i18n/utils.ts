import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getAlternateLangPath(currentPath: string, currentLang: Lang): string {
  if (currentLang === 'es') {
    return currentPath === '/' ? '/en' : `/en${currentPath}`;
  }
  const withoutEn = currentPath.replace(/^\/en/, '');
  return withoutEn === '' ? '/' : withoutEn;
}
