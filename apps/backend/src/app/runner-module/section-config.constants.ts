import {
  IStimulusConfigWithIndex,
  ISection,
  ITaskConfig,
  IMessageSection,
  IOptionsSection,
  ITaskSection,
  SectionType,
  SectionId,
  IPracticeTaskSection,
} from '@cogtest/shared-utils';
import { cloneDeep } from 'lodash';
import {
  PRACTICE_CONFIGS,
  VIDEO_URLS,
  VERTICAL_EXAMPLE_CONFIG,
  HORIZONTAL_EXAMPLE_CONFIG,
  STIMULUS_ORDER,
} from './video-file.constants';

/**
 * Clone a section and assign a display index value
 *
 * @param section Section (excluding displayIndex)
 * @param idx index to assign
 */
const insertSectionAtIdx = <
  T =
    | Omit<IMessageSection, 'displayIndex'>
    | Omit<ITaskSection, 'displayIndex'>
    | Omit<IOptionsSection, 'displayIndex'>
>(
  section: T,
  idx: number
): T & { displayIndex: number } => {
  return { ...cloneDeep(section), ...{ displayIndex: idx } };
};

const WelcomeSection: Omit<IMessageSection, 'displayIndex'> = {
  sectionId: SectionId.WELCOME,
  kind: SectionType.MESSAGE,
  canGoBack: false,
  header: `# Welcome!`,
  subheader: `## You are invited to participate in this research study called *Perceptual Organization of Moving Stimuli*`,
  bodyContent: `You may qualify to take part in this research study, because you are aged 18-65 years old, have normal vision/vision corrected to normal, and that you have no visual abnormalities like color-blindness, cataracts, glaucoma, strabismus, etc. Perceptual organization helps our brains perceive details from what we see in the world and organize those details into information. You are helping us understand how people see moving objects and organize information from them.`,
};
const OptionsSection: Omit<IOptionsSection, 'displayIndex'> = {
  sectionId: SectionId.OPTIONS,
  kind: SectionType.OPTIONS,
  header: `# Handedness Setup`,
  subheader: `## Please check which of the following applies to you.`,
  choices: {
    ['hand']: [
      { key: 'right', displayIndex: 0, displayTitle: 'Right-handed' },
      { key: 'left', displayIndex: 1, displayTitle: 'Left-handed' },
      { key: 'ambi', displayIndex: 2, displayTitle: 'Ambidextrous' },
    ],
  },
  bodyContent: ``,
};
const InstructionsSection: Omit<IMessageSection, 'displayIndex'> = {
  sectionId: SectionId.INSTRUCTIONS,
  kind: SectionType.MESSAGE,
  header: `# Instructions`,
  canGoBack: true,
  conditionalContent: {
    [`${SectionId.OPTIONS}.hand.right`]: `1. For each question, you will be asked to play a video to watch before you respond.
    2. In each video, you will see pairs of dot arrays that are moving closer to one another. Each pair of dot arrays can be grouped into two orientations, either Vertical or Horizontal.
    3. You are to pay attention to the grouping orientation of each animation.
    4. Use your right hand to press **i** for "Vertical", and to press **o** for "Horizontal".
    5. Use your non-dominant hand to press the spacebar key in order to play videos.
    `,
    [`${SectionId.OPTIONS}.hand.left`]: `1. For each question, you will be asked to play a video to watch before you respond.
    2. In each video, you will see pairs of dot arrays that are moving closer to one another. Each pair of dot arrays can be grouped into two orientations, either Vertical or Horizontal.
    3. You are to pay attention to the grouping orientation of each animation.
    4. Use your left hand to press **1** for "Vertical", and to press **2** for "Horizontal".
    5. Use your non-dominant hand to press the spacebar key in order to play videos.
    `,
    [`${SectionId.OPTIONS}.hand.ambi`]: `1. For each question, you will be asked to play a video to watch before you respond.
    2. In each video, you will see pairs of dot arrays that are moving closer to one another. Each pair of dot arrays can be grouped into two orientations, either Vertical or Horizontal.
    3. You are to pay attention to the grouping orientation of each animation.
    4. Use your right hand to press **i** for "Vertical", and to press **o** for "Horizontal".
    5. Use your non-dominant hand to press the spacebar key in order to play videos.
    `,
  },
};

