/**
 * Cinder door content + client reflow
 */
export const DOORS = {
  dating: {
    id: 'dating',
    word: 'Dating',
    promise: "Look like the person they're hoping to meet.",
    sub: 'Real photos of you, at your most magnetic — still recognizably you.',
    cta: 'Claim founding access',
    after: '/samples/dating-after.jpg',
    before: '/samples/dating-before.jpg',
    ethics: true,
  },
  career: {
    id: 'career',
    word: 'Career',
    promise: 'The photo that gets you in the room.',
    sub: 'Studio-grade headshots for LinkedIn and résumés, without the studio.',
    cta: 'Claim founding access',
    after: '/samples/career-after.jpg',
    before: '/samples/career-before.jpg',
    ethics: false,
  },
  acting: {
    id: 'acting',
    word: 'Acting',
    promise: 'Headshots that book the audition.',
    sub: 'Casting-ready framing — natural light, neutral ground, real range.',
    cta: 'Get priority access',
    after: '/samples/acting-after.jpg',
    before: '/samples/acting-before.jpg',
    ethics: false,
  },
  portfolio: {
    id: 'portfolio',
    word: 'Portfolio',
    promise: 'Work that looks as good as it is.',
    sub: 'Consistent editorial grade across a full set.',
    cta: 'Get priority access',
    after: '/samples/portfolio-after.jpg',
    before: '/samples/portfolio-before.jpg',
    ethics: false,
  },
};

export const DOOR_ORDER = ['dating', 'career', 'acting', 'portfolio'];
