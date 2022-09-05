export const MAX_POINTS: number = 1000;
export enum PLACE {
  first = 1,
  second = 2,
  third = 3,
}
export const PLACE_AFFIX: string[] = ["st", "nd", "rd"];

interface LEVEL {
  id: number;
  value: number;
}

export const LEVELS: LEVEL[] = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 500,
  },
  {
    id: 3,
    value: 1500,
  },
  {
    id: 4,
    value: 3750,
  },
  {
    id: 5,
    value: 7875,
  },
  {
    id: 6,
    value: 14175,
  },
  {
    id: 7,
    value: 22680,
  },
  {
    id: 8,
    value: 32886,
  },
  {
    id: 9,
    value: 44396,
  },
  {
    id: 10,
    value: 57715,
  },
  {
    id: 11,
    value: 72144,
  },
  {
    id: 12,
    value: 90180,
  },
  {
    id: 13,
    value: 112725,
  },
  {
    id: 14,
    value: 140906,
  },
  {
    id: 15,
    value: 176132,
  },
  {
    id: 16,
    value: 220165,
  },
  {
    id: 17,
    value: 275207,
  },
  {
    id: 18,
    value: 344008,
  },
  {
    id: 19,
    value: 430010,
  },
  {
    id: 20,
    value: 537513,
  },
  {
    id: 21,
    value: 671891,
  },
  {
    id: 22,
    value: 839864,
  },
  {
    id: 23,
    value: 1049830,
  },
  {
    id: 24,
    value: 1312287,
  },
  {
    id: 25,
    value: 1640359,
  },
  {
    id: 26,
    value: 2050449,
  },
  {
    id: 27,
    value: 2563061,
  },
  {
    id: 28,
    value: 3203826,
  },
  {
    id: 29,
    value: 3902260,
  },
  {
    id: 30,
    value: 4663553,
  },
  {
    id: 31,
    value: 5493363,
  },
  {
    id: 32,
    value: 6397855,
  },
  {
    id: 33,
    value: 7383755,
  },
  {
    id: 34,
    value: 8458379,
  },
  {
    id: 35,
    value: 9629723,
  },
  {
    id: 36,
    value: 10906488,
  },
  {
    id: 37,
    value: 12298162,
  },
  {
    id: 38,
    value: 13815086,
  },
  {
    id: 39,
    value: 15468534,
  },
  {
    id: 40,
    value: 17270791,
  },
  {
    id: 41,
    value: 19235252,
  },
  {
    id: 42,
    value: 21376515,
  },
  {
    id: 43,
    value: 23710491,
  },
  {
    id: 44,
    value: 26254525,
  },
  {
    id: 45,
    value: 29027522,
  },
  {
    id: 46,
    value: 32050088,
  },
  {
    id: 47,
    value: 35344686,
  },
  {
    id: 48,
    value: 38935798,
  },
  {
    id: 49,
    value: 42850109,
  },
  {
    id: 50,
    value: 47116709,
  },
  {
    id: 51,
    value: 51767302,
  },
  {
    id: 52,
    value: 56836449,
  },
  {
    id: 53,
    value: 62361819,
  },
  {
    id: 54,
    value: 68384473,
  },
  {
    id: 55,
    value: 74949165,
  },
  {
    id: 56,
    value: 82104680,
  },
  {
    id: 57,
    value: 89904191,
  },
  {
    id: 58,
    value: 98405658,
  },
  {
    id: 59,
    value: 107672256,
  },
  {
    id: 60,
    value: 117772849,
  },
  {
    id: 61,
    value: 128782495,
  },
  {
    id: 62,
    value: 140783010,
  },
  {
    id: 63,
    value: 153863570,
  },
  {
    id: 64,
    value: 168121381,
  },
  {
    id: 65,
    value: 183662396,
  },
  {
    id: 66,
    value: 200602101,
  },
  {
    id: 67,
    value: 219066380,
  },
  {
    id: 68,
    value: 239192444,
  },
  {
    id: 69,
    value: 261129853,
  },
  {
    id: 70,
    value: 285041630,
  },
  {
    id: 71,
    value: 311105466,
  },
  {
    id: 72,
    value: 339515048,
  },
  {
    id: 73,
    value: 370481492,
  },
  {
    id: 74,
    value: 404234916,
  },
  {
    id: 75,
    value: 441026148,
  },
  {
    id: 76,
    value: 481128591,
  },
  {
    id: 77,
    value: 524840254,
  },
  {
    id: 78,
    value: 572485967,
  },
  {
    id: 79,
    value: 624419793,
  },
  {
    id: 80,
    value: 681027665,
  },
  {
    id: 81,
    value: 742730244,
  },
  {
    id: 82,
    value: 809986056,
  },
  {
    id: 83,
    value: 883294891,
  },
  {
    id: 84,
    value: 963201521,
  },
  {
    id: 85,
    value: 1050299747,
  },
  {
    id: 86,
    value: 1145236814,
  },
  {
    id: 87,
    value: 1248718217,
  },
  {
    id: 88,
    value: 1361512946,
  },
  {
    id: 89,
    value: 1484459201,
  },
  {
    id: 90,
    value: 1618470619,
  },
  {
    id: 91,
    value: 1764543065,
  },
  {
    id: 92,
    value: 1923762030,
  },
  {
    id: 93,
    value: 2097310703,
  },
  {
    id: 94,
    value: 2286478756,
  },
  {
    id: 95,
    value: 2492671933,
  },
  {
    id: 96,
    value: 2717422497,
  },
  {
    id: 97,
    value: 2962400612,
  },
  {
    id: 98,
    value: 3229426756,
  },
  {
    id: 99,
    value: 3520485254,
  },
  {
    id: 100,
    value: 99999999999,
  },
];
