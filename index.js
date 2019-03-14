const { ApolloServer, gql } = require('apollo-server');

const forms = [
  {
    title: 'biographic'
  },
  {
    title: 'picture'
  },
  {
    title: 'address'
  },
  {
    title: 'employment'
  }
];


const typeDefs = gql`

  type Form {
    title: String
  }


  type Query {
    forms: [Form]
  }
`;


const resolvers = {
  Query: {
    forms: () => forms
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});