# Github Rest API

**Framework:**

- React JS

**Packages:**

- **Axios** – for fetching the necessary data to display to the user.
- **Tailwind CSS** – for styling the user interface with utility-first classes.
- **React Icons** – to visually represent the type of information being shown to the user.
- **Vitest** – for writing and running unit tests to ensure component reliability.
- **Prettier** – to maintain consistent code formatting across the project.

## Running the app

1 - Clone or download the repository.

2 - Navigate into the project directory in your terminal.

3 - Install all dependencies by running:

`npm install`

Once completed, run:

`npm run dev`

### What else would I have like to have added?

Given the timeframe of this task, I chose to prioritize getting the core functionality and usability working smoothly. I was able to implement unit tests for key components, which helped improve my confidence in the code's reliability. However, to further increase test coverage and ensure end-to-end stability, I would have liked to add integration tests as well. As noted, I’ve included a placeholder folder to indicate where these tests would be located in the future.

I would have also liked to spend more time on formatting the markdown content for better readability. Using additional options or plugins with packages like `react-markdown` could have helped produce a cleaner and more polished presentation.

The `useGetMarkdown` custom hook could be refactored to be more generic, allowing it to support a wider range of GET requests rather than being limited to this specific use case. This could be achieved by accepting a url and an optional options object as parameters, making the hook more reusable and adaptable for future data fetching needs.

While QA’ing the app, I noticed a bug related to the search and sort functionality. When a search term is entered and a sort option is applied, updating the search term does not retain or reapply the selected sort. Ideally, this interaction would be more dynamic, ensuring that both filters work seamlessly together. Additionally, I would have liked to implement query parameters for both the search and sort options. This would allow users to share specific views or results via URL, making it easier to link and revisit filtered states within the app.

Packages like `react-router-dom` would have been helpful for setting up routes and managing query parameters. Incorporating it would have made it easier to reflect the current search and sort state in the URL, enabling deep linking and improving overall user experience by allowing others to access the same filtered view directly.

Although one of the requirements for this test was to use JavaScript, in an ideal scenario I would have preferred to use TypeScript. It offers better type safety, improved developer experience, and more robust error handling, which would have helped catch potential issues earlier in the development process.

Lastly, I would have liked to implement a more polished loading state for the repositories. Adding skeleton screens would improve the user experience during data fetching, and a package like `react-loading-skeleton` could help with this implementation. Additionally, incorporating pagination or infinite scroll would prevent loading too much data at once, improving both performance and usability.

### Thought processes

When building this application, I carefully selected a few key packages to streamline development and enhance the overall experience.

For styling, I chose [TailwindCSS](https://tailwindcss.com/). While there are many styling libraries available, Tailwind stood out for its lightweight nature, simple installation, and intuitive utility-first approach, which significantly sped up the design process.

For handling HTTP requests, I opted for [Axios](https://axios-http.com/). Axios provides useful features like automatic JSON parsing, built-in error handling, and clear error codes, making it a reliable choice for managing API calls.

Both of these tools are widely adopted in the industry, well-maintained, and continue to evolve with regular updates and new features.

With the wide range of state management options available, choosing the right one can be challenging. For this project, I chose to use React’s built-in Context API. I opted against lifting state to a top-level component, as I wanted to avoid prop drilling, especially if the application grows in complexity. Prop drilling across multiple layers can make data flow harder to trace and maintain. Using Context provided a cleaner, more scalable solution for managing shared state without introducing unnecessary complexity at this stage.

A major advantage of using React is how it makes full use of reusable, self-contained components. For this app I have decided to pull out each component into its own file and test some of the components individually. This is where the context really comes into use as there was no need for prop drilling making for cleaner more readable code

To ensure the app is as accessible as possible for all users, I performed regular accessibility (A11y) checks throughout development. I used Chrome’s built-in Lighthouse tool to verify that the HTML structure was semantic and that text was clear and readable for everyone.

### Struggles

One of the main challenges I faced while building this app was displaying the data returned from the API calls in a clean and consistent way. I chose a grid layout using `display: grid` to achieve a uniform design, which initially worked well. However, I encountered some issues when implementing the "See more" functionality as expanding grid items caused layout distortion due to varying content sizes. To address content isolation, I decided to use a modal to display the markdown information, allowing users to focus on the detailed content without disrupting the overall layout.
