const generateMongooseURI = (props) => {    
  const {DATABASE_PASSWORD, DATABASE_USER, DATABASE_CLUSTER} = props 
  const uri = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_CLUSTER}.cliyowt.mongodb.net/?retryWrites=true&w=majority`;
  return uri;
}

module.exports = {generateMongooseURI}