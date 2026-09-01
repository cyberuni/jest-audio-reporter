/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	collectCoverageFrom: ['<rootDir>/ts/**/*.[jt]s', '!<rootDir>/ts/bin.[jt]s'],
	roots: ['<rootDir>/ts'],
	testEnvironment: 'node',
	testMatch: ['**/?(*.)+(spec|test|integrate|accept|system|unit).[jt]s?(x)']
}
