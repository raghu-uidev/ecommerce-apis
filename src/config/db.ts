import * as mongoose from 'mongoose';

mongoose.set('strictQuery', true);

// Connecting to the database
export default (async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://webla-admin:B7jb4SO1of5i5i60@cluster0.qw3rg03.mongodb.net/ecommerce?retryWrites=true&w=majority',
     );
    // listen for requests
    console.log('The Conection is Ok'); 
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();