const VerticalExampleSection: Omit<IPracticeTaskSection, 'displayIndex'> = {
  sectionId: SectionId.VERTICAL_EXAMPLE,
  kind: SectionType.PRACTICE,
  canGoBack: true,
  header: `# Example 1: Vertical`,
  allowReplay: true,
  subheader: `## This video will show you an example of a Vertical animation. Before you play this video, please make sure that you adjust your monitor height, so that the top of the screen is at (or slightly below) eye level.`,
  bodyContent: `- Press your **spacebar** key to play the video.
  - Focus on the white fixation cross, as the animation will disappear quickly!
  - Pay attention to the pairs of dot arrays and see if they can be categorized as "Vertical" or "Horizontal".
  - NOTE: Since this is just a trial run, you can replay this video to study the Horizontal grouping of the dots in this animation (However, during the actual survey, you can only watch the video once).
    `,
  conditionalContent: {
    [`${SectionId.OPTIONS}.hand.right`]: `Press **i** if the animation is Vertical. Press **o** if the animation is horizontal`,
    [`${SectionId.OPTIONS}.hand.left`]: `Press **1** if the animation is Vertical. Press **2** if the animation is horizontal`,
    [`${SectionId.OPTIONS}.hand.ambi`]: `Press **i** if the animation is Vertical. Press **o** if the animation is horizontal`,
  },
  stimuli: VERTICAL_EXAMPLE_CONFIG,
};

const VerticalExampleReview: Omit<IMessageSection, 'displayIndex'> = {
  sectionId: SectionId.VERTICAL_EXAMPLE_FEEDBACK,
  kind: SectionType.MESSAGE,
  header: `# Example 1 Review`,
  canGoBack: true,
  subheader: `## In this case, it is a Vertical animation.`,
  conditionalContent: {
    [`${SectionId.VERTICAL_EXAMPLE}.response.v`]: {
      [`${SectionId.OPTIONS}.hand.right`]: `Your response was correct. Press **i** to move onto the next section when you are ready.`,
      [`${SectionId.OPTIONS}.hand.left`]: `Your response was correct. Press **1** to move onto the next section when you are ready.`,
      [`${SectionId.OPTIONS}.hand.ambi`]: `Your response was correct. Press **i** to move onto the next section when you are ready.`,
    },
    [`${SectionId.VERTICAL_EXAMPLE}.response.h`]: {
      [`${SectionId.OPTIONS}.hand.right`]: `You answered "Horizontal"- you should press **i** on your keyboard whenever you see a vertical animation. You can go back and try again, or press **i** to continue onward.`,
      [`${SectionId.OPTIONS}.hand.left`]: `You answered "Horizontal"- you should press **1** on your keyboard whenever you see a vertical animation. You can go back and try again, or press **1** to continue onward.`,
      [`${SectionId.OPTIONS}.hand.ambi`]: `You answered "Horizontal"- you should press **i** on your keyboard whenever you see a vertical animation. You can go back and try again, or press **i** to continue onward.`,
    },
  },
  bodyContent: `NOTE: Since this is just a trial run, you can replay this video to study the Vertical grouping of the dots in this animation (However, during the actual survey, you can only watch the video once).`,
};

const HorizontalExampleSection: Omit<IPracticeTaskSection, 'displayIndex'> = {
  sectionId: SectionId.HORIZONTAL_EXAMPLE,
  kind: SectionType.PRACTICE,
  canGoBack: true,
  header: `# Example 2: Horizontal`,
  allowReplay: true,
  subheader: `## This video will show you an example of a Horizontal animation. Before you play this video, please make sure that you adjust your monitor height, so that the top of the screen is at (or slightly below) eye level.`,
  bodyContent: `- Press your **spacebar** key to play the video.
    - Focus on the white fixation cross, as the animation will disappear quickly!
    - Pay attention to the pairs of dot arrays and see if they can be categorized as "Vertical" or "Horizontal".
    - NOTE: Since this is just a trial run, you can replay this video to study the Horizontal grouping of the dots in this animation (However, during the actual survey, you can only watch the video once).
      `,
  conditionalContent: {
    [`${SectionId.OPTIONS}.hand.right`]: `Press **i** if the animation is Vertical. Press **o** if the animation is horizontal`,
    [`${SectionId.OPTIONS}.hand.left`]: `Press **1** if the animation is Vertical. Press **2** if the animation is horizontal`,
    [`${SectionId.OPTIONS}.hand.ambi`]: `Press **i** if the animation is Vertical. Press **o** if the animation is horizontal`,
  },
  stimuli: VERTICAL_EXAMPLE_CONFIG,
};

