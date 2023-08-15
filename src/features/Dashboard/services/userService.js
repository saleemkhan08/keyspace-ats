import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
} from "firebase/firestore";
import { app } from "../../../firebase"; // import your Firebase app

const db = getFirestore(app);

// Function to create an employee
const createEmployee = async (employee) => {
  await setDoc(doc(db, "users", employee.id), employee);
};

// Function to create bulk number of users
const bulkUserCreate = async (users) => {
  // Get a new write batch
  const batch = writeBatch(db);

  users.forEach((user) => {
    if (user.email) {
      const docRef = doc(db, "userUploads", user.email);
      batch.set(docRef, user);
      console.log("SalValue : ", { docRef, user });
    }
  });
  return batch.commit(); // Returns a promise
};

// Function to get an employee
const getUsers = async ({
  collectionName,
  sortField,
  sortDirection,
  pageSize,
  lastDoc,
}) => {
  let userQuery;
  if (lastDoc === undefined) {
    // Query the first page of docs
    userQuery = query(
      collection(db, collectionName),
      orderBy(sortField, sortDirection),
      limit(pageSize)
    );
  } else {
    // Construct a new query starting at this document,
    userQuery = query(
      collection(db, collectionName),
      orderBy(sortField, sortDirection),
      startAfter(lastDoc),
      limit(pageSize)
    );
  }

  const documentSnapshots = await getDocs(userQuery);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  const list = documentSnapshots.docs.map((doc) => doc.data());

  return { list, lastDoc: lastVisible };
};

// Function to update an employee
const updateEmployee = async (id, updatedEmployee) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, updatedEmployee);
};

// Function to delete an employee
const deleteEmployee = async (id) => {
  await deleteDoc(doc(db, "users", id));
};

export {
  bulkUserCreate,
  createEmployee,
  getUsers,
  updateEmployee,
  deleteEmployee,
};
