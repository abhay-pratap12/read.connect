import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storeImg } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import bookstoreImg from "../utils/images/bookstore.png";
// import { getDatabase, ref, set } from "firebase/database";
// import { getDatabase, set } from "firebase/database";

const AddToStore = () => {
  const auth = getAuth();

  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [bookOfCat, setBookOfCat] = useState("");
  const [img, setImg] = useState("");
  const [rate, setRate] = useState("");
  const [ig, setIg] = useState("");
  // const [bookId,setBookId] = useState('na')

  //to get user Uid
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserid(uid);
      } else {
        prompt("You are Sign Out");
      }
    });
  }, []);

  const clickHandle = async () => {
    //to upload image to storage
    const val = v4();
    const imgRef = ref(storeImg, `files/${val}`);
    uploadBytes(imgRef, img);
    //ye val ku kuki jo bhi name dete ho ushi naam s save hoti hai aur bd me render me bss naam k frk hota hai ....toh ishliye

    //to add data to data base
    try {
      const docRef = await addDoc(collection(db, `readers`), {
        TitleOfBook: title,
        Author: author,
        Discription: desc,
        Category: bookOfCat,
        Rating: rate,
        ImgVal: val,
        userId: userid,
        instaId: ig,
      });

      await updateDoc(docRef, {
        bId: docRef.id,
      });
    } catch (e) {
      prompt("Error adding document: ", e);
    }
  };

  return (
    <div className="flex justify-center flex-wrap">
      <div className="flex w-4/6 justify-center flex-wrap ">
        <div className="lg:w-6/12 w-full">
          <h1 className="font-bold text-2xl w-full mt-10 mb-5 p-1 mx-2">
            Add to your store
          </h1>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Title"
            className="p-1 lg:m-2 my-2 border w-full "
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Enter Author name"
            className="p-1 lg:m-2 my-2 border w-full"
          />
          <textarea
            rows="4"
            cols="50"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Write something about book"
            className="p-1 lg:m-2 my-2 border w-full"
          />
          <label className="px-2 text-blue-400">Rating:</label>
          <select
            className="p-1 lg:m-2 my-2 border w-full"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            className="p-1 lg:m-2 mb-2 border w-full"
            value={bookOfCat}
            onChange={(e) => setBookOfCat(e.target.value)}
          >
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select>
          <input
            type="file"
            className="p-1 lg:m-2 my-2 w-full"
            //value = {img}
            onChange={(e) => setImg(e.target.files[0])}
          />
          <div className="">
            <p className="text-blue-500 p-2 px-3 pt-3">
              How you want to connect with user ?
            </p>
            <input
              value={ig}
              onChange={(e) => setIg(e.target.value)}
              type="text"
              placeholder="Enter your instagram Id"
              className="p-1 lg:m-2 my-2 border w-full"
            />
            <div className="text-gray-400 p-2">Ex: toffee_k21</div>
            <div className="text-gray-200 p-2">
              Upcoming: we are connecting through ig only further lots of
              plateform will be integrated so that user can choose as of their
              prefrence
            </div>
          </div>
          <Link to={"/reader"}>
            <button
              className="p-1 m-2 w-1/2 bg-blue-100 rounded-md"
              onClick={clickHandle}
            >
              Add
            </button>
          </Link>
        </div>
        <div className="lg:w-6/12 w-full lg:m-0 m-2">
          <img src={bookstoreImg} />
        </div>
      </div>
    </div>
  );
};

export default AddToStore;
