import { addDoc, collection, doc, getDocs, setDoc } from "@firebase/firestore";
import server$ from "solid-start/server";

import firestore from "~/utils/firebase";
import { Education } from "~/types";

const collectionName = "education";
const collectionRef = collection(firestore, collectionName);

export const allEducations = server$(async (): Promise<Education[]> => {
  const result = await getDocs(collectionRef);
  return result.docs.map((doc) => {
    const data = { id: doc.id, ...doc.data() };
    return data as Education;
  });
});

export const mutateEducation = server$(
  async (education: Education): Promise<{ message: string }> => {
    if (education.id) {
      await setDoc(
        doc(firestore, `${collectionName}/${education.id}`),
        education,
        { merge: true }
      );
    } else {
      delete education.id;
      await addDoc(collectionRef, education);
    }
    return {
      message: "Done",
    };
  }
);
