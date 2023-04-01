import * as mongoose from 'mongoose';

mongoose.set('strictQuery', true);

// Connecting to the database
export default (async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://raghu-webla:GSIkbF7T0AOqGKYQ@cluster0.12jgyme.mongodb.net/?retryWrites=true&w=majority',
     );
    // listen for requests
    console.log('The Conection is Ok'); 
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();