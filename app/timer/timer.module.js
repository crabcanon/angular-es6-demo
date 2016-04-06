import timerDirective from './timer.directive';
import TimerService from './timer.service';

// Export timerModule
export default angular.module('timer', [])
  .service(TimerService.name, TimerService)
  .directive('timer', timerDirective);
