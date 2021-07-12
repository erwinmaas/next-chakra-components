import blogPosts from '../data/blog'
import { Flex, Image, Box, Tag, Heading, Text } from '@chakra-ui/react'

const BlogPost = ({ blogPost, ...rest }) => {
  return (
    <Flex m={4} direction="column" flex="1" {...rest}>
      <Box position="relative" {...rest}>
        <Image src={blogPost.image} w="100%" />
      </Box>
      <Box mt={[2, 4]}>
        <Text
          fontSize="lg"
          color="primary.700"
          fontWeight="semibold"
          sx={{ textTransform: 'uppercase' }}
        >
          Tag
        </Text>
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="semibold"
          color="primary.800"
        >
          {blogPost.title}
        </Heading>
        <Text color="gray.400">{blogPost.author}</Text>
      </Box>
    </Flex>
  )
}

const GizmoBlog = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Box w="100%" flex="1">
        <BlogPost blogPost={blogPosts[0]} />
      </Box>

      <Flex
        direction="column"
        flex="1"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box w="100%" minH="100%">
            <BlogPost blogPost={blogPosts[1]} />
          </Box>
          <Box w="100%">
            <BlogPost blogPost={blogPosts[2]} />
          </Box>
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box w="100%">
            <BlogPost blogPost={blogPosts[0]} />
          </Box>
          <Box w="100%">
            <BlogPost blogPost={blogPosts[1]} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default GizmoBlog
