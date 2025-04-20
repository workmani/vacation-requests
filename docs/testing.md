# Testing Structure

This document outlines the testing strategy and tools used in this project.

## Frameworks and Libraries

- **Test Runner:** [Vitest](https://vitest.dev/) is used as the primary test runner for its speed, modern ESM support, and built-in capabilities like mocking and assertions.
- **Component Testing:** [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/) is installed for testing React components, focusing on user interaction and accessibility rather than implementation details.
- **DOM Matchers:** `@testing-library/jest-dom` provides useful custom matchers for asserting DOM state (e.g., `toBeInTheDocument`, `toHaveTextContent`).
- **Mocking:** Vitest's built-in `vi.mock`, `vi.fn`, etc., are used for mocking dependencies, particularly the Prisma client in service layer tests.
- **Environment:** `jsdom` is used to simulate a browser environment required by React Testing Library.

## Test File Location and Naming

- Unit/Integration tests for specific modules (e.g., services) are located alongside the source file using the `.test.ts` (or `.test.tsx`) suffix.
  - Example: `src/lib/services/user.service.ts` has tests in `src/lib/services/user.service.test.ts`.
- End-to-end (E2E) tests (if added later) might reside in a separate top-level `e2e/` or `tests/` directory.

## Service Layer Testing

- Service methods are tested individually.
- The core dependency, the Prisma client provided by `src/lib/services/prisma.service.ts`, is mocked using `vi.mock` at the top of each service test file.
- This mock replaces the actual Prisma client methods (`findUnique`, `create`, `update`, etc.) with Vitest mock functions (`vi.fn()`).
- Tests then:
  1. Arrange the expected return value or error for the mocked Prisma methods.
  2. Act by calling the service method under test.
  3. Assert that the mocked Prisma method was called with the correct arguments and that the service method returned the expected result or threw the expected error.

## Running Tests

Use the following npm scripts:

- `npm test`: Runs all tests in the console.
- `npm run test:ui`: Runs tests with the Vitest UI for a graphical interface.
- `npm run coverage`: Runs all tests and generates a coverage report (viewable in `coverage/index.html`).

## Configuration

- **Vitest Config:** `vitest.config.ts`
- **Global Setup:** `vitest.setup.ts` (imports jest-dom matchers)
- **TypeScript Config:** `tsconfig.json` includes necessary types for Vitest and Testing Library. 