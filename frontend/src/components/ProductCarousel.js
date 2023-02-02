import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
const productss = [{name : "Books", image:"https://cdn.pixabay.com/photo/2014/08/02/11/37/books-408220_1280.jpg"}, 
{name : "Courses", image: "https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg"},
{name : "Study material", image: "https://img.freepik.com/free-photo/book-laptop-pencil-clock-wooden-table-library-education-learning-concept_1150-16628.jpg?w=996&t=st=1673217078~exp=1673217678~hmac=7d61a1980f0ea946112fb9c460b83f2135ffd192a08f5112c9fb3e71dc0810db"}]

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
        <Carousel.Item>
          <Image src={productss[0].image} alt={productss[0].name} fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>
              {productss[0].name}
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Image src={productss[1].image} alt={productss[1].name} fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>
              {productss[1].name}
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Image src={productss[2].image} alt={productss[2].name} fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>
              {productss[2].name}
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
