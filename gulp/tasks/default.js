"use strict";

import gulp	            from 'gulp';
import browserSync      from 'browser-sync';
import config	        from '../config';

gulp.task('serve', function(){
	const bs = browserSync.create();
	bs.init(config.browserSync);
});

gulp.task('default', ['serve']);