
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Interview Preparation Day 5</h1>

      <h3>Q1. What is High Order Component in react js ?</h3>
      <p>Ans. A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature. We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components. const EnhancedComponent = higherOrderComponent(WrappedComponent)</p>

      <h3>Q2. What is Context API ?</h3>
      <p>Ans. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. (or) Context provides a way to pass data through the component tree without having to pass props down manually at every level.For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.</p>

      <h3>Q3. Difference between callback and useCallback Hook ?</h3>
      <p>Ans. callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument. <br />
      The callback function is invoked when setState finished and the component gets rendered. Since setState is asynchronous the callback function is used for any post action. Note: It is recommended to use lifecycle method rather than this callback function.
      </p>

      <h3>Q4. What is Props Drilling Concept ?What is State Uplifting ?</h3>
      <p>Ans. <h4>Porps Drilling : </h4>It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.
      <h4>State Uplifting : </h4>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.
      </p>

      <h3>Q5. Difference between useEffect and useContext ?</h3>
      <p>Ans. It allows us to implement all of the lifecycle hooks from within a single function API <br />
      This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props. 
      </p>

      <h3>Q6. What are React Life cycles Explain each one with Example</h3>
      <p>Ans. React lifecycle is a component default functionality in which after rendering the function called componentDidMountis called and after that when any state or props will be called then componentDidUpdate will be called or update. after that one more function which is called componentWillUnmount in this function will be called just before the rendering to unmount the component.
        
      </p>
    </div>
  );
}

export default App;
