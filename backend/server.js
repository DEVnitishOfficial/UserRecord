const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nitishOfficial:nitish123@cluster0.hxbp9yn.mongodb.net/User_record', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  fatherName: String,
  motherName: String,
  dob: String,
  mobileNo: String,
  whatsappNo: String,
  panNo: String,
  aadharNo: String,
  caste: String,
});

const User = mongoose.model('User', userSchema);

// API to save user details
app.post('/api/user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User details saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to fetch user details by name
app.get('/api/user/:name', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
