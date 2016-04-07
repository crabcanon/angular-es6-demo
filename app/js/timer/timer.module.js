import timerDirective from './timer.directive';
import timerService from './timer.service';

// Export timerModule
export default angular.module('timer', [])
  .service('TimerService', timerService)
  .directive('timer', timerDirective);
