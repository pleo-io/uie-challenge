import React from "react";

import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>UI Engineer</h1>
        <h3>Pleo 2020 DesignOps challenge</h3>
      </header>

      {/* Challenge */}
      <section className="challenge">
        <hr />
        <div>
          <h2>The challenge</h2>
          <p>
            <strong>
              What you see here is a simple ReactJS app composed of four
              sections.
            </strong>
          </p>
          <p>
            The sections are lacking in the areas of semantics, usability,
            reusability and design aptitude.
          </p>
          <p>
            One of the components in the solution is a dropdown selector. This
            component features two different themes. When a theme is selected it
            should trigger a visual change in the UI that relates to the name of
            the theme.
          </p>
        </div>
        <div>
          <p>
            <strong>We would like you to:</strong>
          </p>
          <ol>
            <li>Abstract parts of the solution into individual components.</li>
            <li>Write an elegant solution to handle theming.</li>
            <li>
              Heigthen the overall quality of the components as you see fit.
            </li>
            <li>Update the visual aspects of the UI in a meaningful way.</li>
            <li>Add links to your favourite resources in the footer.</li>
            <li>
              Think scalability and flexilibity into the frontend architecture.
            </li>
          </ol>
        </div>
        <p>
          <i>
            Everything including design, layout, code structure, naming,
            semantics, etc. can be challenged. *Remember to document you
            changes, as we'll be very interested in hearing your motives.
          </i>
        </p>
        <hr />
      </section>

      {/* Dropdown */}
      <section className="dropdown">
        <h2>Theme picker</h2>
        <p>
          Changing the option in the dropdown should have some effect on the
          visuals of the app.
        </p>
        <label htmlFor="theme-picker">Choose a theme:</label>
        <select name="themes" id="theme-picker">
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>This is the footer</h2>
        <p>
          The footer could contain links to fontend resources you enjoy using.
        </p>
        <div>
          <ul>
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
