import {
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Tag,
  Icon,
} from '@chakra-ui/react'
import { FiActivity, FiClock } from 'react-icons/fi'
import blogPosts from '../data/blog'

const Details = ({ blogAuthor, blogDate, blogViews }) => {
  return (
    <Flex
      w="100%"
      fontSize="sm"
      color="primary.800"
      opacity="0.8"
      fontWeight="normal"
      justify="space-between"
      mt={2}
      align="center"
    >
      <Flex align="center" direction="row">
        <Text>By:&nbsp;</Text>
        <Text fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
          {blogAuthor}
        </Text>
      </Flex>
      <Flex align="center" direction="row">
        <Icon m={2} as={FiClock} />
        <Text>{blogDate}</Text>
      </Flex>

      <Flex align="center" direction="row">
        <Text>{blogViews}</Text>
        <Icon m={2} as={FiActivity} />
      </Flex>
    </Flex>
  )
}

const BlogPost = ({ blogPost }) => {
  return (
    <Flex m={4} direction="column" flex="1">
      <Box position="relative">
        <Image
          src="https://source.unsplash.com/collection/404339/800x600"
          w="100%"
        />
        <Tag
          size="sm"
          borderRadius="full"
          colorScheme="green"
          position="absolute"
          top="4"
          left="4"
        >
          Code
        </Tag>
      </Box>
      <Box mt={[2, 4]}>
        <Heading as="h2" fontSize="2xl" fontWeight="medium" color="primary.800">
          {blogPost.title}
        </Heading>

        <Details
          blogAuthor={blogPost.author}
          blogDate={blogPost.date}
          blogViews="201"
        />
      </Box>
      <Box mt={4}>
        <Text
          fontSize="sm"
          color="primary.600"
          opacity="0.6"
          fontWeight="normal"
          lineHeight={1.5}
          noOfLines={[3, 4, 5]}
        >
          {blogPost.blogText}
        </Text>
      </Box>
    </Flex>
  )
}

const BlogOverview = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      {blogPosts.map((bp, index) => {
        return <BlogPost key={index} blogPost={bp} />
      })}
    </Flex>
  )
}

export default BlogOverview
