import { IStimulusConfigWithIndex } from './stimulus-config';

/**
 * Each section will have an ID attached, which will have some behaviors on it..
 */
export enum SectionId {
  /**
   * Welcome page
   */
  WELCOME = 'WELCOME',
  /**
   * Handedness selector, etc.
   */
  OPTIONS = 'OPTIONS',
  /**
   * Basic instructions
   */
  INSTRUCTIONS = 'INSTRUCTIONS',

  /**
   * Vertical demo
   */
  VERTICAL_EXAMPLE = 'VERTICAL_EXAMPLE',
  /**
   * Vertical demo feedback
   */
  VERTICAL_EXAMPLE_FEEDBACK = 'VERTICAL_EXAMPLE_FEEDBACK',
  /**
   * Horizontal demo
   */
  HORIZONTAL_EXAMPLE = 'HORIZONTAL_EXAMPLE',
  /**
   * Horizontal demo feedback
   */
  HORIZONTAL_EXAMPLE_FEEDBACK = 'HORIZONTAL_EXAMPLE_FEEDBACK',

  /**
   * Various practice pages
   */
  PRACTICE = 'PRACTICE',
  /**
   * Pre-start/interstitial
   */
  PRE_START = 'PRE_START',
  /**
   * Main "Run" section
   */
  MAIN_TASK = 'MAIN_TASK',
  /**
   * Finalized/done
   */
  FINISHED = 'FINISHED',
}

/**
 * Discriminator for main type of section
 */
export enum SectionType {
  /**
   * Message/instruction
   */
  MESSAGE = 'MESSAGE',
  /**
   * Practice task only
   */
  PRACTICE = 'PRACTICE',
  /**
   * Stimuli (active- MAIN_TASK)
   */
  STIMULI = 'STIMULI',
  /**
   * Options/setup page
   */
  OPTIONS = 'OPTIONS',
}

export interface ISectionBase {
  /**
   * Unique ID of section
   */
  sectionId: SectionId;
  /**
   * Display order, as sections go
   */
  displayIndex: number;
  /**
   * Optionally enable the "back" button
   */
  canGoBack?: boolean;
  /**
   * Header (as markdown)
   */
  header?: string;
  /**
   * Subheader (as markdown)
   */
  subheader?: string;
}

/**
 * Instructions/message section
 */
export interface IMessageSection extends ISectionBase {
  kind: SectionType.MESSAGE;
  /**
   * Body content as markdown
   */
  bodyContent?: string;
  /**
   * Use string-keyed getters to conditionally show some markdown content
   */
  conditionalContent?: { [path: string]: string | { [path2: string]: string } };
}

/**
 * Practice task section
 */
export interface IPracticeTaskSection extends ISectionBase {
  kind: SectionType.PRACTICE;
  /**
   * Body content as markdown
   */
  stimuli: IStimulusConfigWithIndex[];
  /**
   * Body content as markdown
   */
  bodyContent?: string;

  /**
   * Allow video replay
   */
  allowReplay: boolean;
  /**
   * Use string-keyed getters to conditionally show some markdown content
   */
  conditionalContent?: { [path: string]: string | { [path2: string]: string } };
}

/**
 * Live task section
 */
export interface ITaskSection extends ISectionBase {
  kind: SectionType.STIMULI;
  /**
   * Body content as markdown
   */
  stimuli: IStimulusConfigWithIndex[];
}

/**
 * Allow user to pick one of these for a give option
 */
export interface SectionOption {
  /**
   * Distinct key
   */
  key: string;
  displayIndex: number;
  displayTitle: string;
  subtitle?: string;
}

/**
 * Section with options
 */
export interface IOptionsSection extends ISectionBase {
  kind: SectionType.OPTIONS;
  /**
   * Choices, keyed by variable name
   */
  choices: { [varName: string]: SectionOption[] };
  /**
   * Optional body text
   */
  bodyContent?: string;
}

/**
 * Union type of possible valid sections
 */
export type ISection =
  | IMessageSection
  | IPracticeTaskSection
  | ITaskSection
  | IOptionsSection;

export interface ITaskConfig {
  /**
   * Video URLs to cache
   */
  videoUrls: string[];
  /**
   * Array of all sections
   */
  sections: ISection[];
}