const HorizontalExampleReview: Omit<IMessageSection, 'displayIndex'> = {
  sectionId: SectionId.HORIZONTAL_EXAMPLE_FEEDBACK,
  kind: SectionType.MESSAGE,
  header: `# Example 2 Review`,
  canGoBack: true,
  subheader: `## In this case, it is a Horizontal animation.`,
  conditionalContent: {
    [`${SectionId.HORIZONTAL_EXAMPLE}.response.h`]: {
      [`${SectionId.OPTIONS}.hand.right`]: `Your response was correct. Press **o** to move onto the next section when you are ready.`,
      [`${SectionId.OPTIONS}.hand.left`]: `Your response was correct. Press **2** to move onto the next section when you are ready.`,
      [`${SectionId.OPTIONS}.hand.ambi`]: `Your response was correct. Press **o** to move onto the next section when you are ready.`,
    },
    [`${SectionId.HORIZONTAL_EXAMPLE}.response.v`]: {
      [`${SectionId.OPTIONS}.hand.right`]: `You answered "Horizontal"- you should press **o** on your keyboard whenever you see a vertical animation. You can go back and try again, or press **o** to continue onward.`,
      [`${SectionId.OPTIONS}.hand.left`]: `You answered "Horizontal"- you should press **2** on your keyboard whenever you see a vertical animation. You can go back and try again, or press **2** to continue onward.`,
      [`${SectionId.OPTIONS}.hand.ambi`]: `You answered "Horizontal"- you should press **o** on your keyboard whenever you see a vertical animation. You can go back and try again, or press **o** to continue onward.`,
    },
  },
  bodyContent: `NOTE: Since this is just a trial run, you can replay this video to study the Vertical grouping of the dots in this animation (However, during the actual survey, you can only watch the video once).`,
};

const ExtraPracticeSection: Omit<IPracticeTaskSection, 'displayIndex'> = {
  sectionId: SectionId.PRACTICE,
  kind: SectionType.PRACTICE,
  canGoBack: false,
  header: `# Practice`,
  allowReplay: false,
  subheader: `## This video will show you an example of a Horizontal animation. Before you play this video, please make sure that you adjust your monitor height, so that the top of the screen is at (or slightly below) eye level.`,
  bodyContent: `- With your non-dominant hand, press your "spacebar" key, and pay attention if the dot arrays are moving closer together into a Vertical grouping or a Horizontal grouping.
    - You will not be allowed to replay these videos.
        `,
  conditionalContent: {
    [`${SectionId.OPTIONS}.hand.right`]: `Press **i** if the animation is Vertical. Press **o** if the animation is horizontal`,
    [`${SectionId.OPTIONS}.hand.left`]: `Press **1** if the animation is Vertical. Press **2** if the animation is horizontal`,
    [`${SectionId.OPTIONS}.hand.ambi`]: `Press **i** if the animation is Vertical. Press **o** if the animation is horizontal`,
  },
  stimuli: VERTICAL_EXAMPLE_CONFIG,
};

const PreStartSection: Omit<IMessageSection, 'displayIndex'> = {
  sectionId: SectionId.PRE_START,
  kind: SectionType.MESSAGE,
  header: `# Ready?`,
  canGoBack: false,
  subheader: `## In this case, it is a Horizontal animation.`,
  bodyContent: `Whenever you're ready, click "Next" to begin the main task. You will not be able to pause, once started.`,
};

/**
 * Main data collection
 */
const MainTaskSection: Omit<ITaskSection, 'displayIndex'> = {
  sectionId: SectionId.MAIN_TASK,
  kind: SectionType.STIMULI,
  header: ``,
  stimuli: STIMULUS_ORDER,
};

const FinalizeSection: Omit<IMessageSection, 'displayIndex'> = {
  sectionId: SectionId.FINISHED,
  kind: SectionType.MESSAGE,
  header: `# Finished`,
  canGoBack: false,
  subheader: `## Congratulations, you've finished the task`,
  bodyContent: `Whenever you're ready, feel free to close your browser.`,
};

/**
 * Fully-constructed task config to send to frontend
 */
export const TASK_CONFIG: ITaskConfig = {
  videoUrls: VIDEO_URLS,
  sections: [
    insertSectionAtIdx(WelcomeSection, 0),
    insertSectionAtIdx(OptionsSection, 1),
    insertSectionAtIdx(InstructionsSection, 2),
    insertSectionAtIdx(VerticalExampleSection, 3),
    insertSectionAtIdx(VerticalExampleReview, 4),
    insertSectionAtIdx(HorizontalExampleSection, 5),
    insertSectionAtIdx(HorizontalExampleReview, 6),
    insertSectionAtIdx(ExtraPracticeSection, 7),
    insertSectionAtIdx(PreStartSection, 8),
    insertSectionAtIdx(MainTaskSection, 9),
    insertSectionAtIdx(FinalizeSection, 10),
  ],
};
