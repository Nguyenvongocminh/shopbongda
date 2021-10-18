import './home.scss';
import Navbar from '../../components/navbar/navbar'
import Card from '../../components/card/card';
import product from '../../assets/data/product';
import {  useState, useEffect } from 'react';
import { Input, Icon,Pagination } from 'semantic-ui-react'

function Home() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    await setData(product);
  };

  useEffect(async () => {
    await fetchData();
    console.log('trang chu');
    await console.log(data);
  }, []);

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const onSubmitSearch = () => {
    setData(
      product.filter((item) =>
        item?.name?.toLowerCase()?.includes(search.toLowerCase())
      )
    );
  };

  const onSearchBrand = (e) => {
    setBrand(e.target.value);
    setData(
      product.filter((item) =>
        item?.brand?.toLowerCase()?.includes(e.target.value.toLowerCase())
    )
    );
  };

  const sortPrice = (e) => {
    setPrice(e.target.value);
    if(e.target.value == 1) {
      setData(
        product.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        )   
    }else {
      setData(
        product.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      ) 
    }
  }
  return (

    <div className="home-container">
      <Navbar />
      <div className="menuLeft">
      <Input
          icon={<Icon name="search" inverted circular link onClick={onSubmitSearch}/>}
          placeholder="Search..." value={search} onChange={onChangeSearch}
        />
      <div className="selectForm">
          <p>Hãng</p>
          <select className="selectBox" value={brand} onChange={onSearchBrand}>
            <option selected value=""></option>
            <option value="Nike">Nike</option>
            <option value="Kappa">KappaL</option>
            <option value="Puma">Puma</option>
            <option value="DKS">DKS</option>
          </select>
        </div>

        <div className="selectForm">
          <p>Giá</p>
          <select className="selectBox" value={price} onChange={sortPrice}>
            <option selected value=""></option>
            <option value="1">Từ thấp đến cao</option>
            <option value="2">Từ cao đến thấp</option>
          </select>
        </div>
       <img src="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/8/30/photo1630305337256-1630305337442104252003.jpg" alt="cr7" width="200px" height="300px" />
      </div>
      <div className="product">
        {data.map((item) => (
            <Card product={item}/>
        ))};
      </div>
      <div className="menuRight"></div>
      <div className="paginator">
    
      </div>
    </div>
    
  );
}

export default Home;