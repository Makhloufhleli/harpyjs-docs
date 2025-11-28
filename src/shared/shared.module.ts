import { Global, Module } from '@nestjs/common';
import { NavigationService } from './navigation.service';

/**
 * Global module that provides shared documentation navigation service
 */
@Global()
@Module({
  providers: [NavigationService],
  exports: [NavigationService],
})
export class SharedModule {}
