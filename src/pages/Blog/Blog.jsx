import React from "react";

const Blog = () => {
  return (
    <div className=" mt-10 p-6 ">
      <details
        className="collapse  border border-gray-300 mb-3"
        name="my-accordion-det-1"
        open
      >
        <summary className="collapse-title font-semibold">
          What is useState and how does it work in React?
        </summary>
        <div className="collapse-content text-sm">
          useState is a React Hook that lets you add and manage state in a
          functional component. useState allows a component to: Store a value
          (number, string, object, array, etc.) Update that value Re-render the
          component automatically when the value changes.
        </div>
      </details>
      <details
        className="collapse  border border-gray-300 mb-3"
        name="my-accordion-det-1"
      >
        <summary className="collapse-title font-semibold">
          What is the purpose of useEffect in React?
        </summary>
        <div className="collapse-content text-sm">
          useEffect is a React Hook used to handle side effects in functional
          components. In short: 👉 useEffect lets you run code when something
          happens in the component lifecycle.
        </div>
      </details>
      <details
        className="collapse  border border-gray-300 mb-3"
        name="my-accordion-det-1"
      >
        <summary className="collapse-title font-semibold">
          What is a custom hook in React and when should you use one?
        </summary>
        <div className="collapse-content text-sm">
          A custom hook in React is a reusable JavaScript function that lets you
          extract and share logic built with React Hooks (useState, useEffect,
          etc.) across multiple components.
        </div>
      </details>
      <details
        className="collapse  border border-gray-300 mb-3"
        name="my-accordion-det-1"
      >
        <summary className="collapse-title font-semibold">
          Difference between controlled and uncontrolled components. Which one
          is better?
        </summary>
        <div className="collapse-content text-sm">
          A controlled component is one where React controls the form value
          using state (useState). User types, onChange fires, State updates,
          React re-renders with the new value.
        </div>
      </details>
      <details
        className="collapse  border border-gray-300"
        name="my-accordion-det-1"
      >
        <summary className="collapse-title font-semibold">
          Tell us something about useFormStatus() in React?
        </summary>
        <div className="collapse-content text-sm">
          useFormStatus() is a React Hook used with Server Actions (mainly in
          Next.js App Router) to track the submission state of a form.
        </div>
      </details>
    </div>
  );
};

export default Blog;
