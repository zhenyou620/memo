// export default {
//   preset: 'ts-jest/presets/default-esm',
//   globals: {
//     'ts-jest': {
//       useESM: true,
//     },
//   },
//   roots: ['<rootDir>/src'],
//   testMatch: [
//     '**/__tests__/**/*.+(ts|tsx|js)',
//     '**/?(*.)+(spec|test).+(ts|tsx|js)',
//   ],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
// };

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
