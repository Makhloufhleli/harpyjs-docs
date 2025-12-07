import { Global, Module } from '@nestjs/common';
import { RouterModule } from '@harpy-js/core';

/**
 * Legacy shared module kept for compatibility. It imports the core RouterModule
 * so the application's feature modules can still import `SharedModule` while
 * the actual `NavigationService` provider comes from the core package.
 */
@Global()
@Module({
  imports: [RouterModule],
  // Re-export the RouterModule so providers (NavigationService) are available
  // to any module that imports `SharedModule` (backwards compatibility).
  exports: [RouterModule],
})
export class SharedModule {}
