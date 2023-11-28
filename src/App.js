import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';;
function App() {
  const [productList, setProductList] = useState([])
  const [dataList, setDataList] = useState([
    {
      "name": "Apple",
      "categories": ["IPhone", "IPad", "Ipod"]
    }, {
      "name": "Samsung",
      "categories": ["S1", "S2", "S3"]
    }, {
      "name": "LG",
      "categories": ["G1", "G2", "G3"]
    }
  ])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    return () => {
      //test
      let pList = []
      for (var i = 0; i < 5; i++) {
        pList.push({
          "product_name": i,
          "category_name": i,
          "price": i,
          "quantity": 10,
          "total_price": i * 10,
          "manufacturer_name": i
        })
      }

      setProductList([...pList])
    };
  }, [])

  function updateManufacturer(e) {
    setCategories([])
    let manufacturer_name = e.target.value
    for (let item of dataList) {
      if(item.name == manufacturer_name) {
        setCategories([...item.categories])
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header bg-info">
            Input Data
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Product Name: </label>
              <input type="text" name="product_name" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Manufacturer Name: </label>
              <select className="form-control" name="manufacturer_name" onChange={updateManufacturer}>
                <option value="">-- Chon --</option>
                {dataList.map((item, index) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Category Name: </label>
              <select className="form-control" name="category_name">
                <option>-- Chon --</option>
                {categories.map((value, index) => (
                  <option value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Price: </label>
              <input type="number" name="price" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Quantity: </label>
              <input type="quantity" name="quantity" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Total Price: </label>
              <input type="number" name="total_price" className="form-control"/>
            </div>
            <div className="form-group">
              <button className="btn btn-success">Save Data</button>
              <button className="btn btn-warning">Reset Data</button>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-header bg-info">
            Data Management
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Category Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Manufacturer Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.product_name}</td>
                    <td>{product.category_name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.total_price}</td>
                    <td>{product.manufacturer_name}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;