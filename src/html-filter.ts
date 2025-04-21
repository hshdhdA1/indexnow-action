// src/html-filter.ts
import { Filter, URLItem } from './sitemap-filter';

export default class HtmlFilter implements Filter {
  filter(urls: URLItem[]): URLItem[] {
    return urls.filter((urlItem) => {
      const pathname = urlItem.loc.pathname.toLowerCase();
      return pathname.endsWith('.html'); // 严格匹配路径以 .html 结尾
    });
  }
}
