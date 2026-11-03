import type { ChronicleDef } from '../../engine/types';
import { plan } from './plan';
import { summarize } from './summary';

const LABELS: [RegExp, string][] = [
  [/^homeland$/, 'Homeland'],
  [/^government$/, 'Ruled by'],
  [/^status-column$/, 'Judged by'],
  [/^background$/, 'Background'],
  [/^faith$/, 'Faith'],
  [/^social-status$/, 'Standing'],
  [/^settlement-1$/, 'Home'],
  [/^settlement-\d$/, 'Other ties'],
  [/^traveller-/, 'Traveller'],
  [/^race$/, 'Race'],
  [/^family-kind$/, 'Family table'],
  [/^parents$/, 'Parents'],
  [/^siblings$/, 'Siblings'],
  [/^sibling-count$/, 'How many'],
  [/^family-count$/, 'Family bonds'],
  [/^family-rel-\d+$/, 'Family'],
  [/^acq-\d+-rel$/, 'Bond'],
  [/^acq-\d+-pet$/, 'Pet'],
  [/^acq-\d+-id$/, 'Identity'],
  [/^fate-\d+$/, 'Moment'],
  [/^fate-\d+-who$/, 'Figure'],
  [/^fate-\d+-choice$/, 'Detail'],
  [/^food$/, 'Food'],
  [/^secret$/, 'Secret'],
  [/^prophecy$/, 'Prophecy'],
];

export const originalChronicle: ChronicleDef = {
  id: 'original',
  name: 'The Heroic Chronicle',
  tagline: 'The original backstory system from Explorer’s Guide to Wildemount',
  sections: [
    { id: 'origins', title: 'Origins' },
    { id: 'family', title: 'Family' },
    { id: 'bonds', title: 'Allies & Rivals' },
    { id: 'fate', title: 'Fateful Moments' },
    { id: 'flavour', title: 'Quirks & Mysteries' },
    { id: 'prophecy', title: 'Prophecy' },
  ],
  plan,
  summarize,
  label: (key) => LABELS.find(([re]) => re.test(key))?.[1] ?? key,
  hiddenInRail: (key) => key === 'social-status' || key.startsWith('traveller-'),
};
