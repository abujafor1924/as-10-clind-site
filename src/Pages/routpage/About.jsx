import React, { useRef } from "react";
import ReactPrint from "react-to-print";

const About = () => {
  const ref = useRef();
  return (
    <div>
      <ReactPrint
        trigger={() => (
          <button className="px-4 py-2 bg-red-500 text-2xl font-nomal ml-8 rounded">
            Pdf/Print
          </button>
        )}
        content={() => ref.current}
      ></ReactPrint>
      <div ref={ref}>
        <div className="p-4">
          <h1 className="text-2xl font-semibold">
            Tell us the differences between uncontrolled and controlled
            components?
          </h1>
          <p>
            These components rely on props passed down from the parent component
            to update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold">
            How to validate React props using PropTypes?
          </h1>
          <p>
            PropTypes is a type-checking library for React that allows you to
            ensure the correctness of your component's props. By specifying the
            expected types and any additional requirements, you can catch
            potential errors early on in development and improve the reliability
            and maintainability of your code. Was this response better or worse?
            Better Worse Same
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold">
            Tell us the difference between nodejs and express js?
          </h1>
          <p>
            Node.js is a runtime environment that allows JavaScript code to run
            outside the browser, while Express.js is a web application framework
            built on top of Node.js, providing additional features and
            simplifying the development of web applications.
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            A custom hook is a reusable function in React that allows you to
            extract logic and stateful behavior from components. Custom hooks
            are created to encapsulate complex or repetitive logic, promote code
            reusability, and enhance the organization and readability of React
            components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
