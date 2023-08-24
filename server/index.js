const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./codewayfullstackcase-firebase-adminsdk-juy9q-cf7c6ec395.json');

const app = express();
const port = 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());
app.use(cors());

app.get('/api/files', async (req, res) => {
  try {
    const snapshot = await db.collection('configFiles').get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.patch('/api/files/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      const updates = req.body;
  
      // Get the existing document data
      const docRef = db.collection('configFiles').doc(itemId);
      const docSnapshot = await docRef.get();
      const existingData = docSnapshot.data();
  
      // Remove the property from both the document and the object
      const updatedData = { ...existingData };
      for (const field in updates) {
        if (updates[field] === null) {
          delete updatedData[field]; // Remove the property from the object
          await docRef.update({ [field]: admin.firestore.FieldValue.delete() }); // Remove from Firestore
        } else {
          updatedData[field] = updates[field]; // Update the object
          await docRef.update({ [field]: updates[field] }); // Update in Firestore
        }
      }
  
      res.json({ message: 'Item updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating item' });
    }
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
