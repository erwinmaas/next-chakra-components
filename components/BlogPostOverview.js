import { Flex, Stack, Text, Image, Box, Heading, Tag } from '@chakra-ui/react'

const Details = ({ blogAuthor, blogDate, blogViews }) => {
  return (
    <Flex
      w="100%"
      size="sm"
      color="primary.800"
      opacity="0.8"
      fontWeight="bold"
      justify="space-between"
      mt={2}
    >
      <Text>BY: {blogAuthor}</Text>
      <Text>{blogDate}</Text>
      <Text>{blogViews} VIEWS</Text>
    </Flex>
  )
}

const BlogPost = ({ blogTitle, children }) => {
  return (
    <Flex w="100%" m={4} direction="column">
      <Image
        src="https://source.unsplash.com/collection/404339/800x600"
        w="100%"
      />
      <Tag
        size="sm"
        borderRadius="full"
        colorScheme="green"
        position="absolute"
      >
        Code
      </Tag>
      <Box>
        <Heading mt={2} as="h2" fontWeight="bold" color="primary.800">
          {blogTitle}
        </Heading>
        <Details
          blogAuthor="Erwin Maas"
          blogDate="June 13, 2021"
          blogViews="106"
        />
      </Box>
      <Box mt={4}>
        <Text
          size="sm"
          color="primary.600"
          opacity="0.8"
          lineHeight={1.5}
          noOfLines={[3, 4, 5]}
        >
          {children}
        </Text>
      </Box>
    </Flex>
  )
}

const BlogOverview = () => {
  return (
    <Flex w="100%">
      <BlogPost blogTitle="How To Improve Blog Skills">
        This is the first ever written blogtext in this context and with the
        Chakra UI
      </BlogPost>
    </Flex>
  )
}

export default BlogOverview
