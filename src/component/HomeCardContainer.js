import { useEffect, useState } from "react";
import Card from "./Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const HomeCardContainer = () => {
  const [bookRef, SetBookRef] = useState([]);

  useEffect(() => {
    const show = async () => {
      const queryData = await getDocs(collection(db, "readers"));
      return queryData;
    };
    show()
      .then((val) => SetBookRef(val.docs))
      // .then((val)=>console.log(val.docs))
      .catch((err) => prompt(err));
  }, []);

  return (
    <div className=" lg:py-14 p-10 lg:mx-28">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Choose your Books
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Know about 
        </p>
      </div>
      <div className="border-b-[1px] my-10">

      </div>

      <div className="flex justify-center">
        <div className=" lg:py-2 flex w-full flex-wrap border-b-[1px]">
          {bookRef.slice(0, 8).map((c) => {
            return (
              <Link
                to={
                  "/book/" +
                  c._document.data.value.mapValue.fields.bId.stringValue
                }
              >
                <Card details={c._document.data.value.mapValue.fields} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCardContainer;
