/*
 * gulpfile.babel.js
 * =================
 * Separate different types of gulp tasks into the 'gulp' folder.
 * All the tasks get required in this file.
 * 
 * To add a new task, create a new task file in the 'gulp/tasks' folder.
 */

import requireDir from 'require-dir';

// Require all tasks in the 'gulp' folder
requireDir('./gulp/tasks', {recurse: false});