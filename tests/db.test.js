const mongoose = require('mongoose');
const db = require('../database/index.js');

const fakeData = {
  itemId: '200',
  price: 9.99,
  currency: '$'
};

const badFakeData = {
  itemId: '201',
  currency: '$'
};

describe('Prices Model', () => {

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/mainTitle_price', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async (done) => {
    await mongoose.connection.close((err) => {
      if (err) {
        console.log('error closing mongoose connection: ', err);
      } else {
        done();
      }
    });
  });

  it('creates and saves a db entry', async (done) => {
    const item = new db.Price(fakeData);
    const savedItem = await item.save();

    expect(savedItem._id).toBeDefined();
    expect(savedItem.itemId).toBe(fakeData.itemId);
    expect(savedItem.price).toBe(fakeData.price);
    expect(savedItem.currency).toBe(fakeData.currency);
    done();
  });


  it('should not save a db entry if a required field is empty', async (done) => {
    const badItemDescription = new db.Price(badFakeData);
    let err;

    try {
      const badSavedItem = await badItemDescription.save();
      error = badSavedItem;
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    done();
  })

 
  it('should find hardcoded and auto-generated entries from seed.js in database', async (done) => {
    const item100 = await db.Price.find({itemId: 100});
    const item110 = await db.Price.find({itemId: 109});

    expect(item100[0].price).toBe(12.99);
    expect(item100[0].currency).toBe('$');
    expect(item110[0].price).toBeDefined();
    done();
  })

});