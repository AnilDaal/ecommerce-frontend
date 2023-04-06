import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminGetProduct, deleteProduct } from '../store';

const ProductListing = () => {
  const { adminProductList, isLoading } = useSelector((state) => state.admin);

  console.log(adminProductList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminGetProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this item permanently?')) {
      dispatch(deleteProduct(id))
        .unwrap()
        .then(() => dispatch(adminGetProduct()))
        .catch((err) => console.log(err));
    }
  };
  if (isLoading) {
    return (
      <>
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
      </>
    );
  }
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell x">ID</TableCell> */}
            <TableCell className="tableCell x">Image</TableCell>
            <TableCell className="tableCell x">Title</TableCell>
            <TableCell className="tableCell x">Price</TableCell>
            <TableCell className="tableCell x">Stock Quantity</TableCell>
            {/* <TableCell className="tableCell x">Country</TableCell> */}
            <TableCell className="tableCell x">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminProductList.map((product) => {
            return (
              <TableRow key={product._id}>
                {/* <TableCell className="tableCell">{row._id}</TableCell> */}
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src={product.image}
                      alt=""
                      className="image"
                      height={200}
                    />
                    {/* {product.title} */}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{product.title}</TableCell>
                <TableCell className="tableCell">
                  &#8377;{product.price}
                </TableCell>

                <TableCell className="tableCell">
                  {product.totalQuantity}
                </TableCell>

                <TableCell className="tableCell">
                  <Link to={`/admin/single-product/${product._id}`}>
                    <button className="view">View</button>
                  </Link>
                  <Link to={`/admin/update-product/${product._id}`}>
                    <button className="update">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductListing;
