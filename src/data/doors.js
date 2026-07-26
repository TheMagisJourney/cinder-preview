/**
 * Cinder door content + client reflow
 */
const BASE = import.meta.env.BASE_URL || '/';

export const DOORS = {
  dating: {
    id: 'dating',
    word: 'Dating',
    promise: "Look like the person they're hoping to meet.",
    sub: 'Real photos of you, at your most magnetic — still recognizably you.',
    cta: 'Claim founding access',
    after: BASE + 'samples/dating-after.jpg',
    before: BASE + 'samples/dating-before.jpg',
    ethics: true,
  },
  career: {
    id: 'career',
    word: 'Career',
    promise: 'The photo that gets you in the room.',
    sub: 'Studio-grade headshots for LinkedIn and résumés, without the studio.',
    cta: 'Claim founding access',
    after: BASE + 'samples/career-after.jpg',
    before: BASE + 'samples/career-before.jpg',
    ethics: false,
  },
  acting: {
    id: 'acting',
    word: 'Acting',
    promise: 'Headshots that book the audition.',
    sub: 'Casting-ready framing — natural light, neutral ground, real range.',
    cta: 'Get priority access',
    after: BASE + 'samples/acting-after.jpg',
    before: BASE + 'samples/acting-before.jpg',
    ethics: false,
  },
  portfolio: {
    id: 'portfolio',
    word: 'Portfolio',
    promise: 'Work that looks as good as it is.',
    sub: 'Consistent editorial grade across a full set.',
    cta: 'Get priority access',
    after: BASE + 'samples/portfolio-after.jpg',
    before: BASE + 'samples/portfolio-before.jpg',
    ethics: false,
  },
};

export const DOOR_ORDER = ['dating', 'career', 'acting', 'portfolio'];