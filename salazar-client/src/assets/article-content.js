const articles = [
  {
    name: 'care-guide-and-styling',
    title: 'Understanding React Props and Styling',
    content: [
      'There are read-only and essential for component reusability. Props allow information to flow down. (props-name)',
      'CSS Modules: A fantastic approach to component style (.module.css files). CSS Modules provide multiple styling approaches (inline styles, CSS files, Tailwind).',
    ],
    styles: 'TextStyle',
  },
  {
    name: 'react-functional-components',
    title: 'React Functional Components',
    content: [
      'Functional components are simple Javadoc-like functions that return JSX and  manage state and perform lifecycle operations.',
      'Examples: (function helloWorld() { return <h1>Hello World</h1>; }). Use return statements and performance benefits.',
    ],
    styles: 'react-classLifecycle',
  },
  {
    name: 'react-component-lifecycle',
    title: 'React Component Lifecycle',
    content: [
      'Class components have lifecycle methods: mounting, updating, and unmounting (componentDidMount, componentDidUpdate, componentWillUnmount).',
      'Example: (useEffect(fetchData) => { ... }). const example = useEffect(() => { console.log(\'Mounted!\'); return () => { ... }; }); []; return (...).',
    ],
    styles: 'react-lifecycle-hooks',
  },
  {
    name: 'react-state-management',
    title: 'Managing State in React',
    content: [
      'State allows components to track and manage dynamic data. useState hook makes interactive components and updates triggers a re-render with new state values.',
      'Example: (counter)(useState) { const [count, setCount] = useState(0); return <button onClick={() => setCount(count + 1)}>{count}</button> }',
    ],
    styles: 'react-feeling-better',
  },
];

export default articles;
