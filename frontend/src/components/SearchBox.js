import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search here...'
        className='mr-sm-2 ml-sm-5'
        style = {{borderRadius: '10px'}}
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2' style = {{border:'1px solid green', borderRadius: '10px'}}>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
