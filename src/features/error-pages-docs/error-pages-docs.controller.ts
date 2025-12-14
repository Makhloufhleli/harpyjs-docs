import { Controller, Get, Req } from '@nestjs/common';
import { JsxRender, NavigationService, type MetaOptions } from '@harpy-js/core';
import ErrorPagesPage from './views/error-pages-page';
import DashboardLayout from 'src/layouts/dashboard-layout';

import type { FastifyRequest } from 'fastify';
import { getDictionary } from '../../i18n/get-dictionary';
import { CurrentLocale } from '@harpy-js/i18n';
import { ErrorPagesDocsService } from './error-pages-docs.service';

interface ErrorPagesDocData {
  sections: any;
  dict: any;
  locale: string;
  activeItemId: string | null;
  metadata: MetaOptions;
}

@Controller('docs')
export class ErrorPagesDocsController {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly errorPagesDocsService: ErrorPagesDocsService,
  ) {}

  @Get('error-pages')
  @JsxRender(ErrorPagesPage, {
    layout: DashboardLayout,
    // Meta function receives the data returned from the controller method
    // The 'data' parameter contains everything you return from getErrorPagesDoc()
    meta: (req, data: ErrorPagesDocData) => data.metadata,
  })
  async getErrorPagesDoc(
    @Req() req: FastifyRequest,
    @CurrentLocale() locale: string,
  ) {
    const currentPath = (req.originalUrl || req.url) ?? '/';

    const sections = this.navigationService.getSectionsForRoute(currentPath);
    const dict = await getDictionary(locale);
    const activeItemId = this.navigationService.getActiveItemId(currentPath);

    // Fetch dynamic metadata from service
    // This could come from database, external API, or any async source
    const metadata = this.errorPagesDocsService.getErrorPageMetaData();

    return {
      sections,
      dict,
      locale,
      activeItemId,
      metadata, // Include metadata in returned data
    };
  }
}
