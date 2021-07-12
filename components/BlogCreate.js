import { Button, Flex, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import AlertPop from './AlertPop'

const BlogCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [data, setData] = useState()
  const [update, setUpdate] = useState(false)
  const updateBlog = () => setUpdate(!update)

  const onSubmit = (data) => {
    setData(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack maxW={{ base: '95%', md: '70%' }} mx="auto">
        <FormControl id='author' isRequired>
          <FormLabel>Author</FormLabel>
          <Input
            type="text"
            placeholder="Author"
            {...register('author', {
              required: 'Enter author name',
              minLength: { value: 3, message: 'Author name is too short' },
              maxLength: 25,
            })}
          />
        {errors.author && <AlertPop title={errors.author.message} />}
        </FormControl>

        <FormControl id='title' isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Blog Title"
            {...register('title', {
              required: 'Enter blog title',
              minLength: { value: 5, message: 'Blog title is too short' },
              maxLength: 30,
            })}
          />
          {errors.title && <AlertPop title={errors.title.message} />}
        </FormControl>

        <FormControl id='image'>
          <FormLabel>Image url</FormLabel>
          <Input
            type="text"
            placeholder="Blog Image"
            {...register('image', {
              required: 'Enter blog image url',
              minLength: { value: 10, message: 'Blog image url is too short' },
            })}
          />
        </FormControl>
        <FormControl id='blogtext' isRequired>
          <FormLabel>Blog text</FormLabel>
          <Textarea
          size="lg"
          placeholder="Blog text here"
          rows="10"
          fontSize="12px"
          {...register('blogtext', {
            required: 'Enter blog text',
            minLength: { value: 100, message: 'Blogtext is too short' },
            maxLength: { value: 1000, message: 'Blogtext is too long' },
          })}
        />
        </FormControl>
        

        <Button
          borderRadius="md"
          bg="primary.500"
          _hover={{ bg: 'primary.200', textColor: 'gray.500' }}
          variant="ghost"
          type="submit"
          textColor="gray.100"
        >
          Submit
        </Button>
      </VStack>
    </form>
  )
}

export default BlogCreate
