import './App.css';
import ProductDetails from './examples/ProductDetails';
import Parent from './examples/Parent';

const App = () => {
  const [data, setData]= useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>
      setData(response.data))
      .catch(error =>
        console.error('Error fetching data', error));
  }, []);


  return (
    <div>
      <ProductDetails />
      <Parent />
    </div>
  );
};

export default App;
