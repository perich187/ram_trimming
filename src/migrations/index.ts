import * as migration_20260409_155721_initial from './20260409_155721_initial';
import * as migration_20260527_122536 from './20260527_122536';
import * as migration_20260528_globals from './20260528_globals';
import * as migration_20260528_form_submissions from './20260528_form_submissions';

export const migrations = [
  {
    up: migration_20260409_155721_initial.up,
    down: migration_20260409_155721_initial.down,
    name: '20260409_155721_initial',
  },
  {
    up: migration_20260527_122536.up,
    down: migration_20260527_122536.down,
    name: '20260527_122536'
  },
  {
    up: migration_20260528_globals.up,
    down: migration_20260528_globals.down,
    name: '20260528_globals'
  },
  {
    up: migration_20260528_form_submissions.up,
    down: migration_20260528_form_submissions.down,
    name: '20260528_form_submissions'
  },
];
