import * as migration_20260409_155721_initial from './20260409_155721_initial';
import * as migration_20260527_122536 from './20260527_122536';
import * as migration_20260528_globals from './20260528_globals';
import * as migration_20260528_form_submissions from './20260528_form_submissions';
import * as migration_20260529_rename_enquiries from './20260529_rename_enquiries';
import * as migration_20260530_service_cards from './20260530_service_cards';
import * as migration_20260531_service_cards_extra from './20260531_service_cards_extra';

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
  {
    up: migration_20260529_rename_enquiries.up,
    down: migration_20260529_rename_enquiries.down,
    name: '20260529_rename_enquiries'
  },
  {
    up: migration_20260530_service_cards.up,
    down: migration_20260530_service_cards.down,
    name: '20260530_service_cards'
  },
  {
    up: migration_20260531_service_cards_extra.up,
    down: migration_20260531_service_cards_extra.down,
    name: '20260531_service_cards_extra'
  },
];
